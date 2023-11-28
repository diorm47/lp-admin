import React from "react";
import "./case-category.css";
import { InputWithLabel } from "../../components/utils/utils";
import { useState } from "react";
import { ReactComponent as ArrowBackIcon } from "../../assets/icons/arrow-back.svg";
import { NavLink } from "react-router-dom";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-icon.svg";
import { mainApi } from "../../components/utils/main-api";
import { useEffect } from "react";
import Snacbar from "../../components/snackbar/snackbar";

function CaseCategory() {
  const [value, setValue] = useState("");
  const [categories, setCategories] = useState([]);
  const [updatingCategory, setUpdatingCategory] = useState();
  const [isSnackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarText, setSnackbarText] = useState("");
  const snackbarActions = (snackText) => {
    setSnackbarVisible(true);
    setSnackbarText(snackText);
    setTimeout(() => {
      setSnackbarVisible(false);
    }, 2000);
  };

  const getCategory = () => {
    mainApi
      .getCaseCategoryAction()
      .then((res) => {
        setCategories(res.categories);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  useEffect(() => {
    getCategory();
  }, []);

  const saveCategory = () => {
    mainApi
      .setCaseCategoryAction({
        name: value,
      })
      .then((res) => {
        snackbarActions('Категория сохранена!')
        setValue("");
        getCategory();

      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  const deleteCategory = (id) => {
    mainApi
      .deleteCaseCategoryAction({
        category_id: id,
      })
      .then((res) => {
        getCategory();
        snackbarActions('Категория удалена!')
        setUpdatingCategory();
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  const updateCategory = () => {
    mainApi
      .updateCaseCategoryAction({
        category_id: updatingCategory.category_id,
        name: value,
      })
      .then((res) => {
        snackbarActions('Категория изменена!')
        setUpdatingCategory("");
        getCategory();
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  const setUpdating = (data) => {
    setUpdatingCategory(data);
    setValue(data.name);
  };
  return (
    <>
      {isSnackbarVisible ? (
        <Snacbar visible={isSnackbarVisible} text={snackbarText} />
      ) : (
        ""
      )}
      <div className="template_page category_page">
        <div className="template_page_title">
          <h1>Категории кейса</h1>
          <div className="users_search">
            <SearchIcon />
            <input type="text" placeholder="Поиск" />
          </div>
        </div>
        <div className="user_line"></div>
        <NavLink to="/cases">
          <div className="back_btn">
            <ArrowBackIcon /> <p>Назад</p>
          </div>
        </NavLink>
        <div className="categories_page">
          {categories && categories.length ? (
            <div className="categories_list">
              {categories && categories[0]
                ? categories.map((categories) => (
                    <div
                      className={
                        updatingCategory &&
                        updatingCategory.category_id === categories.category_id
                          ? "categories_list_item active_cat_item"
                          : "categories_list_item"
                      }
                    >
                      <p>{categories.name}</p>
                      <div className="categories_list_item_buttons">
                        <button
                          title="Удалить"
                          className="delete_category_btn"
                          onClick={() => deleteCategory(categories.category_id)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM19 4H15.5L14.5 3H9.5L8.5 4H5V6H19V4Z"
                              fill="black"
                            />
                          </svg>
                        </button>
                        <button
                          title="Реадактировать"
                          className="edit_category_btn"
                          onClick={() => setUpdating(categories)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M2.99902 17.2513V21.0013H6.74902L17.809 9.94128L14.059 6.19128L2.99902 17.2513ZM20.709 7.04128C21.099 6.65128 21.099 6.02128 20.709 5.63128L18.369 3.29128C17.979 2.90128 17.349 2.90128 16.959 3.29128L15.129 5.12128L18.879 8.87128L20.709 7.04128Z"
                              fill="black"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))
                : ""}
            </div>
          ) : (
            ""
          )}

          <div className="add_category_block">
            {updatingCategory ? (
              <>
                <div className="add_employe_input add_category_input">
                  <InputWithLabel
                    id="case_category"
                    label="Категория"
                    value={value}
                    event={setValue}
                  />
                </div>
                <button
                  className="main_btn save_cat_btn"
                  onClick={updateCategory}
                >
                  Сохранить изменений
                </button>
              </>
            ) : (
              <>
                <div className="add_employe_input add_category_input">
                  <InputWithLabel
                    id="case_category"
                    label="Категория"
                    value={value}
                    event={setValue}
                  />
                </div>
                <button
                  className="main_btn save_cat_btn"
                  onClick={saveCategory}
                >
                  Сохранить
                </button>
              </>
            )}
          </div>
        </div>
      </div>{" "}
    </>
  );
}

export default CaseCategory;
