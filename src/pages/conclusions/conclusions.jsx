import React from "react";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-icon.svg";
import { useState } from "react";
import "./conclusions.css";
import Pagination from "../../components/pagionation/pagination";
import { useNavigate } from "react-router-dom";

function Conclusions() {
  const paymentsData = [
    {
      payment_id: 13232,
      user_id: 450965 - 44,
      unical_code: "l3123kds4",
      payment_amount: "690 ₽",
      bonus: "100 ₽",
      payment_type: "Qiwi",
      payment_date: "2023-09-01 22:34:23",
      payment_status: "Успешно",
    },
    {
      payment_id: 85558,
      user_id: 450965 - 44,
      unical_code: "l3123kds4",
      payment_amount: "690 ₽",
      bonus: "100 ₽",
      payment_type: "Qiwi",
      payment_date: "2023-09-01 22:34:23",
      payment_status: "Успешно",
    },
    {
      payment_id: 58578,
      user_id: 450965 - 44,
      unical_code: "l3123kds4",
      payment_amount: "690 ₽",
      bonus: "100 ₽",
      payment_type: "Qiwi",
      payment_date: "2023-09-01 22:34:23",
      payment_status: "Успешно",
    },
    {
      payment_id: 88888,
      user_id: 450965 - 44,
      unical_code: "l3123kds4",
      payment_amount: "690 ₽",
      bonus: "100 ₽",
      payment_type: "Qiwi",
      payment_date: "2023-09-01 22:34:23",
      payment_status: "Успешно",
    },
    {
      payment_id: 85858,
      user_id: 450965 - 44,
      unical_code: "l3123kds4",
      payment_amount: "690 ₽",
      bonus: "100 ₽",
      payment_type: "Qiwi",
      payment_date: "2023-09-01 22:34:23",
      payment_status: "Успешно",
    },
    {
      payment_id: 58855,
      user_id: 450965 - 44,
      unical_code: "l3123kds4",
      payment_amount: "690 ₽",
      bonus: "100 ₽",
      payment_type: "Qiwi",
      payment_date: "2023-09-01 22:34:23",
      payment_status: "Успешно",
    },
    {
      payment_id: 77444,
      user_id: 450965 - 44,
      unical_code: "l3123kds4",
      payment_amount: "690 ₽",
      bonus: "100 ₽",
      payment_type: "Qiwi",
      payment_date: "2023-09-01 22:34:23",
      payment_status: "Успешно",
    },
    {
      payment_id: 36447,
      user_id: 450965 - 44,
      unical_code: "l3123kds4",
      payment_amount: "690 ₽",
      bonus: "100 ₽",
      payment_type: "Qiwi",
      payment_date: "2023-09-01 22:34:23",
      payment_status: "Успешно",
    },
    {
      payment_id: 87545,
      user_id: 450965 - 44,
      unical_code: "l3123kds4",
      payment_amount: "690 ₽",
      bonus: "100 ₽",
      payment_type: "Qiwi",
      payment_date: "2023-09-01 22:34:23",
      payment_status: "Успешно",
    },
    {
      payment_id: 42555,
      user_id: 450965 - 44,
      unical_code: "l3123kds4",
      payment_amount: "690 ₽",
      bonus: "100 ₽",
      payment_type: "Qiwi",
      payment_date: "2023-09-01 22:34:23",
      payment_status: "Успешно",
    },
    {
      payment_id: 96723,
      user_id: 450965 - 44,
      unical_code: "l3123kds4",
      payment_amount: "690 ₽",
      bonus: "100 ₽",
      payment_type: "Qiwi",
      payment_date: "2023-09-01 22:34:23",
      payment_status: "Успешно",
    },
    {
      payment_id: 52415,
      user_id: 450965 - 44,
      unical_code: "l3123kds4",
      payment_amount: "690 ₽",
      bonus: "100 ₽",
      payment_type: "Qiwi",
      payment_date: "2023-09-01 22:34:23",
      payment_status: "Успешно",
    },
    {
      payment_id: 10032,
      user_id: 450965 - 44,
      unical_code: "l3123kds4",
      payment_amount: "690 ₽",
      bonus: "100 ₽",
      payment_type: "Qiwi",
      payment_date: "2023-09-01 22:34:23",
      payment_status: "Успешно",
    },
    {
      payment_id: 13562,
      user_id: 450965 - 44,
      unical_code: "l3123kds4",
      payment_amount: "690 ₽",
      bonus: "100 ₽",
      payment_type: "Qiwi",
      payment_date: "2023-09-01 22:34:23",
      payment_status: "Успешно",
    },
    {
      payment_id: 16232,
      user_id: 450965 - 44,
      unical_code: "l3123kds4",
      payment_amount: "690 ₽",
      bonus: "100 ₽",
      payment_type: "Qiwi",
      payment_date: "2023-09-01 22:34:23",
      payment_status: "Успешно",
    },
    {
      payment_id: 13532,
      user_id: 450965 - 44,
      unical_code: "l3123kds4",
      payment_amount: "690 ₽",
      bonus: "100 ₽",
      payment_type: "Qiwi",
      payment_date: "2023-09-01 22:34:23",
      payment_status: "Успешно",
    },
    {
      payment_id: 234444,
      user_id: 450965 - 44,
      unical_code: "l3123kds4",
      payment_amount: "690 ₽",
      bonus: "100 ₽",
      payment_type: "Qiwi",
      payment_date: "2023-09-01 22:34:23",
      payment_status: "Успешно",
    },
  ];
  const [payments, setUsers] = useState([]);

  const navigate = useNavigate();
  const aboutConclusion = (id) => {
    navigate(`/conclusion/${id}`);
  };

  return (
    <div className="template_page analytics_page">
      <div className="template_page_title">
        <h1>Выводы</h1>
      </div>
      <div className="cases_top_actions">
        <button className="main_btn">
          <p>Действие над выводом</p>
        </button>
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
              <th className="tal">Уникальный код</th>
              <th className="tal">Сумма вывода</th>
              <th className="tal">Предмет вывода</th>
              <th className="tal">UID победителя</th>
              <th className="tac">Дата вывода</th>
              <th className="tal">Статус системы</th>
              <td className="users_select">
                <div className="select_all">
                  <input type="checkbox" /> Выделить все
                </div>
              </td>
            </tr>
          </thead>
          <tbody>
            {payments
              ? payments.map((payment) => (
                  <tr key={payment.payment_id}>
                    <td className="">
                      <p>{payment.payment_id}</p>
                    </td>
                    <td className="">
                      <p>{payment.user_id}</p>
                    </td>
                    <td className="">
                      <p>{payment.unical_code}</p>
                    </td>
                    <td className="">
                      <p>{payment.payment_amount}</p>
                    </td>
                    <td className="">
                      <p>Благославение <br /> полой Луны</p>
                    </td>
                    <td className="">
                      <p>21223490</p>
                    </td>

                    <td className="tac">
                      {payment && payment.payment_date.split(" ")[0]}
                      <br />
                      {payment && payment.payment_date.split(" ")[1]}
                    </td>
                    <td className="tal">
                      <p>{payment.payment_status}</p>
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
                            onClick={() => aboutConclusion(payment.payment_id)}
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
                        <div className="is_selected ml_70px">
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
          <Pagination allData={paymentsData} paginationData={setUsers} />
        </div>
      </div>
    </div>
  );
}

export default Conclusions;
