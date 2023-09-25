import React from "react";
import "./user.css";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-icon.svg";
import { ReactComponent as SettingsIcon } from "../../assets/icons/user-settings.svg";
import avatar from "../../assets/images/avatar.png";
import { useNavigate } from "react-router-dom";
import { users } from "../../components/users";

function Users() {
  const navigate = useNavigate();

  const aboutUser = (id) => {
    navigate(`/user/${id}`);
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
              {users.map((user) => (
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
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Users;
