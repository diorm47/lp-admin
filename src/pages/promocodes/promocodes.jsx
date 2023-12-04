import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-icon.svg";
import Pagination from "../../components/pagionation/pagination";

import "./promocodes.css";
import { ReactComponent as SelectedIcon } from "../../assets/icons/selected-icon.svg";

function Promocodes() {
  const promocodesData = [
    {
      promocode_id: 12344,
      name: "Кристаллик",
      category: "Бонус ₽ к депозиту",
      bonus: "100",
      activations: "234",
      deposits: "345555",
      time_send: "Одноразовый",
      date: "2023-09-01 22:34:23",
    },
    {
      promocode_id: 34555,
      name: "Кристаллик",
      category: "Бонус ₽ к депозиту",
      bonus: "100",
      activations: "234",
      deposits: "345555",
      time_send: "Одноразовый",
      date: "2023-09-01 22:34:23",
    },
    {
      promocode_id: 34566,
      name: "Кристаллик",
      category: "Бонус ₽ к депозиту",
      bonus: "100",
      activations: "234",
      deposits: "345555",
      time_send: "Одноразовый",
      date: "2023-09-01 22:34:23",
    },
    {
      promocode_id: 23444,
      name: "Кристаллик",
      category: "Бонус ₽ к депозиту",
      bonus: "100",
      activations: "234",
      deposits: "345555",
      time_send: "Одноразовый",
      date: "2023-09-01 22:34:23",
    },
    {
      promocode_id: 456546,
      name: "Кристаллик",
      category: "Бонус ₽ к депозиту",
      bonus: "100",
      activations: "234",
      deposits: "345555",
      time_send: "Одноразовый",
      date: "2023-09-01 22:34:23",
    },
    {
      promocode_id: 2344455,
      name: "Кристаллик",
      category: "Бонус ₽ к депозиту",
      bonus: "100",
      activations: "234",
      deposits: "345555",
      time_send: "Одноразовый",
      date: "2023-09-01 22:34:23",
    },
    {
      promocode_id: 45777,
      name: "Кристаллик",
      category: "Бонус ₽ к депозиту",
      bonus: "100",
      activations: "234",
      deposits: "345555",
      time_send: "Одноразовый",
      date: "2023-09-01 22:34:23",
    },
    {
      promocode_id: 345566,
      name: "Кристаллик",
      category: "Бонус ₽ к депозиту",
      bonus: "100",
      activations: "234",
      deposits: "345555",
      time_send: "Одноразовый",
      date: "2023-09-01 22:34:23",
    },
    {
      promocode_id: 2345555,
      name: "Кристаллик",
      category: "Бонус ₽ к депозиту",
      bonus: "100",
      activations: "234",
      deposits: "345555",
      time_send: "Одноразовый",
      date: "2023-09-01 22:34:23",
    },

    {
      promocode_id: 567889,
      name: "Кристаллик",
      category: "Бонус ₽ к депозиту",
      bonus: "100",
      activations: "234",
      deposits: "345555",
      time_send: "Одноразовый",
      date: "2023-09-01 22:34:23",
    },
    {
      promocode_id: 23455,
      name: "Кристаллик",
      category: "Бонус ₽ к депозиту",
      bonus: "100",
      activations: "234",
      deposits: "345555",
      time_send: "Одноразовый",
      date: "2023-09-01 22:34:23",
    },
    {
      promocode_id: 6666667,
      name: "Кристаллик",
      category: "Бонус ₽ к депозиту",
      bonus: "100",
      activations: "234",
      deposits: "345555",
      time_send: "Одноразовый",
      date: "2023-09-01 22:34:23",
    },
    {
      promocode_id: 2345,
      name: "Кристаллик",
      category: "Бонус ₽ к депозиту",
      bonus: "100",
      activations: "234",
      deposits: "345555",
      time_send: "Одноразовый",
      date: "2023-09-01 22:34:23",
    },
    {
      promocode_id: 67886,
      name: "Кристаллик",
      category: "Бонус ₽ к депозиту",
      bonus: "100",
      activations: "234",
      deposits: "345555",
      time_send: "Одноразовый",
      date: "2023-09-01 22:34:23",
    },
    {
      promocode_id: 34677,
      name: "Кристаллик",
      category: "Бонус ₽ к депозиту",
      bonus: "100",
      activations: "234",
      deposits: "345555",
      time_send: "Одноразовый",
      date: "2023-09-01 22:34:23",
    },
    {
      promocode_id: 234234,
      name: "Кристаллик",
      category: "Бонус ₽ к депозиту",
      bonus: "100",
      activations: "234",
      deposits: "345555",
      time_send: "Одноразовый",
      date: "2023-09-01 22:34:23",
    },

    {
      promocode_id: 657768,
      name: "Кристаллик",
      category: "Бонус ₽ к депозиту",
      bonus: "100",
      activations: "234",
      deposits: "345555",
      time_send: "Одноразовый",
      date: "2023-09-01 22:34:23",
    },
    {
      promocode_id: 456546,
      name: "Кристаллик",
      category: "Бонус ₽ к депозиту",
      bonus: "100",
      activations: "234",
      deposits: "345555",
      time_send: "Одноразовый",
      date: "2023-09-01 22:34:23",
    },
    {
      promocode_id: 23456,
      name: "Кристаллик",
      category: "Бонус ₽ к депозиту",
      bonus: "100",
      activations: "234",
      deposits: "345555",
      time_send: "Одноразовый",
      date: "2023-09-01 22:34:23",
    },
    {
      promocode_id: 456787,
      name: "Кристаллик",
      category: "Бонус ₽ к депозиту",
      bonus: "100",
      activations: "234",
      deposits: "345555",
      time_send: "Одноразовый",
      date: "2023-09-01 22:34:23",
    },
  ];
  const [promocodes, setPromocodes] = useState();
  const navigate = useNavigate();
  const editPromocode = (id) => {
    navigate(`/edit-promocode`);
  };

  const [selected, setSelected] = useState([]);

  const toggleSelected = (data) => {
    const filteredSelectedItems = selected.some(
      (selected) => selected.promocode_id === data.promocode_id
    );
    if (filteredSelectedItems) {
      setSelected(
        selected.filter((item) => item.promocode_id !== data.promocode_id)
      );
    } else {
      setSelected([...selected, data]);
    }
  };

  const toggleAllDataSelected = () => {
    if (selected.length == promocodesData.length) {
      setSelected([]);
    } else {
      setSelected([...promocodesData]);
    }
  };

  return (
    <>
      <div className="template_page promocode_page">
        <div className="template_page_title">
          <h1>Промокоды</h1>
          <div className="top_cases_actions">
            <NavLink to="/create-promocode">
              <button className="main_btn add_case_btn main_btn_template">
                <p>Добавить промокод</p>
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
              <button className="main_btn">
                <p>Все промокоды</p>
              </button>
              <button className="main_btn">
                <p>Бонус ₽ к пополнению</p>
              </button>
            </div>
            <div className="cases_top_actions">
              <button className="main_btn main_btn_template_red">
                <p>Действие над промокодом</p>
              </button>
              <div className="users_search">
                <SearchIcon />
                <input type="text" placeholder="Поиск промокода" />
              </div>
            </div>

            <table className="cases_table ">
              <thead>
                <tr>
                  <td>ID</td>
                  <td>Имя</td>
                  <td>Категория</td>
                  <td className="tac">Бонус</td>
                  <td className="tac">Кол-во активаций</td>
                  <td className="tac">Сумма депов</td>
                  <td className="tac">Время действия</td>
                  <td className="tac">Дата создания</td>
                  <td>
                    <div className="select_all">
                      <div className="is_selected ml_55px">
                        {selected.length == promocodesData.length ? (
                          <SelectedIcon
                            onClick={toggleAllDataSelected}
                          />
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
                {promocodes && promocodes.length
                  ? promocodes.map((promocode) => (
                      <tr key={promocode.promocode_id}>
                        <td>{promocode.promocode_id}</td>
                        <td>{promocode.name}</td>
                        <td>{promocode.category || "-"}</td>
                        <td className="tac">+ {promocode.bonus} ₽</td>
                        <td className="tac">{promocode.activations}</td>
                        <td className="tac">{promocode.deposits} ₽</td>
                        <td className="tac">{promocode.time_send}</td>

                        <td className="tac">
                          {promocode.date.split(" ")[0]}
                          <br />
                          {promocode.date.split(" ")[1]}
                        </td>
                        <td>
                          <div className="cases_table_actions">
                            <div className="cases_table_actions_list">
                              <div
                                title="редактировать"
                                className="cases_table_edit"
                                onClick={() => editPromocode()}
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
                              <div
                                title="удалить"
                                className="cases_table_delete"
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
                              <div
                                title="статистика"
                                className="cases_table_stats"
                              >
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
                                  selected.promocode_id ===
                                  promocode.promocode_id
                              ) ? (
                                <SelectedIcon
                                  onClick={() => toggleSelected(promocode)}
                                />
                              ) : (
                                <div
                                  className="not_selected_item"
                                  onClick={() => toggleSelected(promocode)}
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
              {promocodesData ? (
                <Pagination
                  allData={promocodesData}
                  paginationData={setPromocodes}
                />
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

export default Promocodes;
