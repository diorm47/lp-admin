import React, { useState } from "react";
import "./add-employe.css";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-icon.svg";
import { ReactComponent as ArrowBackIcon } from "../../assets/icons/arrow-back.svg";
import { NavLink } from "react-router-dom";

function AddEmploye() {
  return (
    <div className="template_page add_employee_page">
      <div className="template_page_title">
        <h1>Новый сотрудник</h1>
        <div className="users_search">
          <SearchIcon />
          <input type="text" placeholder="Поиск" />
        </div>
      </div>
      <div className="template_page_content">
        <div className="user_line"></div>
        <NavLink to="/employees">
          <div className="back_btn">
            <ArrowBackIcon /> <p>Назад</p>
          </div>
        </NavLink>

        <div className="add_employee_wrapper">
          <h3>Создание нового сотрудника</h3>
          <div className="add_employee_form">
            <div className="add_employe_input">
              <InputWithLabel id="employer_name" label="Имя *" />
              <InputWithLabel id="employer_grade" label="Должность *" />
              <InputWithLabel id="employer_email" label="Email сотрудника" />
              <InputWithLabel id="employer_login" label="Логин" />
              <InputWithLabel
                id="employer_contact"
                label="Контакт сотрудника"
              />
              <div className="create_employer_password">
                <input type="text" placeholder="Пароль" />
                <button>Сгенерировать пароль</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddEmploye;

function InputWithLabel({ id, label }) {
  const [isActive, setIsActive] = useState(false);
  const [isActiveInput, setIsActiveInput] = useState(false);

  const handleFocus = () => {
    setIsActive(true);
    setIsActiveInput(true);
  };

  const handleBlur = (e) => {
    if (!e.target.value) {
      setIsActive(false);
      setIsActiveInput(false);
    }
  };

  return (
    <div>
      <label htmlFor={id} className={isActive ? "active" : ""}>
        {label}
      </label>
      <input
        id={id}
        className={isActiveInput ? "active_input" : ""}
        type="text"
        // className="cool"
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
}
