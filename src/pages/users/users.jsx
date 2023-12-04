import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-icon.svg";
import avatar from "../../assets/images/avatar.png";
import Pagination from "../../components/pagionation/pagination";
import "./user.css";
import { ReactComponent as SelectedIcon } from "../../assets/icons/selected-icon.svg";

function Users() {
  const usersData = [
    {
      id: 345,
      name: "Дуров",
      email: "admin567@mail.ru",
      balance: 999,
      deposite: 2322,
      winrate: 47,
    },
    {
      id: 59879,
      name: "Маленькая",
      email: "56765admin@mail.ru",
      balance: 2333,
      deposite: 656,
      winrate: 65,
    },
    {
      id: 4356436,
      name: "Агаб",
      email: "admin5675@mail.ru",
      balance: 565,
      deposite: 4356,
      winrate: 45,
    },
    {
      id: 4567,

      name: "Лерка",
      email: "admi56756n@mail.ru",
      balance: 4566,
      deposite: 23444,
      winrate: 24,
    },
    {
      id: 238744,

      name: "Маленькая",
      email: "admi6466n@mail.ru",
      balance: 234,
      deposite: 34223,
      winrate: 42,
    },
    {
      id: 45666,

      name: "Алексей Фишль",
      email: "a3455dmin@mail.ru",
      balance: 3455,
      deposite: 6577,
      winrate: 65,
    },
    {
      id: 4394,
      name: "Дуров",
      email: "admin567@mail.ru",
      balance: 999,
      deposite: 2322,
      winrate: 47,
    },
    {
      id: 345785,
      name: "Маленькая",
      email: "56765admin@mail.ru",
      balance: 2333,
      deposite: 656,
      winrate: 65,
    },
    {
      id: 1568722,
      name: "Агаб",
      email: "admin5675@mail.ru",
      balance: 565,
      deposite: 4356,
      winrate: 45,
    },
    {
      id: 6547887,

      name: "Лерка",
      email: "admi56756n@mail.ru",
      balance: 4566,
      deposite: 23444,
      winrate: 24,
    },
    {
      id: 2345784,

      name: "Маленькая",
      email: "admi6466n@mail.ru",
      balance: 234,
      deposite: 34223,
      winrate: 42,
    },
    {
      id: 45568766,

      name: "Алексей Фишль",
      email: "a3455dmin@mail.ru",
      balance: 3455,
      deposite: 6577,
      winrate: 65,
    },
    {
      id: 4356784,
      name: "Дуров",
      email: "admin567@mail.ru",
      balance: 999,
      deposite: 2322,
      winrate: 47,
    },
    {
      id: 3423455,
      name: "Маленькая",
      email: "56765admin@mail.ru",
      balance: 2333,
      deposite: 656,
      winrate: 65,
    },
    {
      id: 35122,
      name: "Агаб",
      email: "admin5675@mail.ru",
      balance: 565,
      deposite: 4356,
      winrate: 45,
    },
    {
      id: 37834,

      name: "Лерка",
      email: "admi56756n@mail.ru",
      balance: 4566,
      deposite: 23444,
      winrate: 24,
    },
    {
      id: 234478,

      name: "Маленькая",
      email: "admi6466n@mail.ru",
      balance: 234,
      deposite: 34223,
      winrate: 42,
    },
    {
      id: 456006,

      name: "Алексей Фишль",
      email: "a3455dmin@mail.ru",
      balance: 3455,
      deposite: 6577,
      winrate: 65,
    },
    {
      id: 234994,

      name: "Маленькая",
      email: "admi6466n@mail.ru",
      balance: 234,
      deposite: 34223,
      winrate: 42,
    },
    {
      id: 4567896,

      name: "Алексей Фишль",
      email: "a3455dmin@mail.ru",
      balance: 3455,
      deposite: 6577,
      winrate: 65,
    },
    {
      id: 43904,
      name: "Дуров",
      email: "admin567@mail.ru",
      balance: 999,
      deposite: 2322,
      winrate: 47,
    },
    {
      id: 34905,
      name: "Маленькая",
      email: "56765admin@mail.ru",
      balance: 2333,
      deposite: 656,
      winrate: 65,
    },
    {
      id: 12902,
      name: "Агаб",
      email: "admin5675@mail.ru",
      balance: 565,
      deposite: 4356,
      winrate: 45,
    },
    {
      id: 6500934,

      name: "Лерка",
      email: "admi56756n@mail.ru",
      balance: 4566,
      deposite: 23444,
      winrate: 24,
    },
    {
      id: 239044,

      name: "Маленькая",
      email: "admi6466n@mail.ru",
      balance: 234,
      deposite: 34223,
      winrate: 42,
    },
    {
      id: 456906,

      name: "Алексей Фишль",
      email: "a3455dmin@mail.ru",
      balance: 3455,
      deposite: 6577,
      winrate: 65,
    },
    {
      id: 489034,
      name: "Дуров",
      email: "admin567@mail.ru",
      balance: 999,
      deposite: 2322,
      winrate: 47,
    },
    {
      id: 348905,
      name: "Маленькая",
      email: "56765admin@mail.ru",
      balance: 2333,
      deposite: 656,
      winrate: 65,
    },
    {
      id: 12002,
      name: "Агаб",
      email: "admin5675@mail.ru",
      balance: 565,
      deposite: 4356,
      winrate: 45,
    },
    {
      id: 6540034,

      name: "Лерка",
      email: "admi56756n@mail.ru",
      balance: 4566,
      deposite: 23444,
      winrate: 24,
    },
    {
      id: 234904,

      name: "Маленькая",
      email: "admi6466n@mail.ru",
      balance: 234,
      deposite: 34223,
      winrate: 42,
    },
    {
      id: 490566,

      name: "Алексей Фишль",
      email: "a3455dmin@mail.ru",
      balance: 3455,
      deposite: 6577,
      winrate: 65,
    },
  ];
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const aboutUser = (id) => {
    navigate(`/user/${id}`);
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
    if (selected.length == usersData.length) {
      setSelected([]);
    } else {
      setSelected([...usersData]);
    }
  };

  return (
    <div className="template_page users_page">
      <div className="template_page_title">
        <h1>Пользователи</h1>
        <div className="top_cases_actions">
          <NavLink to="/">
            <button className="main_btn add_case_btn main_btn_template">
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
            <button className="main_btn main_btn_template_red">
              <p>Действие над пользователями</p>
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
                <td className="users_select">
                  <div className="select_all">
                    <div className="is_selected ml_55px">
                      {selected.length == usersData.length ? (
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
              {users
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
                              onClick={() => aboutUser(user.id)}
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
                          </div>
                          <div className="is_selected ">
                            {selected.some(
                              (selected) => selected.id === user.id
                            ) ? (
                              <SelectedIcon
                                onClick={() => toggleSelected(user)}
                              />
                            ) : (
                              <div
                                className="not_selected_item"
                                onClick={() => toggleSelected(user)}
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
            <Pagination allData={usersData} paginationData={setUsers} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Users;
