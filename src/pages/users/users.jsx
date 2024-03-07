import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-icon.svg";
import avatar from "../../assets/images/avatar.png";
import Pagination from "../../components/pagionation/pagination";
import "./user.css";
import { ReactComponent as SelectedIcon } from "../../assets/icons/selected-icon.svg";
import { mainApi } from "../../components/utils/main-api";

function Users() {
  const [usersData, setUsersData] = useState([]);

  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const aboutUser = (id) => {
    navigate(`/user/${id}`);
  };

  const [selected, setSelected] = useState([]);

  const toggleSelected = (data) => {
    const filteredSelectedItems = selected.some(
      (selected) => selected.user_id === data.user_id
    );
    if (filteredSelectedItems) {
      setSelected(selected.filter((item) => item.user_id !== data.user_id));
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

  const getUsers = () => {
    mainApi
      .getUsersActions()
      .then((res) => {
        setUsersData(res.results);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  useEffect(() => {
    getUsers();
  }, []);

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
              
                <th className="table_user_balance_title">Баланс</th>
                <th className="table_user_deposite_title">Депозитов</th>
                <th className="table_user_winrate_title">Выводы</th>
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
                    <tr key={user.user_id}>
                      <td className="table_user_id_row">
                        <p>{user.user_id}</p>
                      </td>
                      <td className="table_user_avatar_row">
                        <img src={user.image || avatar} alt="" />
                      </td>
                      <td className="table_user_name_row">
                        <p>{user.username}</p>
                      </td>
            
                      <td className="table_user_balance_row">
                        <p>{user.balance.toFixed(2)} ₽</p>
                      </td>
                      <td className="table_user_deposite_row">
                        <p>{user.all_debit.toFixed(2)} ₽</p>
                      </td>
                      <td className="table_user_deposite_row">
                        <p>{user.all_output.toFixed(2)} ₽</p>
                      </td>
                      <td className="table_user_winrate_row">
                        <p>{user.winrate.toFixed(2)}%</p>
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
                              onClick={() => aboutUser(user.user_id)}
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
                              (selected) => selected.user_id === user.user_id
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
