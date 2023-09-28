import React from "react";
import "./employees.css";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-icon.svg";
import { ReactComponent as EditIcon } from "../../assets/icons/edit.svg";
import { ReactComponent as DeleteIcon } from "../../assets/icons/delete.svg";
import { NavLink } from "react-router-dom";

function Employees() {
  return (
    <div className="template_page employees_page">
      <div className="template_page_title">
        <h1>Сотрудники</h1>
        <div className="users_search">
          <SearchIcon />
          <input type="text" placeholder="Поиск" />
        </div>
      </div>
      <div className="template_page_content">
        <div className="user_line"></div>
        <div className="employees_wrapper">
          <div className="employe_search_add">
            <div className="employe_search">
              <input
                type="text"
                placeholder="Логин, должность, электронная почта"
              />
              <SearchIcon />
            </div>
            <NavLink to="/add-employee">
              <div className="employe_add">
                <span>+</span> <p>Добавить пользователя</p>
              </div>
            </NavLink>
          </div>
          <table className="employes_table">
            <thead>
              <tr>
                <th>Имя</th>
                <th>Логин</th>
                <th>должность</th>
                <th>электронная почта</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>AlinaFontaine</td>
                <td>9884888008</td>
                <td>Администратор</td>
                <td>alinafontaine@yandex.ru</td>
                <td className="employer_list_actions">
                  <div className="employer_action_btns">
                    <EditIcon />
                    <DeleteIcon />
                  </div>
                </td>
              </tr>
              <tr>
                <td>AlinaFontaine</td>
                <td>9884888008</td>
                <td>Администратор</td>
                <td>alinafontaine@yandex.ru</td>
                <td className="employer_list_actions">
                  <div className="employer_action_btns">
                    <EditIcon />
                    <DeleteIcon />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Employees;
