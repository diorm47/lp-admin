import React, { useEffect } from "react";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-icon.svg";
import { useState } from "react";
import "./conclusions.css";
import Pagination from "../../components/pagionation/pagination";
import { useNavigate } from "react-router-dom";
import { ReactComponent as SelectedIcon } from "../../assets/icons/selected-icon.svg";
import { mainApi } from "../../components/utils/main-api";

function Conclusions() {
  const [conclusionsData, setConclusionsData] = useState([]);
  const [conclusions, setConclusions] = useState([]);
  const [moogoldBalance, setMoogoldBalance] = useState();

  useEffect(() => {
    mainApi
      .getConclusions()
      .then((res) => {
        setConclusionsData(res);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);
  useEffect(() => {
    mainApi
      .getMoogoldBalance()
      .then((res) => {
        console.log(res.Body);
        setMoogoldBalance(res.Body);
      })
      .catch((error) => {
        console.log("error", error);
      });
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
      const filtered = conclusionsData.filter(
        (item) => item.payment_status == type
      );
      setConclusions(filtered);
    } else {
      setConclusions(conclusionsData.slice(0, 10));
    }
  };

  const [itemNames, setItemNames] = useState({});

  const getItemName = async (id) => {
    let headersList = {
      Accept: "*/*",
    };
    let response = await fetch(`https://legadrop.org/admin/items/${id}`, {
      method: "GET",
      headers: headersList,
    });
    let data = await response.json();
    return data.name;
  };

  useEffect(() => {
    conclusions.forEach(async (conclusion) => {
      const name = await getItemName(conclusion.item_id);
      setItemNames((prev) => ({ ...prev, [conclusion.item_id]: name }));
    });
  }, [conclusions]);

  const handlePurchaseItem = (data) => {
    mainApi
      .purcgaseItem({
        genshin_user_id: data.genshin_user_id,
        item_id: data.item_id,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  const handlePurchaseItems = (data) => {
    mainApi
      .purcgaseItem({
        genshin_user_id: "string",
        items: [
          {
            item_id: "string",
          },
        ],
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  return (
    <div className="template_page analytics_page">
      <div className="template_page_title">
        <h1>Выводы</h1>
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
                Баланс:{" "}{moogoldBalance.balance}{" "}
                {moogoldBalance.currency}{" "}
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
              <th className="tal">ID вывода</th>
              <th className="tal">ID юзера</th>
              
              <th className="tal">Сумма вывода</th>
              <th className="tal">Предмет вывода</th>
              <th className="tal">UID победителя</th>
              <th className="tac">Дата вывода</th>
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
                      <p>{conclusion.itemfs_id}</p>
                    </td>
                    <td className="">
                      <p>{conclusion.user_id}</p>
                    </td>
                 
                    <td className="">
                      <p>{conclusion.payment_amount || "-"}</p>
                    </td>
                    <td className="">
                      <p>{itemNames[conclusion.item_id] || "..."}</p>
                    </td>
                    <td className="">
                      <p>{conclusion.genshin_user_id}</p>
                    </td>

                    <td className="tac">
                      {conclusion.payment_date ? (
                        <>
                          {conclusion && conclusion.payment_date.split(" ")[0]}
                          <br />
                          {conclusion && conclusion.payment_date.split(" ")[1]}
                        </>
                      ) : (
                        "-"
                      )}
                    </td>
                    <td className="tal">
                      {conclusion.status == "EXPECT" ? "Ожидание" : "Успешно"}
                    </td>

                    <td className="aic_df">
                      <div className="cases_table_actions conclisions_item_list">
                        <div className="cases_table_actions_list">
                          <button
                            className="main_btn main_btn_template_green"
                            onClick={() => handlePurchaseItem(conclusion)}
                          >
                            <p>Одобрить</p>
                          </button>
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
                            onClick={() =>
                              aboutConclusion(conclusion.itemfs_id)
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
                                d="M2.99902 17.2512V21.0012H6.74902L17.809 9.94125L14.059 6.19125L2.99902 17.2512ZM20.709 7.04125C21.099 6.65125 21.099 6.02125 20.709 5.63125L18.369 3.29125C17.979 2.90125 17.349 2.90125 16.959 3.29125L15.129 5.12125L18.879 8.87125L20.709 7.04125Z"
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
  );
}

export default Conclusions;
