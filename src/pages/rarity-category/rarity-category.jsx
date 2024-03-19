import React from "react";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-icon.svg";
import Pagination from "../../components/pagionation/pagination";
import { useState } from "react";
import { useEffect } from "react";
import { mainApi } from "../../components/utils/main-api";
import "./rarity-category.css";
import { NavLink, useNavigate } from "react-router-dom";
import Snacbar from "../../components/snackbar/snackbar";

function RarityCategory() {
  const navigate = useNavigate();

  const [rarityListAll, setRarityListAll] = useState([]);
  const [rarityList, setRarityList] = useState([]);

  const [isSnackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarText, setSnackbarText] = useState("");
  const snackbarActions = (snackText) => {
    setSnackbarVisible(true);
    setSnackbarText(snackText);
    setTimeout(() => {
      setSnackbarVisible(false);
    }, 2000);
  };

  const getRarityList = () => {
    mainApi
      .getRarity()
      .then((res) => {
        setRarityListAll(res.results);
        if (res.results.length < 10) {
          setRarityList(res.results);
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  useEffect(() => {
    getRarityList();
  }, []);

  const deleteRarityItem = (id) => {
    mainApi
      .deleteRarity(id)
      .then((res) => {
        getRarityList();
        snackbarActions("Категория удалена!");
      })
      .catch((error) => {
        console.log("error", error);
      });

    snackbarActions("Категория удалена!");
    setTimeout(() => {
      getRarityList();
    }, 1200);
  };
  // update-rarity
  const editCategory = (id) => {
    navigate(`/update-rarity/${id}`);
  };

  return (
    <>
      <div className="template_page rarity_page">
        <div class="template_page_title">
          <h1>Категории редкости</h1>
          <div class="top_cases_actions">
            <NavLink to="/create-rarity">
              <button class="main_btn add_case_btn main_btn_template">
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
                  ></path>
                </svg>
              </button>
            </NavLink>
          </div>
        </div>

        <div className="template_page_content">
          <div className="cases_wrapper">
            <div className="cases_top_actions">
              <button className="main_btn main_btn_template_red">
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
                    <td>ID категории</td>
                    <td>Название</td>
                    <td>Цвет</td>

                    <td>Действие</td>
                  </tr>
                </thead>
                <tbody>
                  {rarityList && rarityList.length
                    ? rarityList.map((item) => (
                        <tr key={item.rarity_id}>
                          <td>{item.rarity_id}</td>

                          <td>{item.name}</td>
                          <td>
                            <div
                              className="rarity_color"
                              style={{ background: item.rarity_color }}
                            ></div>
                          </td>
                          <td>
                            <div className="cases_table_actions">
                              <div className="cases_table_actions_list">
                                <div
                                  title="редактировать"
                                  className="cases_table_edit"
                                  onClick={() => editCategory(item.rarity_id)}
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
                                    deleteRarityItem(item.rarity_id)
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

      {isSnackbarVisible ? (
        <Snacbar visible={isSnackbarVisible} text={snackbarText} />
      ) : (
        ""
      )}
    </>
  );
}

export default RarityCategory;
