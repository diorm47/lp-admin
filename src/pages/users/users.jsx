import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-icon.svg";
import { ReactComponent as SettingsIcon } from "../../assets/icons/user-settings.svg";
import avatar from "../../assets/images/avatar.png";
import Pagination from "../../components/pagionation/pagination";
import "./user.css";

function Users() {
  const usersData = [
    {
      id: 434,
      name: "Дуров",
      email: "admin567@mail.ru",
      balance: 999,
      deposite: 2322,
      winrate: 47,
    },
    {
      id: 345,
      name: "Маленькая",
      email: "56765admin@mail.ru",
      balance: 2333,
      deposite: 656,
      winrate: 65,
    },
    {
      id: 122,
      name: "Агаб",
      email: "admin5675@mail.ru",
      balance: 565,
      deposite: 4356,
      winrate: 45,
    },
    {
      id: 654334,

      name: "Лерка",
      email: "admi56756n@mail.ru",
      balance: 4566,
      deposite: 23444,
      winrate: 24,
    },
    {
      id: 2344,

      name: "Маленькая",
      email: "admi6466n@mail.ru",
      balance: 234,
      deposite: 34223,
      winrate: 42,
    },
    {
      id: 4566,

      name: "Алексей Фишль",
      email: "a3455dmin@mail.ru",
      balance: 3455,
      deposite: 6577,
      winrate: 65,
    },
    {
      id: 434,
      name: "Дуров",
      email: "admin567@mail.ru",
      balance: 999,
      deposite: 2322,
      winrate: 47,
    },
    {
      id: 345,
      name: "Маленькая",
      email: "56765admin@mail.ru",
      balance: 2333,
      deposite: 656,
      winrate: 65,
    },
    {
      id: 122,
      name: "Агаб",
      email: "admin5675@mail.ru",
      balance: 565,
      deposite: 4356,
      winrate: 45,
    },
    {
      id: 654334,

      name: "Лерка",
      email: "admi56756n@mail.ru",
      balance: 4566,
      deposite: 23444,
      winrate: 24,
    },
    {
      id: 2344,

      name: "Маленькая",
      email: "admi6466n@mail.ru",
      balance: 234,
      deposite: 34223,
      winrate: 42,
    },
    {
      id: 4566,

      name: "Алексей Фишль",
      email: "a3455dmin@mail.ru",
      balance: 3455,
      deposite: 6577,
      winrate: 65,
    },
    {
      id: 434,
      name: "Дуров",
      email: "admin567@mail.ru",
      balance: 999,
      deposite: 2322,
      winrate: 47,
    },
    {
      id: 345,
      name: "Маленькая",
      email: "56765admin@mail.ru",
      balance: 2333,
      deposite: 656,
      winrate: 65,
    },
    {
      id: 122,
      name: "Агаб",
      email: "admin5675@mail.ru",
      balance: 565,
      deposite: 4356,
      winrate: 45,
    },
    {
      id: 654334,

      name: "Лерка",
      email: "admi56756n@mail.ru",
      balance: 4566,
      deposite: 23444,
      winrate: 24,
    },
    {
      id: 2344,

      name: "Маленькая",
      email: "admi6466n@mail.ru",
      balance: 234,
      deposite: 34223,
      winrate: 42,
    },
    {
      id: 4566,

      name: "Алексей Фишль",
      email: "a3455dmin@mail.ru",
      balance: 3455,
      deposite: 6577,
      winrate: 65,
    },
  ];
  const [users, setUsers] = useState();
  const navigate = useNavigate();
  const aboutUser = (id) => {
    navigate(`/user/${id}`);
  };


  return (
    <div className="template_page users_page">
      <div className="template_page_title">
        <h1>Пользователи</h1>
        <div className="top_cases_actions">
          <NavLink to="/">
            <button className="main_btn add_case_btn">
              <p>Добавить категорию пользователей</p>
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
      <div className="template_page_content ">
        <div className="users_page_wrapper">
          <div className="cases_top_togglers">
            <button className="main_btn">
              <p>Все предметы</p>
            </button>
            <button className="main_btn">
              <p>Блогеры</p>
            </button>
            <button className="main_btn">
              <p>Сотрудники</p>
            </button>
          </div>
          <div className="cases_top_actions users_top_actions">
            <button className="main_btn">
              <p>Действие над предметом</p>
            </button>
            <div className="users_search">
              <SearchIcon />
              <input type="text" placeholder="Поиск" />
            </div>
          </div>
          <div className="user_line"></div>
          <table className="users_table">
            <thead>
              <tr>
                <th className="table_user_id_title">ID</th>
                <th className="table_user_avatar_title">Аватар</th>
                <th className="table_user_name_title">Имя юзера</th>
                <th className="table_user_email_title">Почта</th>
                <th className="table_user_balance_title">Баланс</th>
                <th className="table_user_deposite_title">Депозитов</th>
                <th className="table_user_winrate_title">Винрейт</th>
                <th className="table_user_settings"></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users && users.length
                ? users.map((user) => (
                    <tr key={user.id}>
                      <td className="table_user_id_row">
                        <p>{user.id}</p>
                      </td>
                      <td className="table_user_avatar_row">
                        <img src={avatar} alt="" />
                      </td>
                      <td className="table_user_name_row">
                        <p>{user.name}</p>
                      </td>
                      <td className="table_user_email_row">
                        <p>{user.email}</p>
                      </td>
                      <td className="table_user_balance_row">
                        <p>{user.balance} ₽</p>
                      </td>
                      <td className="table_user_deposite_row">
                        <p>{user.deposite} ₽</p>
                      </td>
                      <td className="table_user_winrate_row">
                        <p>{user.winrate}%</p>
                      </td>
                      <td className="table_user_settings_row">
                        <div
                          className="user_settings_icon"
                          onClick={() => aboutUser(user.id)}
                        >
                          <SettingsIcon />
                        </div>
                      </td>
                    </tr>
                  ))
                : ""}
            </tbody>
          </table>

          <div className="cases_paginations">
            <Pagination allData={usersData} paginationData={setUsers} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Users;
