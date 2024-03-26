import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-icon.svg";
import { ReactComponent as SelectedIcon } from "../../assets/icons/selected-icon.svg";
import avatar from "../../assets/images/avatar.png";
import Pagination from "../../components/pagionation/pagination";
import { mainApi } from "../../components/utils/main-api";
import "./user.css";

function Users() {
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
    if (selected.length == users.length) {
      setSelected([]);
    } else {
      setSelected([...users]);
    }
  };

  const [dataLength, setDataLength] = useState();
  const [currentPage, setCurrentPage] = useState(0);
  useEffect(() => {
    getUsers(currentPage * 10);
  }, [currentPage]);

  const getUsers = (offset = 0) => {
    mainApi
      .getUsersActions(offset)
      .then((res) => {
        setUsers(res.results);
        setDataLength(res.count);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <div className="template_page users_page">
      <div className="template_page_title">
        <h1>Пользователи</h1>
        <div className="users_search">
          <SearchIcon />
          <input type="text" placeholder="Поиск" />
        </div>
      </div>
      <div className="template_page_content ">
        <div className="users_page_wrapper">
          {/* <div className="cases_top_togglers">
            <button className="main_btn">
              <p>Все предметы</p>
            </button>
            <button className="main_btn">
              <p>Блогеры</p>
            </button>
            <button className="main_btn">
              <p>Сотрудники</p>
            </button>
          </div> */}

          <div className="user_line"></div>
          {users && users.length ? (
            <>
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
                          {selected.length == users.length ? (
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
                                  (selected) =>
                                    selected.user_id === user.user_id
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
                <Pagination
                  pageCount={Math.ceil(dataLength / 10)}
                  onPageChange={setCurrentPage}
                />
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default Users;
