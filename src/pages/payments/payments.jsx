import React, { useEffect } from "react";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-icon.svg";
import { useState } from "react";
import "./payments.css";
import Pagination from "../../components/pagionation/pagination";
import { useNavigate } from "react-router-dom";
import { ReactComponent as SelectedIcon } from "../../assets/icons/selected-icon.svg";
import { mainApi } from "../../components/utils/main-api";

function Payments() {
  const [paymentsData, setPaymentsData] = useState([]);
  const [payments, setPayments] = useState([]);

  const navigate = useNavigate();
  const aboutPayment = (id) => {
    navigate(`/payment/${id}`);
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
    if (selected.length == paymentsData.length) {
      setSelected([]);
    } else {
      setSelected([...paymentsData]);
    }
  };

  const refresh = () => {
    mainApi
      .getPaymentsAction()
      .then((res) => {
        setPaymentsData(res.results);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  useEffect(() => {
    refresh();
  }, []);
  const getStatus = (status) => {
    if (status == "create") {
      return "Создан";
    } else if (status == "expired") {
      return "Отменен";
    } else if (status == "success") {
      return "Оплачен";
    } else if (status == "manually approved") {
      return "Одобрен вручную";
    }
  };
  const getType = (type) => {
    if (type == "lava") {
      return "ЛАВА(LAVA)";
    } else if (type == "yookassa") {
      return "ЮКасса(Yookassa)";
    } else if (type == "freekassa") {
      return "ФРИКАССА(Freekassa)";
    }
  };

  const [activeFilter, setActiveFilter] = useState("all");
  const filterItems = (type) => {
    setActiveFilter(type);
    if (type !== "all") {
      const filtered = paymentsData.filter((item) => item.status === type);
      setPayments(filtered);
    } else {
      setPayments(paymentsData.slice(0, 10));
    }
  };

  return (
    <div className="template_page analytics_page">
      <div className="template_page_title">
        <h1>Платежи</h1>
        <div className="users_search">
          <SearchIcon />
          <input type="text" placeholder="Поиск" />
        </div>
      </div>
      <div className="cases_top_togglers">
        <button
          className="main_btn"
          onClick={() => filterItems("all")}
        >
          <p>Все платежи</p>
        </button>
        <button
          className={
            activeFilter == "create"
              ? "main_btn top_active_filter"
              : "main_btn"
          }
          onClick={() => filterItems("create")}
        >
          <p>Создан</p>
        </button>
        <button
          className={
            activeFilter == "expired"
              ? "main_btn top_active_filter"
              : "main_btn"
          }
          onClick={() => filterItems("expired")}
        >
          <p>Отменен</p>
        </button>
        <button
          className={
            activeFilter == "success"
              ? "main_btn top_active_filter"
              : "main_btn"
          }
          onClick={() => filterItems("success")}
        >
          <p>Оплачен</p>
        </button>
        <button
          className={
            activeFilter == "manually approved"
              ? "main_btn top_active_filter"
              : "main_btn"
          }
          onClick={() => filterItems("manually approved")}
        >
          <p>Одобрен вручную</p>
        </button>
      </div>
      <div className="payments_table">
        <table className="users_table">
          <thead>
            <tr>
              <th className="tal">ID платежа</th>
              <th className="tal">ID юзера</th>
              <th className="tal">Email</th>
              <th className="tal">Сумма пополнения</th>

              <th className="tal">Способ оплаты</th>
              <th className="tac">Дата платежа</th>
              <th className="tac">Статус системы</th>
              <td className="users_select">
                <div className="select_all">
                  <div className="is_selected ml_55px">
                    {selected.length == paymentsData.length ? (
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
            {payments
              ? payments.map((payment) => (
                  <tr className="review_raw" key={payment.id}>
                    <td className="">
                      <p>{payment.id}</p>
                    </td>
                    <td className="">
                      <p>{payment.user}</p>
                    </td>
                    <td className="">
                      <p>{payment.email}</p>
                    </td>
                    <td className="">
                      <p>{payment.sum} р.</p>
                    </td>

                    <td className="">
                      <p>{getType(payment.type_payments)}</p>
                    </td>

                    <td className="tac">
                      {payment && payment.created_at.split("T")[0]}
                      <br />
                      {payment &&
                        payment.created_at.split("T")[1].split(".")[0]}
                    </td>
                    <td className="tac">
                      <p>{getStatus(payment.status)}</p>
                    </td>

                    <td>
                      <div className="cases_table_actions">
                        <div className="cases_table_actions_list">
                          <div
                            title="посмотреть"
                            className="cases_table_edit"
                            onClick={() => aboutPayment(payment.order_id)}
                          >
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
                        </div>
                        <div className="is_selected ">
                          {selected.some(
                            (selected) => selected.id === payment.id
                          ) ? (
                            <SelectedIcon
                              onClick={() => toggleSelected(payment)}
                            />
                          ) : (
                            <div
                              className="not_selected_item"
                              onClick={() => toggleSelected(payment)}
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
          {paymentsData && paymentsData.length ? (
            <Pagination
              allData={paymentsData}
              itemsPerPage={10}
              activeFilter={"all"}
              paginationData={setPayments}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default Payments;
