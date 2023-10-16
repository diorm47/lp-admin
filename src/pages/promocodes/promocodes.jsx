import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { NavLink } from "react-router-dom";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-icon.svg";
import "../cases/cases.css";

function Promocodes() {
  const [itemOffset, setItemOffset] = useState(0);
  const [casesItems, setCasesItems] = useState("");
  const itemsPerPage = 10;
  const endOffset = itemOffset + itemsPerPage;
  const items = casesItems.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(casesItems.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % casesItems.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="template_page employees_page">
        <div className="template_page_title">
          <h1>Промокоды</h1>
          <div className="top_cases_actions">
            <NavLink to="/">
              <button className="main_btn add_case_btn">
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
              <button className="main_btn">
                <p>Действие над промокодом</p>
              </button>
              <div className="users_search">
                <SearchIcon />
                <input type="text" placeholder="Поиск промокода" />
              </div>
            </div>
            <div className="user_line"></div>

            <table className="cases_table">
              <thead>
                <tr>
                  <td>ID</td>
                  <td>Имя</td>
                  <td>Категория</td>
                  <td className="tac">Бонус</td>
                  <td className="tac">Кол-во активаций</td>
                  <td className="tac">Сумма депов</td>
                  <td>Время действия</td>
                  <td className="tac">Дата создания</td>
                  <td>
                    <div className="select_all">
                      <input type="checkbox" /> Выделить все
                    </div>
                  </td>
                </tr>
              </thead>
              <tbody>
                {items && items.length
                  ? items.map((item) => (
                      <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.category || "-"}</td>
                        <td className="tac">{item.cost} ₽</td>
                        <td className="tac">{item.gem_cost}</td>
                        <td className="tac">{item.opens || 0} </td>
                        <td className="tac">
                          {item.created_at.split("T")[0]}
                          <br />
                          {item.created_at.split("T")[1]}
                        </td>
                        <td>
                          <div className="cases_table_actions">
                            <div className="cases_table_actions_list">
                              <div title="поиск" className="cases_table_search">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M15.7549 14.255H14.9649L14.6849 13.985C15.6649 12.845 16.2549 11.365 16.2549 9.755C16.2549 6.165 13.3449 3.255 9.75488 3.255C6.16488 3.255 3.25488 6.165 3.25488 9.755C3.25488 13.345 6.16488 16.255 9.75488 16.255C11.3649 16.255 12.8449 15.665 13.9849 14.685L14.2549 14.965V15.755L19.2549 20.745L20.7449 19.255L15.7549 14.255ZM9.75488 14.255C7.26488 14.255 5.25488 12.245 5.25488 9.755C5.25488 7.26501 7.26488 5.255 9.75488 5.255C12.2449 5.255 14.2549 7.26501 14.2549 9.755C14.2549 12.245 12.2449 14.255 9.75488 14.255Z"
                                    fill="black"
                                  />
                                </svg>
                              </div>
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
                              <div
                                title="скопировать"
                                className="cases_table_copy"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M16.5 1H4.5C3.4 1 2.5 1.9 2.5 3V17H4.5V3H16.5V1ZM15.5 5L21.5 11V21C21.5 22.1 20.6 23 19.5 23H8.49C7.39 23 6.5 22.1 6.5 21L6.51 7C6.51 5.9 7.4 5 8.5 5H15.5ZM14.5 12H20L14.5 6.5V12Z"
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
                            <div className="is_selected">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clipPath="url(#clip0_280_5736)">
                                  <rect
                                    x="0.5"
                                    y="0.5"
                                    width="23"
                                    height="23"
                                    rx="2.5"
                                    fill="#39B54A"
                                    stroke="#39B54A"
                                  />
                                  <path
                                    d="M9.94286 16.6667L6 12.8673L7.71429 11.2979L9.94286 13.4454L16.2857 7.33334L18 8.98526L9.94286 16.6667Z"
                                    fill="white"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_280_5736">
                                    <rect
                                      width="24"
                                      height="24"
                                      rx="3"
                                      fill="white"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))
                  : ""}
              </tbody>
            </table>
            <div className="cases_paginations">
              <ReactPaginate
                breakLabel="..."
                nextLabel="Следующая"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="Предыдущая"
                renderOnZeroPageCount={null}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Promocodes;
