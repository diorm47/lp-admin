import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-icon.svg";
import Pagination from "../../components/pagionation/pagination";

import "./promocodes.css";
import { ReactComponent as SelectedIcon } from "../../assets/icons/selected-icon.svg";
import { mainApi } from "../../components/utils/main-api";
import Snacbar from "../../components/snackbar/snackbar";

function Promocodes() {
  const [promocodesData, setPromocodesData] = useState([]);
  const [promocodes, setPromocodes] = useState([]);
  const navigate = useNavigate();
  const editPromocode = (id) => {
    navigate(`/edit-promocode/${id}`);
  };
  const [selected, setSelected] = useState([]);

  const [isSnackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarText, setSnackbarText] = useState("");
  const snackbarActions = (snackText) => {
    setSnackbarVisible(true);
    setSnackbarText(snackText);
    setTimeout(() => {
      setSnackbarVisible(false);
    }, 2000);
  };

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
    if (selected.length == promocodesData.length) {
      setSelected([]);
    } else {
      setSelected([...promocodesData]);
    }
  };

  const getPromocodes = () => {
    mainApi
      .getPromos()
      .then((res) => {
        setPromocodesData(res.results);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  useEffect(() => {
    getPromocodes();
  }, []);

  const deletePromocode = (id) => {
    mainApi
      .deletePromo(id)
      .then((res) => {})
      .catch((error) => {
        console.log("error", error);
      });
    snackbarActions("Промокод удален!");
    setTimeout(() => {
      getPromocodes();
    }, 1200);
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
                  <td>Тип</td>
                  <td className="tac">Код</td>

                  <td>
                    <div className="select_all">
                      <div className="is_selected ml_55px">
                        {selected.length == promocodesData.length ? (
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
                {promocodes && promocodes.length
                  ? promocodes.map((promocode) => (
                      <tr key={promocode.id}>
                        <td>{promocode.id}</td>
                        <td>{promocode.name}</td>
                        <td>{promocode.type || "-"}</td>
                        <td className="tac">{promocode.code_data}</td>

                        <td>
                          <div className="cases_table_actions">
                            <div className="cases_table_actions_list">
                              <div
                                title="редактировать"
                                className="cases_table_edit"
                                onClick={() => editPromocode(promocode.id)}
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
                                onClick={() => deletePromocode(promocode.id)}
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
                                (selected) => selected.id === promocode.id
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

      {isSnackbarVisible ? (
        <Snacbar visible={isSnackbarVisible} text={snackbarText} />
      ) : (
        ""
      )}
    </>
  );
}

export default Promocodes;
