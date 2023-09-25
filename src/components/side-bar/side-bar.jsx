import React from "react";
import "./side-bar.css";
import { ReactComponent as Icon } from "../../assets/icons/menu-icon.svg";
import { NavLink } from "react-router-dom";

function SideBar() {
  return (
    <div className="sidebar_wrapper">
      <div className="sidebar_menu">
        <NavLink to="/analytics">
          <div className="sidebar_menu_item">
            <div className="sidenar_menu_icon">
              <Icon />
            </div>
            <p>Аналитика</p>
          </div>
        </NavLink>
        <NavLink to="/promocodes">
          <div className="sidebar_menu_item">
            <div className="sidenar_menu_icon">
              <Icon />
            </div>
            <p>Промокоды</p>
          </div>
        </NavLink>
        <NavLink to="/cases">
          <div className="sidebar_menu_item">
            <div className="sidenar_menu_icon">
              <Icon />
            </div>
            <p>Кейсы</p>
          </div>
        </NavLink>
        <NavLink to="/items">
          <div className="sidebar_menu_item">
            <div className="sidenar_menu_icon">
              <Icon />
            </div>
            <p>Предметы</p>
          </div>
        </NavLink>
        <NavLink to="/competitons">
          <div className="sidebar_menu_item">
            <div className="sidenar_menu_icon">
              <Icon />
            </div>
            <p>Конкурсы</p>
          </div>
        </NavLink>
        <NavLink to="/users">
          <div className="sidebar_menu_item">
            <div className="sidenar_menu_icon">
              <Icon />
            </div>
            <p>Пользователи</p>
          </div>
        </NavLink>
        <NavLink to="/payments">
          <div className="sidebar_menu_item">
            <div className="sidenar_menu_icon">
              <Icon />
            </div>
            <p>Платежи</p>
          </div>
        </NavLink>
        <NavLink to="/conclusions">
          <div className="sidebar_menu_item">
            <div className="sidenar_menu_icon">
              <Icon />
            </div>
            <p>Выводы</p>
          </div>
        </NavLink>
        <NavLink to="/reviews">
          <div className="sidebar_menu_item">
            <div className="sidenar_menu_icon">
              <Icon />
            </div>
            <p>Отзывы</p>
          </div>
        </NavLink>
        <NavLink to="/support">
          <div className="sidebar_menu_item">
            <div className="sidenar_menu_icon">
              <Icon />
            </div>
            <p>Поддержка</p>
          </div>
        </NavLink>
        <NavLink to="/settings">
          <div className="sidebar_menu_item">
            <div className="sidenar_menu_icon">
              <Icon />
            </div>
            <p>Настройки</p>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default SideBar;
