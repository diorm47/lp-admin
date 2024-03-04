import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-icon.svg";
import { ReactComponent as SelectedIcon } from "../../assets/icons/selected-icon.svg";
import Pagination from "../../components/pagionation/pagination";
import Snacbar from "../../components/snackbar/snackbar";
import { mainApi } from "../../components/utils/main-api";

function Conditions() {
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

  const [casesItems, setCasesItems] = useState("");
  const [items, setItems] = useState("");

  const getConditionsList = () => {
    mainApi
      .getConditions()
      .then((res) => {
        setCasesItems(res.results);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    getConditionsList();
  }, []);

  const deleteItem = (id) => {
    mainApi
      .deleteCondition(id)
      .then((res) => {
        snackbarActions("Условия удалёна!");
      })
      .catch((error) => {
        console.log("error", error);
      });
    setTimeout(() => {
      getConditionsList();
      snackbarActions("Условия удалёна!");
    }, 1500);
  };

  const editItem = (id) => {
    navigate(`/edit-condition/${id}`);
  };

  const [selected, setSelected] = useState([]);
  const toggleSelected = (data) => {
    const filteredSelectedItems = selected.some(
      (selected) => selected.condition_id === data.condition_id
    );
    if (filteredSelectedItems) {
      setSelected(
        selected.filter((item) => item.condition_id !== data.condition_id)
      );
    } else {
      setSelected([...selected, data]);
    }
  };
  const toggleAllDataSelected = () => {
    if (selected.length == casesItems.length) {
      setSelected([]);
    } else {
      setSelected([...casesItems]);
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
          <h1>Условии</h1>
          <div className="top_cases_actions">
            <NavLink to="/create-condition">
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
          </div>{" "}
        </div>
        <div className="template_page_content">
          <div className="cases_wrapper">
            <div className="cases_top_actions">
              <div className="users_search">
                <SearchIcon />
                <input type="text" placeholder="Поиск" />
              </div>
            </div>
            <div className="user_line"></div>

            {items && items.length ? (
              <table className="cases_table">
                <thead>
                  <tr>
                    <td>ID условии</td>
                    <td>Название</td>
                    <td>Описание</td>
                    <td className="tac">Тип</td>
                    <td className="tac">Цена (руб)</td>
                    <td className="tac">Время</td>
                    <td className="tac">Время перезагрузки</td>

                    <td>
                      <div className="select_all">
                        <div className="is_selected ">
                          {selected.length == casesItems.length ? (
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
                  {items && items.length
                    ? items.map((item) => (
                        <tr>
                          <td>{item.condition_id}</td>
                          <td>{item.name}</td>
                          <td>{item.description}</td>
                          <td className="tac">
                            {item.type_condition == "calc"
                              ? "Начисление"
                              : "Время"}
                          </td>
                          <td className="tac">{item.price} ₽</td>
                          <td className="tac">{item.time}</td>
                          <td className="tac">{item.time_reboot}</td>

                          <td>
                            <div className="cases_table_actions">
                              <div className="cases_table_actions_list">
                                <div
                                  title="редактировать"
                                  className="cases_table_edit"
                                  onClick={() => editItem(item.condition_id)}
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
                                  onClick={() => deleteItem(item.condition_id)}
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
                                    selected.condition_id === item.condition_id
                                ) ? (
                                  <SelectedIcon
                                    onClick={() => toggleSelected(item)}
                                  />
                                ) : (
                                  <div
                                    className="not_selected_item"
                                    onClick={() => toggleSelected(item)}
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
            ) : (
              <p className="empty_error">Предметы отсутствуют</p>
            )}
            <div className="cases_paginations">
              {casesItems ? (
                <Pagination allData={casesItems} paginationData={setItems} />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Conditions;
