import React, { useEffect } from "react";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-icon.svg";
import { useState } from "react";
import "./conclusions.css";
import Pagination from "../../components/pagionation/pagination";
import { useNavigate } from "react-router-dom";
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
      .getConclusions()
      .then((res) => {
        setConclusionsData(res);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  useEffect(() => {
    refresh();
  }, []);
  const getBalance = () => {
    mainApi
      .getMoogoldBalance()
      .then((res) => {
        setMoogoldBalance(res.Body);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  useEffect(() => {
    getBalance();
  }, []);

  const navigate = useNavigate();
  const aboutConclusion = (id) => {
    navigate(`/conclusion/${id}`);
  };
  const [selected, setSelected] = useState([]);

  const toggleSelected = (data) => {
    const filteredSelectedItems = selected.some(
      (selected) => selected.itemfs_id === data.itemfs_id
    );
    if (filteredSelectedItems) {
      setSelected(selected.filter((item) => item.itemfs_id !== data.itemfs_id));
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

  const [activeFilter, setActiveFilter] = useState("");
  const filterItems = (type) => {
    setActiveFilter(type);
    if (type !== "all") {
      const filtered = conclusionsData.filter((item) => item.status == type);
      setConclusions(filtered);
    } else {
      setConclusions(conclusionsData.slice(0, 10));
    }
  };

  const handlePurchaseItem = (data) => {
    if (data.total > Number(moogoldBalance.balance) || data.total == null) {
      snackbarActions("Недостаточно средств на балансе!");
    } else {
      mainApi
        .purcgaseItem({
          itemfs_id: data.itemfs_id,
        })
        .then((res) => {
          console.log(res);
          refresh();
          getBalance();
          snackbarActions("Заявка успешно создана!");
        })
        .catch((error) => {
          console.log("error", error);
        });
    }
  };

  //   {
  //     "Body": {
  //         "status": true,
  //         "message": "Order has been created successfully",
  //         "account_details": {
  //             "User ID": "741936326",
  //             "Server": "Europe"
  //         },
  //         "order_id": 6102350,
  //         "total": "0.83"
  //     },
  //     "Status": 200,
  //     "Content-type": "application/json; charset=UTF-8"
  // }

  const handleCancelConclusion = (data) => {
    mainApi
      .cancelConclusion(data.itemfs_id)
      .then((res) => {
        refresh();
        getBalance();
        snackbarActions(`Вывод предмета '${data.item_name}' отменена!`);
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
        </div>
        <div className="cases_top_togglers">
          <button
            className={
              activeFilter == "all" ? "main_btn top_active_filter" : "main_btn"
            }
            onClick={() => filterItems("all")}
          >
            <p>Все выводы</p>
          </button>
          <button
            className={
              activeFilter == "EXPECT"
                ? "main_btn top_active_filter"
                : "main_btn"
            }
            onClick={() => filterItems("EXPECT")}
          >
            <p>В ожидании</p>
          </button>
          <button
            className={
              activeFilter == "SUCCESSFULLY"
                ? "main_btn top_active_filter"
                : "main_btn"
            }
            onClick={() => filterItems("SUCCESSFULLY")}
          >
            <p>Выполнено</p>
          </button>
          <button
            className={
              activeFilter == "CANCELLED"
                ? "main_btn top_active_filter"
                : "main_btn"
            }
            onClick={() => filterItems("CANCELLED")}
          >
            <p>Отменена</p>
          </button>
          <button
            className={
              activeFilter == "MOOGOLD"
                ? "main_btn top_active_filter"
                : "main_btn"
            }
            onClick={() => filterItems("MOOGOLD")}
          >
            <p>Ожидание вывода с Moogold</p>
          </button>
        </div>
        <div className="cases_top_actions">
          <div className="conc_actions">
            <button className="main_btn main_btn_template_red">
              <p>Действие над выводом</p>
            </button>
            <button className="main_btn main_btn_template_green">
              <p>Одобрить все выводы</p>
            </button>
            {moogoldBalance ? (
              <button className="main_btn moogold_balance">
                <p>
                  Баланс: {moogoldBalance.balance} {moogoldBalance.currency}{" "}
                </p>
              </button>
            ) : (
              ""
            )}
          </div>

          <div className="users_search">
            <SearchIcon />
            <input type="text" placeholder="Поиск" />
          </div>
        </div>
        <div className="payments_table">
          <table className="users_table">
            <thead>
              <tr>
                <th className="tal">Пользователь</th>

                <th className="tal">Стоимость предмета (Moogold)</th>
                <th className="tal">Предмет вывода</th>
                <th className="tal">UID победителя</th>
                <th className="tac">Дата заказа вывода</th>
                <th className="tal">Статус системы</th>
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
                    <tr key={conclusion.itemfs_id}>
                      <td className="">
                        <p>{conclusion.username}</p>
                      </td>

                      <td className="">
                        <p>${conclusion.total ? conclusion.total : "-"}</p>
                      </td>
                      <td className="">
                        <p>{conclusion.item_name}</p>
                      </td>
                      <td className="">
                        <p>{conclusion.genshin_user_id}</p>
                      </td>

                      <td className="tac">
                        {conclusion.payment_date ? (
                          <>
                            {conclusion &&
                              conclusion.payment_date.split(" ")[0]}
                            <br />
                            {conclusion &&
                              conclusion.payment_date.split(" ")[1]}
                          </>
                        ) : (
                          "-"
                        )}
                      </td>
                      <td className="tal">
                        {conclusion.status == "EXPECT" ? "Ожидание" : ""}
                        {conclusion.status == "SUCCESSFULLY" ? "Успешно" : ""}
                        {conclusion.status == "CANCELLED" ? "Отменено" : ""}
                        {conclusion.status == "MOOGOLD"
                          ? "Ожидание вывода с Moogold"
                          : ""}
                      </td>

                      <td>
                        <div className="cases_table_actions conclisions_item_list">
                          <div className="cases_table_actions_list">
                            {conclusion.status == "SUCCESSFULLY" ||
                            conclusion.status == "CANCELLED" ? (
                              <button
                                className="main_btn main_btn_template_green disabled_action"
                                disabled
                              >
                                <p>Одобрить</p>
                              </button>
                            ) : (
                              <button
                                className="main_btn main_btn_template_green"
                                onClick={() => handlePurchaseItem(conclusion)}
                              >
                                <p>Одобрить</p>
                              </button>
                            )}

                            {conclusion.status == "SUCCESSFULLY" ||
                            conclusion.status == "CANCELLED" ? (
                              <button
                                className="main_btn main_btn_template_red disabled_action"
                                disabled
                              >
                                <p>Отменить</p>
                              </button>
                            ) : (
                              <button
                                className="main_btn main_btn_template_red"
                                onClick={() =>
                                  handleCancelConclusion(conclusion)
                                }
                              >
                                <p>Отменить</p>
                              </button>
                            )}

                            <div
                              onClick={() =>
                                aboutConclusion(conclusion.itemfs_id)
                              }
                              title="поиск"
                              className="cases_table_search"
                            >
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
                          </div>
                          <div className="is_selected ml_55px">
                            {selected.some(
                              (selected) =>
                                selected.itemfs_id === conclusion.itemfs_id
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
