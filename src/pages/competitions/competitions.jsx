import React, { useEffect, useState } from "react";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-icon.svg";
import { NavLink, useNavigate } from "react-router-dom";
import "./competitions.css";
import Pagination from "../../components/pagionation/pagination";
import { ReactComponent as SelectedIcon } from "../../assets/icons/selected-icon.svg";
import { mainApi } from "../../components/utils/main-api";
import Snacbar from "../../components/snackbar/snackbar";

function Competitions() {
  const navigate = useNavigate()
  const [isSnackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarText, setSnackbarText] = useState("");
  const snackbarActions = (snackText) => {
    setSnackbarVisible(true);
    setSnackbarText(snackText);
    setTimeout(() => {
      setSnackbarVisible(false);
    }, 2000);
  };
  const [competitionsData, setCompetitionsData] = useState([]);
  const [competitions, setCompetitions] = useState([]);

  const [selected, setSelected] = useState([]);
  const toggleSelected = (data) => {
    const filteredSelectedItems = selected.some(
      (selected) => selected.contest_id === data.contest_id
    );
    if (filteredSelectedItems) {
      setSelected(
        selected.filter((item) => item.contest_id !== data.contest_id)
      );
    } else {
      setSelected([...selected, data]);
    }
  };
  const toggleAllDataSelected = () => {
    if (selected.length == competitionsData.length) {
      setSelected([]);
    } else {
      setSelected([...competitionsData]);
    }
  };

  const getContests = () => {
    mainApi
      .getContestsAction()
      .then((res) => {
        setCompetitionsData(res.results);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  useEffect(() => {
    getContests();
  }, []);

  const deleteContest = (id) => {
    mainApi
      .deleteContestAction(id)
      .then((res) => {
        snackbarActions("Конкурс удалён");
        getContests()
      })
      .catch((error) => {
        // snackbarActions("Ошибка удаления конкурса");
      });

      snackbarActions("Конкурс удалён");
      setTimeout(() => {
        getContests()

      }, 1300)
  };
  const editContest = (id) => {
    navigate(`/competitons/${id}`);
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
          <h1>Конкурсы</h1>

          <NavLink to="/create-competiton">
            <button className="main_btn add_competition main_btn_template">
              <p>Добавить конкурс</p>
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
        <div className="users_search_competions">
          <div className="users_search">
            <SearchIcon />
            <input type="text" placeholder="Поиск конкурса" />
          </div>
        </div>

        {competitions && competitions.length ? (
          <table className="cases_table competitions_table">
            <thead>
              <tr>
                <td>ID</td>
                <td>Название</td>
                <td>Приз</td>
                <td className="tac">Кол-во участников</td>
                <td className="tac">Условие</td>
                <td className="tac">Одноразовый</td>
                <td className="tac">Активный</td>
                <td className="tac">Дата завершения</td>
                <td className="users_select">
                  <div className="select_all">
                    <div className="is_selected ml_55px">
                      {selected.length == competitionsData.length ? (
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
              {competitions && competitions.length
                ? competitions.map((competition) => (
                    <tr key={competition.contest_id}>
                      <td>{competition.contest_id || "-"}</td>
                      <td>{competition.name || "-"}</td>
                      <td>
                        {competition.current_award &&
                        competition.current_award.name
                          ? competition.current_award.name
                          : "-"}
                      </td>
                      <td className="tac">{competition.count_participants}</td>
                      <td className="tac">{competition.conditions || "-"}</td>
                      <td className="tac">
                        {competition.one_time ? "Да" : "Нет"}
                      </td>
                      <td className="tac">
                        {competition.active ? "Да" : "Нет"}
                      </td>
                      <td className="tac">
                        {(competition &&
                          competition.next_start.split("T")[0]) ||
                          "-"}{" "}
                        <br />{" "}
                        {(competition &&
                          competition.next_start.split("T")[1].split(".")[0]) ||
                          "-"}
                      </td>
                      <td className="cases_table_actions_wrapper_comp">
                        <div className="cases_table_actions">
                          <div className="cases_table_actions_list">
                            <div
                              title="редактировать"
                              className="cases_table_edit"
                              onClick={() => editContest(competition.contest_id)}
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
                                deleteContest(competition.contest_id)
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
                          <div className="is_selected ml_55px">
                            {selected.some(
                              (selected) =>
                                selected.contest_id === competition.contest_id
                            ) ? (
                              <SelectedIcon
                                onClick={() => toggleSelected(competition)}
                              />
                            ) : (
                              <div
                                className="not_selected_item"
                                onClick={() => toggleSelected(competition)}
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
          <p className="empty_error">Конкурсов отсутствуют</p>
        )}

        <div className="cases_paginations">
          {competitionsData ? (
            <Pagination
              length={16}
              allData={competitionsData}
              paginationData={setCompetitions}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default Competitions;
