import React from "react";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-icon.svg";
import Pagination from "../../components/pagionation/pagination";
import { useState } from "react";
import { useEffect } from "react";
import { mainApi } from "../../components/utils/main-api";
import "./rarity-category.css";
import { NavLink, useNavigate } from "react-router-dom";

function RarityCategory() {
  const navigate = useNavigate();

  const [rarityListAll, setRarityListAll] = useState([]);
  const [rarityList, setRarityList] = useState([]);

  useEffect(() => {
    mainApi
      .getRarity()
      .then((res) => {
        setRarityListAll(res);
        if (res.length < 10) {
          setRarityList(res);
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  // update-rarity

  const editCategory = (id) => {
    navigate(`/update-rarity/${id}`);
  };

  return (
    <div className="template_page rarity_page">
      <div className="template_page_title">
        <h1>Категории редкости</h1>
      </div>

      <div className="template_page_content">
        <div className="cases_wrapper">
          <div className="cases_top_actions">
            <button className="main_btn">
              <p>Действие над категориями</p>
            </button>
            <div className="users_search">
              <SearchIcon />
              <input type="text" placeholder="Поиск" />
            </div>
          </div>
          <div className="user_line"></div>

          {rarityList && rarityList.length ? (
            <table className="cases_table">
              <thead>
                <tr>
                  <td>ID</td>
                  <td>Название</td>

                  <td>ID категории</td>
                  <td>Процент</td>
                  <td>Название англ</td>

                  <td>
                    <div className="select_all">
                      <input type="checkbox" /> Выделить все
                    </div>
                  </td>
                </tr>
              </thead>
              <tbody>
                {rarityList && rarityList.length
                  ? rarityList.map((item) => (
                      <tr key={item.category_id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.category_id}</td>
                        <td>{item.category_percent}</td>
                        <td>{item.ext_id}</td>

                        <td>
                          <div className="cases_table_actions">
                            <div className="cases_table_actions_list">
                              <div
                                title="редактировать"
                                className="cases_table_edit"
                                onClick={() => editCategory(item.category_id)}
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
          ) : (
            <p className="empty_error">Категории редкости отсутствуют</p>
          )}
          <div className="cases_paginations">
            {rarityList && rarityList.length > 8 ? (
              <Pagination
                allData={rarityListAll}
                paginationData={setRarityList}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RarityCategory;
