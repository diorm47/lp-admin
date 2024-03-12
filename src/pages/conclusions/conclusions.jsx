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

          <div className="top_cases_actions">
            <NavLink to="/create-conclusion">
              <button className="main_btn add_case_btn main_btn_template">
                <p>Добавить вывод</p>
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

        <div className="cases_top_actions">
          <div></div>

          <div className="users_search">
            <SearchIcon />
            <input type="text" placeholder="Поиск" />
          </div>
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
                        <p>{conclusion.type == 'moogold' ? 'Moogold' : ''}</p>
                      </td>
                      <td>
                        <div className="cases_table_actions_list">
                          {conclusion.status == "completed" ? (
                            <button className="main_btn main_btn_template_green">
                              <p>Завершенный</p>
                            </button>
                          ) : (
                            ""
                          )}

                          {conclusion.status == "proccess" ? (
                            <button className="main_btn main_btn_template_orange">
                              <p>В процессе</p>
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
                            title="редактировать"
                            className="cases_table_edit"
                            onClick={() => aboutConclusion(conclusion.id)}
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
