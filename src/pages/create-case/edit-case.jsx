import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { ReactComponent as ArrowBackIcon } from "../../assets/icons/arrow-back.svg";
import "./create-case.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import { useEffect } from "react";
import { mainApi } from "../../components/utils/main-api";
import CaseItems from "../../components/case-items/case-items";
import Snacbar from "../../components/snackbar/snackbar";

function EditCase() {
  const [modal, setModal] = useState(false);
  const [caseImage, setCaseImage] = useState();
  const [caseImageU, setCaseImageU] = useState();
  const [caseImageRecieved, setCaseImageRecieved] = useState();
  const [caseName, setCaseName] = useState("");
  const [caseCategoryId, setCaseCategoryId] = useState("");
  const [caseDescriptions, setCaseDescriptions] = useState("");
  const [caseID, setCaseID] = useState();
  const [caseData, setCaseData] = useState();
  const [caseItems, setCaseItems] = useState();
  const [categories, setCategories] = useState([]);
  const params = useParams();

  const [isSnackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarText, setSnackbarText] = useState("");
  const snackbarActions = (snackText) => {
    setSnackbarVisible(true);
    setSnackbarText(snackText);
    setTimeout(() => {
      setSnackbarVisible(false);
    }, 2000);
  };

  useEffect(() => {
    mainApi
      .getCaseCategoryAction()
      .then((res) => {
        setCategories(res.results);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);
  useEffect(() => {
    mainApi
      .getCaseByTranslit(params.case)
      .then((res) => {
        setCaseData(res);
        setCaseName(res.name);
        setCaseCategoryId(res.category.category_id);
        setCaseImageRecieved(res.image);
        setCaseID(res.case_id);
        setCaseItems(res.items);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  const saveImage = (e) => {
    const file = e.target.files[0];
    setCaseImageU(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setCaseImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const saveCase = () => {
    mainApi
      .updateCase({
        name: caseName,
        active: true,
        image: caseImage,
        category_id: caseCategoryId,
        item_ids: caseItems.map((item) => item.item_id),
        condition_ids: [],
      }, params.case)
      .then((res) => {
        snackbarActions("Кейс обновлён!");
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const closeModal = () => {
    setModal(false);
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
          <h1>Редактировать кейс</h1>
        </div>
        <div className="user_line"></div>
        <NavLink to="/cases">
          <div className="back_btn">
            <ArrowBackIcon /> <p>Назад</p>
          </div>
        </NavLink>
        <div className="cases_actions_wrapper">
          <Tabs>
            <TabList>
              <Tab>Главная</Tab>
              <Tab>Цены</Tab>
              <Tab>История покупок</Tab>
              <Tab>Предметы</Tab>
            </TabList>

            <TabPanel>
              <div className="case_tab_content">
                <div className="case_tab_content_title">
                  <p>Информация о кейсе</p>
                </div>
                <div className="case_tab_content_inputs">
                  <div className="case_input_temp">
                    <p>Название товара</p>
                    <input
                      type="text"
                      value={caseName}
                      onChange={(e) => setCaseName(e.target.value)}
                    />
                  </div>

                  <div className="case_input_temp">
                    <p>Категория товара</p>

                    <select
                      onChange={(e) => setCaseCategoryId(e.target.value)}
                      value={caseCategoryId}
                    >
                      {categories && categories[0]
                        ? categories.map((category) => (
                            <option
                              key={category.category_id}
                              value={category.category_id}
                            >
                              {category.name}
                            </option>
                          ))
                        : ""}
                    </select>
                  </div>
                </div>
                <div className="case_tab_content_title">
                  <p>Картинка товара</p>
                </div>
                <div className="case_img_block_wrapper">
                  <div className="case_img_block edit_case_image">
                    {caseImage || caseImageRecieved ? (
                      <div className="case_img_item" title="удалить">
                        <img
                          src={caseImage ? caseImage : caseImageRecieved}
                          alt=""
                        />
                      </div>
                    ) : (
                      ""
                    )}

                    <label htmlFor="upload_img_btn">
                      <div className="case_img_item case_img_add_block">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M18.5 7.5V10.49C18.5 10.49 16.51 10.5 16.5 10.49V7.5H13.5C13.5 7.5 13.51 5.51 13.5 5.5H16.5V2.5H18.5V5.5H21.5V7.5H18.5ZM15.5 11.5V8.5H12.5V5.5H4.5C3.4 5.5 2.5 6.4 2.5 7.5V19.5C2.5 20.6 3.4 21.5 4.5 21.5H16.5C17.6 21.5 18.5 20.6 18.5 19.5V11.5H15.5ZM4.5 19.5L7.5 15.5L9.5 18.5L12.5 14.5L16.5 19.5H4.5Z"
                            fill="#2A72AC"
                          />
                        </svg>
                        <p>Изменить фото</p>
                      </div>
                    </label>

                    <input
                      type="file"
                      accept="image/*"
                      id="upload_img_btn"
                      className="upload_img_input"
                      placeholder="Surat tanlang"
                      onChange={saveImage}
                    />
                  </div>
                  <span>
                    Выберите с компьютера или перетащите в эту область
                  </span>
                </div>
                <div className="case_tab_content_title">
                  <p>Описание товара</p>
                </div>
                <div className="case_tab_content_text">
                  <textarea
                    value={caseDescriptions}
                    onChange={(e) => setCaseDescriptions(e.target.value)}
                  ></textarea>
                </div>
                <span>Максимальное количество символов - 300</span>
                <div className="admin_actions case_actions">
                  <button className="create_admin_btn" onClick={saveCase}>
                    Сохранить
                  </button>
                  <button className="undo_create">Отменить</button>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="case_tab_content">
                <div className="case_tab_content_title">
                  <p>Цены на кейсы</p>
                </div>
                <div className="case_tab_content_inputs">
                  <div className="case_input_temp">
                    <p>Закупочная цена</p>
                    <input type="text" />
                  </div>
                  <div className="case_input_temp">
                    <p>Цена в рублях </p>
                    <input type="text" />
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="case_tab_content">
                <div className="case_tab_content_title">
                  <p>История покупок</p>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="case_tab_content">
                <div className="case_tab_content_title">
                  <p>Предметы, которые выпадают</p>
                </div>

                <div className="case_img_block_wrapper">
                  <div className="case_img_block add_item_case_btn">
                    <div
                      className="case_img_item case_img_add_block"
                      onClick={() => setModal(true)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M18 6V4L16 2H11L9 4V6H5V17C5 17 6 19 7 19H20C20 19 22 18.02 22 17V6H18ZM4 9H2V20C2 21.11 2.89 22 4 22H18C19.11 22 20 21.11 20 20H5.2C4.53726 20 4 19.4627 4 18.8V9ZM11 5C11 4.45 11.53 4 12 4H15C15.46 4 16 4.54 16 5V6H11V5ZM5 6H13.5H22V17C22 18.1 21.1 19 20 19H7C5.9 19 5 18.1 5 17V6Z"
                          fill="#358ed7"
                        />
                        <path
                          d="M9 6H5V17C5 17 6 19 7 19H20C20 19 22 18.02 22 17V6H18H16H13.5H11H9Z"
                          fill="#358ed7"
                        />
                      </svg>
                      <p>Добавить предмет</p>
                    </div>
                  </div>
                  <div className="case_tab_content_title">
                    <p>Предметы внутри кейса</p>
                  </div>
                  <div className="case_items_list">
                    {caseItems && caseItems.length
                      ? caseItems.map((item) => (
                          <div
                            className="case_img_item case_items_list_item"
                            key={caseItems.id}
                          >
                            <img src={item.image} alt="" />
                            <p>{item.name} кр.</p>
                            <p>{item.price} $</p>
                          </div>
                        ))
                      : ""}
                  </div>
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>

      {modal ? <div className="modal_overlay" onClick={closeModal}></div> : ""}

      {modal ? (
        <CaseItems
          setModal={setModal}
          case_id={caseID}
          setCaseItems={setCaseItems}
          caseItems={caseItems}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default EditCase;
