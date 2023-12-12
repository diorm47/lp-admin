import React from "react";
import "./side-bar.css";
import { ReactComponent as Icon1 } from "../../assets/icons/sidebar-icons/1.svg";
import { ReactComponent as Icon2 } from "../../assets/icons/sidebar-icons/2.svg";
import { ReactComponent as Icon3 } from "../../assets/icons/sidebar-icons/3.svg";
import { ReactComponent as Icon4 } from "../../assets/icons/sidebar-icons/4.svg";
import { ReactComponent as Icon5 } from "../../assets/icons/sidebar-icons/5.svg";
import { ReactComponent as Icon6 } from "../../assets/icons/sidebar-icons/6.svg";
import { ReactComponent as Icon7 } from "../../assets/icons/sidebar-icons/7.svg";
import { ReactComponent as Icon8 } from "../../assets/icons/sidebar-icons/8.svg";
import { ReactComponent as Icon9 } from "../../assets/icons/sidebar-icons/9.svg";
import { ReactComponent as Icon10 } from "../../assets/icons/sidebar-icons/10.svg";
import { ReactComponent as Icon11 } from "../../assets/icons/sidebar-icons/11.svg";
import { ReactComponent as Icon12 } from "../../assets/icons/sidebar-icons/12.svg";
import { NavLink } from "react-router-dom";

function SideBar() {
  return (
    <div className="side_bar">
      <div className="sidebar_wrapper">
        <div className="sidebar_menu">
          <NavLink to="/analytics">
            <div className="sidebar_menu_item">
              <div className="sidenar_menu_icon">
                <Icon1 />
              </div>
              <p>Аналитика</p>
            </div>
          </NavLink>
          <NavLink to="/promocodes">
            <div className="sidebar_menu_item">
              <div className="sidenar_menu_icon">
                <Icon2 />
              </div>
              <p>Промокоды</p>
            </div>
          </NavLink>
          <NavLink to="/cases">
            <div className="sidebar_menu_item">
              <div className="sidenar_menu_icon">
                <Icon3 />
              </div>
              <p>Кейсы</p>
            </div>
          </NavLink>
          <NavLink to="/items">
            <div className="sidebar_menu_item">
              <div className="sidenar_menu_icon">
                <Icon4 />
              </div>
              <p>Предметы</p>
            </div>
          </NavLink>
          <NavLink to="/competitons">
            <div className="sidebar_menu_item">
              <div className="sidenar_menu_icon">
                <Icon5 />
              </div>
              <p>Конкурсы</p>
            </div>
          </NavLink>
          <NavLink to="/users">
            <div className="sidebar_menu_item">
              <div className="sidenar_menu_icon">
                <Icon6 />
              </div>
              <p>Пользователи</p>
            </div>
          </NavLink>
          <NavLink to="/payments">
            <div className="sidebar_menu_item">
              <div className="sidenar_menu_icon">
                <Icon7 />
              </div>
              <p>Платежи</p>
            </div>
          </NavLink>
          <NavLink to="/conclusions">
            <div className="sidebar_menu_item">
              <div className="sidenar_menu_icon">
                <Icon8 />
              </div>
              <p>Выводы</p>
            </div>
          </NavLink>
          {/* <NavLink to="/reviews">
            <div className="sidebar_menu_item">
              <div className="sidenar_menu_icon">
                <Icon9 />
              </div>
              <p>Отзывы</p>
            </div>
          </NavLink> */}
          {/* <NavLink to="/support">
            <div className="sidebar_menu_item">
              <div className="sidenar_menu_icon">
                <Icon10 />
              </div>
              <p>Поддержка</p>
            </div>
          </NavLink> */}
          <NavLink to="/employees">
            <div className="sidebar_menu_item">
              <div className="sidenar_menu_icon">
                <Icon11 />
              </div>
              <p>Сотрудники</p>
            </div>
          </NavLink>

          <NavLink to="/settings">
            <div className="sidebar_menu_item">
              <div className="sidenar_menu_icon">
                <Icon12 />
              </div>
              <p>Настройки</p>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
