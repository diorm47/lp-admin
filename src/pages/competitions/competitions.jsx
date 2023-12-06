import React, { useState } from "react";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-icon.svg";
import { NavLink } from "react-router-dom";
import "./competitions.css";
import Pagination from "../../components/pagionation/pagination";
import { ReactComponent as SelectedIcon } from "../../assets/icons/selected-icon.svg";

function Competitions() {
  const competitionsData = [
    {
      competiton_id: 6767,
      name: "Кристаллик",
      prize: "100₽",
      competetors: 1200,
      conditions: "1 020 000₽",
      type: "Одноразовый",
      date: "2023-09-01 22:34:23",
    },
    {
      competiton_id: 56576,
      name: "Привет",
      prize: "30%",
      competetors: 45,
      conditions: "500₽",
      type: "Многоразовый",
      date: "2023-09-01 22:34:23",
    },
    {
      competiton_id: 234,
      name: "Кристаллик",
      prize: "100₽",
      competetors: 1200,
      conditions: "1 020 000₽",
      type: "Одноразовый",
      date: "2023-09-01 22:34:23",
    },
    {
      competiton_id: 45675467,
      name: "Кристаллик",
      prize: "100₽",
      competetors: 1200,
      conditions: "1 020 000₽",
      type: "Одноразовый",
      date: "2023-09-01 22:34:23",
    },
    {
      competiton_id: 46546,
      name: "Привет",
      prize: "30%",
      competetors: 45,
      conditions: "500₽",
      type: "Многоразовый",
      date: "2023-09-01 22:34:23",
    },
    {
      competiton_id: 1234432,
      name: "Кристаллик",
      prize: "100₽",
      competetors: 1200,
      conditions: "1 020 000₽",
      type: "Одноразовый",
      date: "2023-09-01 22:34:23",
    },
    {
      competiton_id: 577678,
      name: "Кристаллик",
      prize: "100₽",
      competetors: 1200,
      conditions: "1 020 000₽",
      type: "Одноразовый",
      date: "2023-09-01 22:34:23",
    },
    {
      competiton_id: 4534663,
      name: "Привет",
      prize: "30%",
      competetors: 45,
      conditions: "500₽",
      type: "Многоразовый",
      date: "2023-09-01 22:34:23",
    },
    {
      competiton_id: 234234,
      name: "Кристаллик",
      prize: "100₽",
      competetors: 1200,
      conditions: "1 020 000₽",
      type: "Одноразовый",
      date: "2023-09-01 22:34:23",
    },
    {
      competiton_id: 3458,
      name: "Кристаллик",
      prize: "100₽",
      competetors: 1200,
      conditions: "1 020 000₽",
      type: "Одноразовый",
      date: "2023-09-01 22:34:23",
    },
    {
      competiton_id: 34577,
      name: "Привет",
      prize: "30%",
      competetors: 45,
      conditions: "500₽",
      type: "Многоразовый",
      date: "2023-09-01 22:34:23",
    },
    {
      competiton_id: 23452345,
      name: "Кристаллик",
      prize: "100₽",
      competetors: 1200,
      conditions: "1 020 000₽",
      type: "Одноразовый",
      date: "2023-09-01 22:34:23",
    },
    {
      competiton_id: 123432,
      name: "Привет",
      prize: "30%",
      competetors: 45,
      conditions: "500₽",
      type: "Многоразовый",
      date: "2023-09-01 22:34:23",
    },
    {
      competiton_id: 23444,
      name: "Кристаллик",
      prize: "100₽",
      competetors: 1200,
      conditions: "1 020 000₽",
      type: "Одноразовый",
      date: "2023-09-01 22:34:23",
    },
    {
      competiton_id: 6888,
      name: "Привет",
      prize: "30%",
      competetors: 45,
      conditions: "500₽",
      type: "Многоразовый",
      date: "2023-09-01 22:34:23",
    },
    {
      competiton_id: 3455,
      name: "Кристаллик",
      prize: "100₽",
      competetors: 1200,
      conditions: "1 020 000₽",
      type: "Одноразовый",
      date: "2023-09-01 22:34:23",
    },
    {
      competiton_id: 68678,
      name: "Привет",
      prize: "30%",
      competetors: 45,
      conditions: "500₽",
      type: "Многоразовый",
      date: "2023-09-01 22:34:23",
    },
    {
      competiton_id: 2346,
      name: "Кристаллик",
      prize: "100₽",
      competetors: 1200,
      conditions: "1 020 000₽",
      type: "Одноразовый",
      date: "2023-09-01 22:34:23",
    },
    {
      competiton_id: 76989,
      name: "Привет",
      prize: "30%",
      competetors: 45,
      conditions: "500₽",
      type: "Многоразовый",
      date: "2023-09-01 22:34:23",
    },
    {
      competiton_id: 23457,
      name: "Кристаллик",
      prize: "100₽",
      competetors: 1200,
      conditions: "1 020 000₽",
      type: "Одноразовый",
      date: "2023-09-01 22:34:23",
    },
    {
      competiton_id: 8943,
      name: "Привет",
      prize: "30%",
      competetors: 45,
      conditions: "500₽",
      type: "Многоразовый",
      date: "2023-09-01 22:34:23",
    },
    {
      competiton_id: 65767,
      name: "Кристаллик",
      prize: "100₽",
      competetors: 1200,
      conditions: "1 020 000₽",
      type: "Одноразовый",
      date: "2023-09-01 22:34:23",
    },
    {
      competiton_id: 345435,
      name: "Привет",
      prize: "30%",
      competetors: 45,
      conditions: "500₽",
      type: "Многоразовый",
      date: "2023-09-01 22:34:23",
    },
  ];
  const [competitions, setCompetitions] = useState([]);

  const [selected, setSelected] = useState([]);
  const toggleSelected = (data) => {
    const filteredSelectedItems = selected.some(
      (selected) => selected.competiton_id === data.competiton_id
    );
    if (filteredSelectedItems) {
      setSelected(
        selected.filter((item) => item.competiton_id !== data.competiton_id)
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

  return (
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
              <td className="tac">Дата итогов</td>
              <td className="tac">Дата создания</td>
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
                  <tr key={competition.competiton_id}>
                    <td>{competition.competiton_id || "-"}</td>
                    <td>{competition.name || "-"}</td>
                    <td>{competition.prize || "-"}</td>
                    <td className="tac">{competition.competetors || "-"}</td>
                    <td className="tac">{competition.conditions || "-"}</td>
                    <td className="tac">{competition.type || "-"}</td>
                    <td className="tac">
                      {(competition && competition.date.split(" ")[0]) || "-"}
                      <br />
                      {(competition && competition.date.split(" ")[1]) || "-"}
                    </td>
                    <td className="cases_table_actions_wrapper_comp">
                      <div className="cases_table_actions">
                        <div className="cases_table_actions_list">
                          <div
                            title="редактировать"
                            className="cases_table_edit"
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

                          <div title="скрыть" className="cases_table_hide">
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
                          <div title="удалить" className="cases_table_delete">
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
                          <div title="статистика" className="cases_table_stats">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M19.88 17.97C20.32 17.27 20.58 16.46 20.58 15.58C20.58 13.09 18.57 11.08 16.08 11.08C13.59 11.08 11.58 13.09 11.58 15.58C11.58 18.07 13.59 20.08 16.07 20.08C16.95 20.08 17.77 19.82 18.46 19.38L21.58 22.5L23 21.08L19.88 17.97ZM16.08 18.08C14.7 18.08 13.58 16.96 13.58 15.58C13.58 14.2 14.7 13.08 16.08 13.08C17.46 13.08 18.58 14.2 18.58 15.58C18.58 16.96 17.46 18.08 16.08 18.08ZM15.72 9.58C14.98 9.6 14.27 9.76 13.62 10.03L13.07 9.2L9.27 15.38L6.26 11.86L2.63 17.67L1 16.5L6 8.5L9 12L13 5.5L15.72 9.58ZM18.31 10.08C17.67 9.8 16.98 9.63 16.26 9.59L21.38 1.5L23 2.68L18.31 10.08Z"
                                fill="black"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="is_selected ml_55px">
                          {selected.some(
                            (selected) =>
                              selected.competiton_id ===
                              competition.competiton_id
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
  );
}

export default Competitions;
