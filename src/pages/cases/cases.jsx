import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-icon.svg";
import { ReactComponent as TopIcon } from "../../assets/icons/top.svg";
import { ReactComponent as SelectedIcon } from "../../assets/icons/selected-icon.svg";

import Pagination from "../../components/pagionation/pagination";
import { mainApi } from "../../components/utils/main-api";
import "./cases.css";
import Snacbar from "../../components/snackbar/snackbar";

function Cases() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [cases, setCases] = useState();
  const navigate = useNavigate();
  const [isSnackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarText, setSnackbarText] = useState("");
  const snackbarActions = (snackText) => {
    setSnackbarVisible(true);
    setSnackbarText(snackText);
    setTimeout(() => {
      setSnackbarVisible(false);
    }, 2000);
  };
  const [dataLength, setDataLength] = useState();
  const [currentPage, setCurrentPage] = useState(0);
  useEffect(() => {
    handleGetCases(currentPage * 10);
  }, [currentPage]);

  const handleGetCases = (offset = 0) => {
    mainApi
      .getCase(offset)
      .then((res) => {
        setCases(res.results);
        setDataLength(res.count);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const [categories, setCategories] = useState([]);

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

  const editCase = (id) => {
    navigate(`/edit-case/${id}`);
  };

  const handleDeleteCase = (id) => {
    mainApi
      .deleteCase(id)
      .then((res) => {
        handleGetCases();
        snackbarActions("Кейс удалён!");
      })
      .catch((error) => {
        console.log("error", error);
      });
    handleGetCases();
  };

  const [activeFilter, setActiveFilter] = useState("");
  const filterItems = (type) => {
    setActiveFilter(type);
    if (type !== "all") {
      const filtered = cases.filter(
        (item) => item.category && item.category.category_id === type
      );

      setCases(filtered);
    } else {
      setCases(cases.slice(0, 10));
    }
  };
  const [selected, setSelected] = useState([]);
  const toggleSelected = (data) => {
    const filteredSelectedItems = selected.some(
      (selected) => selected.case_id === data.case_id
    );
    if (filteredSelectedItems) {
      setSelected(selected.filter((item) => item.case_id !== data.case_id));
    } else {
      setSelected([...selected, data]);
    }
  };
  const toggleAllDataSelected = () => {
    if (selected.length == cases.length) {
      setSelected([]);
    } else {
      setSelected([...cases]);
    }
  };

  return (
    <>
      {isSnackbarVisible ? (
        <Snacbar visible={isSnackbarVisible} text={snackbarText} />
      ) : (
        ""
      )}

      <div className="template_page employees_page">
        <div className="template_page_title">
          <h1>Кейсы</h1>
          <div className="top_cases_actions">
            <NavLink to="/create-case">
              <button className="main_btn add_case_btn main_btn_template">
                <p>Добавить кейс</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M12.6663 8.66667H8.66634V12.6667H7.33301V8.66667H3.33301V7.33334H7.33301V3.33334H8.66634V7.33334H12.6663V8.66667Z"
                    fill="white"
                  />
                </svg>
              </button>
            </NavLink>
            <NavLink to="/cases-category">
              <button className="main_btn add_categories_btn main_btn_template_orange">
                <p>Добавить категорию</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M12.6663 8.66667H8.66634V12.6667H7.33301V8.66667H3.33301V7.33334H7.33301V3.33334H8.66634V7.33334H12.6663V8.66667Z"
                    fill="white"
                  />
                </svg>
              </button>
            </NavLink>
            <NavLink to="/conditions">
              <button className="main_btn main_btn_template_red ">
                <p>Добавить условие</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M12.6663 8.66667H8.66634V12.6667H7.33301V8.66667H3.33301V7.33334H7.33301V3.33334H8.66634V7.33334H12.6663V8.66667Z"
                    fill="white"
                  />
                </svg>
              </button>
            </NavLink>
          </div>
        </div>
        <div className="template_page_content">
          <div className="cases_wrapper">
            <div className="cases_top_togglers">
              <button
                className={
                  activeFilter == "all"
                    ? "main_btn top_active_filter"
                    : "main_btn"
                }
                onClick={() => filterItems("all")}
              >
                <p>Все кейсы</p>
              </button>
              {categories && categories.length
                ? categories.map((categories) => (
                    <button
                      className={
                        activeFilter == categories.category_id
                          ? "main_btn top_active_filter"
                          : "main_btn"
                      }
                      key={categories.name}
                      onClick={() => filterItems(categories.category_id)}
                    >
                      <p>{categories.name}</p>
                    </button>
                  ))
                : ""}
            </div>
            <div className="cases_top_actions">
              <button className="main_btn main_btn_template_red">
                <p>Действие над товаром</p>
              </button>
              <div className="users_search">
                <SearchIcon />
                <input type="text" placeholder="Поиск" />
              </div>
            </div>
            <div className="user_line"></div>

            {cases && cases.length ? (
              <>
                <table className="cases_table">
                  <thead>
                    <tr>
                      <td> ID кейса</td>
                      <td>Название</td>
                      <td>Категория</td>
                      <td className="tac">Цена (руб)</td>
                      <td className="tac">Бесплатный</td>
                      <td className="tac">Дата создания</td>
                      <td>
                        <div className="select_all">
                          <div className="is_selected ">
                            {selected.length == cases.length ? (
                              <SelectedIcon onClick={toggleAllDataSelected} />
                            ) : (
                              <div
                                className="not_selected_item"
                                onClick={toggleAllDataSelected}
                              ></div>
                            )}
                          </div>{" "}
                          Выделить все
                        </div>
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    {cases && cases.length
                      ? cases.map((cases) => (
                          <tr key={cases.case_id}>
                            <td>{cases.case_id || "-"}</td>
                            <td>{cases.name || "-"}</td>
                            <td>
                              {cases.category && cases.category.name
                                ? cases.category.name
                                : "-"}
                            </td>
                            <td className="tac">{cases.price || 0} ₽</td>

                            <td className="tac">
                              {cases.case_free ? "Да" : "Нет"}
                            </td>

                            <td className="tac">
                              {cases && cases.created_at.split("T")[0]}
                              <br />
                              {cases &&
                                cases.created_at.split("T")[1].split(".")[0]}
                            </td>
                            <td>
                              <div className="cases_table_actions">
                                <div className="cases_table_actions_list">
                                  <div
                                    title="редактировать"
                                    className="cases_table_edit"
                                    onClick={() => editCase(cases.case_id)}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                    >
                                      <path
                                        d="M2.99902 17.2512V21.0012H6.74902L17.809 9.94125L14.059 6.19125L2.99902 17.2512ZM20.709 7.04125C21.099 6.65125 21.099 6.02125 20.709 5.63125L18.369 3.29125C17.979 2.90125 17.349 2.90125 16.959 3.29125L15.129 5.12125L18.879 8.87125L20.709 7.04125Z"
                                        fill="black"
                                      />
                                    </svg>
                                  </div>

                                  <div
                                    title="удалить"
                                    className="cases_table_delete"
                                    onClick={() =>
                                      handleDeleteCase(cases.case_id)
                                    }
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
                                  </div>
                                </div>
                                <div className="is_selected ">
                                  {selected.some(
                                    (selected) =>
                                      selected.case_id === cases.case_id
                                  ) ? (
                                    <SelectedIcon
                                      onClick={() => toggleSelected(cases)}
                                    />
                                  ) : (
                                    <div
                                      className="not_selected_item"
                                      onClick={() => toggleSelected(cases)}
                                    ></div>
                                  )}
                                </div>
                              </div>
                            </td>
                          </tr>
                        ))
                      : ""}
                  </tbody>
                </table>
                <div className="cases_paginations">
                  <Pagination
                    pageCount={Math.ceil(dataLength / 10)}
                    onPageChange={setCurrentPage}
                  />
                </div>
              </>
            ) : (
              <p className="empty_error">Кейсы отсутствуют</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Cases;
