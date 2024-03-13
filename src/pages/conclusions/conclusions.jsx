import React, { useEffect } from "react";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-icon.svg";
import { useState } from "react";
import "./conclusions.css";
import Pagination from "../../components/pagionation/pagination";
import { NavLink, useNavigate } from "react-router-dom";
import { ReactComponent as SelectedIcon } from "../../assets/icons/selected-icon.svg";
import { mainApi } from "../../components/utils/main-api";
import Snacbar from "../../components/snackbar/snackbar";

function Conclusions() {
  const [conclusionsData, setConclusionsData] = useState([]);
  const [conclusions, setConclusions] = useState([]);
  const [moogoldBalance, setMoogoldBalance] = useState();
  const [isSnackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarText, setSnackbarText] = useState("");
  const snackbarActions = (snackText) => {
    setSnackbarVisible(true);
    setSnackbarText(snackText);
    setTimeout(() => {
      setSnackbarVisible(false);
    }, 3000);
  };

  const refresh = () => {
    mainApi
      .getOutputsAction()
      .then((res) => {
        setConclusionsData(res.results);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  useEffect(() => {
    refresh();
  }, []);

  const navigate = useNavigate();
  const aboutConclusion = (id) => {
    navigate(`/conclusion/${id}`);
  };
  const [selected, setSelected] = useState([]);

  const toggleSelected = (data) => {
    const filteredSelectedItems = selected.some(
      (selected) => selected.id === data.id
    );
    if (filteredSelectedItems) {
      setSelected(selected.filter((item) => item.id !== data.id));
    } else {
      setSelected([...selected, data]);
    }
  };

  const toggleAllDataSelected = () => {
    if (selected.length == conclusionsData.length) {
      setSelected([]);
    } else {
      setSelected([...conclusionsData]);
    }
  };

  const deleteOutput = (id) => {
    mainApi
      .deleteOutputAction(id)
      .then((res) => {
        snackbarActions("Вывод удален");
        refresh();
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  const approveOutput = (id) => {
    mainApi
      .approveOutputAction(id)
      .then((res) => {
        snackbarActions("Вывод одобрен");
      })
      .catch((error) => {
        console.log(error);
        snackbarActions("Ошибка одобрения вывода");
      });
  };

  const [activeFilter, setActiveFilter] = useState("all");
  const filterItems = (type) => {
    setActiveFilter(type);
    if (type !== "all") {
      const filtered = conclusionsData.filter((item) => item.status === type);
      setConclusions(filtered);
    } else {
      setConclusions(conclusionsData.slice(0, 10));
    }
  };

  return (
    <>
      {isSnackbarVisible ? (
        <Snacbar visible={isSnackbarVisible} text={snackbarText} />
      ) : (
        ""
      )}

      <div className="template_page analytics_page">
        <div className="template_page_title">
          <h1>Выводы</h1>

          <div className="users_search">
            <SearchIcon />
            <input type="text" placeholder="Поиск" />
          </div>
        </div>
        <div className="cases_top_togglers">
          <button
            className="main_btn"
            onClick={() => filterItems("all")}
          >
            <p>Все выводы</p>
          </button>
          <button
            className={
              activeFilter == "proccess"
                ? "main_btn top_active_filter"
                : "main_btn"
            }
            onClick={() => filterItems("proccess")}
          >
            <p>В процессе</p>
          </button>
          <button
            className={
              activeFilter == "completed"
                ? "main_btn top_active_filter"
                : "main_btn"
            }
            onClick={() => filterItems("completed")}
          >
            <p>Завершён</p>
          </button>
          <button
            className={
              activeFilter == "technical-error"
                ? "main_btn top_active_filter"
                : "main_btn"
            }
            onClick={() => filterItems("technical-error")}
          >
            <p>Техническая ошибка</p>
          </button>
        </div>
        

        <div className="payments_table">
          <table className="users_table">
            <thead>
              <tr>
                <th className="tal">ID</th>
                <th className="tal">ID вывода</th>
                <th className="tal">Тип вывода</th>
                <th className="tac">Статус</th>

                <td className="users_select">
                  <div className="select_all">
                    <div className="is_selected ml_55px">
                      {selected.length == conclusionsData.length ? (
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
              {conclusions && conclusions.length
                ? conclusions.map((conclusion) => (
                    <tr key={conclusion.id}>
                      <td className="">
                        <p>{conclusion.id}</p>
                      </td>
                      <td className="">
                        <p>${conclusion.output_id}</p>
                      </td>
                      <td className="">
                        <p>{conclusion.type == "moogold" ? "Moogold" : ""}</p>
                      </td>
                      <td>
                        <div className="cases_table_actions_list">
                          {conclusion.status == "completed" ? (
                            <button className="main_btn main_btn_template_orange output_ended">
                              <p>Завершён</p>
                            </button>
                          ) : (
                            ""
                          )}

                          {conclusion.status == "proccess" ? (
                            <button
                              className="main_btn main_btn_template_green"
                              onClick={() =>
                                approveOutput(conclusion.output_id)
                              }
                            >
                              <p>Одобрить</p>
                            </button>
                          ) : (
                            ""
                          )}

                          {conclusion.status == "technical-error" ? (
                            <button className="main_btn main_btn_template_red">
                              <p>Техническая ошибка</p>
                            </button>
                          ) : (
                            ""
                          )}
                        </div>
                      </td>

                      <td>
                        <div className="cases_table_actions conclisions_item_list">
                          <div
                            title="посмотреть"
                            className="cases_table_edit"
                            onClick={() =>
                              aboutConclusion(conclusion.output_id)
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
                                d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z"
                                fill="black"
                              />
                            </svg>
                          </div>

                          <div
                            title="удалить"
                            className="cases_table_delete"
                            onClick={() => deleteOutput(conclusion.output_id)}
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
                          <div className="is_selected">
                            {selected.some(
                              (selected) => selected.id === conclusion.id
                            ) ? (
                              <SelectedIcon
                                onClick={() => toggleSelected(conclusion)}
                              />
                            ) : (
                              <div
                                className="not_selected_item"
                                onClick={() => toggleSelected(conclusion)}
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
            {conclusionsData && conclusionsData.length ? (
              <Pagination
                allData={conclusionsData}
                itemsPerPage={10}
                activeFilter={"all"}
                paginationData={setConclusions}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Conclusions;
