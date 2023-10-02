import React, { useState } from "react";
import "./add-employe.css";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-icon.svg";
import { ReactComponent as ArrowBackIcon } from "../../assets/icons/arrow-back.svg";
import { NavLink } from "react-router-dom";

function AddEmploye() {
  const permissions = [
    "Создание сотрудников",
    "Просмотр сотрудников",
    "Редактирование сотрудников",
    "Блокировка и разблокировка сотрудников",
    "Сброс паролей сотрудников",
    "Управление ролями сотрудников",
    "Управление правами сотрудников",
    "Просмотр журнала активности",
    "Доступ к настройкам и конфигурации системы",
    "Резервное копирование и восстановление данных",
    "Обновление и обслуживание системы",
    "Настройка интеграции с внешними системами",
    "Просмотр аналитики по вкладам",
    "Просмотр общей аналитики расходов",
    "Просмотр аналитики покупок MooGold",
    "Просмотр аналитики вывода товаров",
    "Просмотр аналитики по коэффициентам выигрыша и проигрыша",
    "Просмотр аналитики онлайн пользователей",
    "Просмотр аналитики зарегистрированных пользователей",
    "Экспорт аналитики",
    "Просмотр тикетов",
    "Ответ на тикеты",
    "Обновление статуса тикетов",
    "Перенаправление тикетов",
    "Добавление отзывов",
    "Просмотр отзывов",
    "Редактирование отзывов",
    "Ответ на отзывы",
    "Просмотр платежей",
    "Обновление статуса платежей",
    "Подтверждение и отклонение платежей",
    "Просмотр запросов на вывод",
    "Обновление статуса запросов на вывод",
    "Подтверждение и отклонение запросов на вывод",
    "Создание пользователей",
    "Просмотр пользователей",
    "Редактирование пользователей",
    "Блокировка и разблокировка пользователей",
    "Сброс паролей пользователей",
    "Создание кейсов",
    "Создание категорий кейсов",
    "Просмотр кейсов",
    "Просмотр категорий кейсов",
    "Редактирование кейсов",
    "Редактирование категорий кейсов",
    "Удаление кейсов",
    "Удаление категорий кейсов",
    "Создание настроек кейсов",
    "Просмотр настроек кейсов",
    "Редактирование настроек кейсов",
    "Удаление настроек предметов",
    "Добавление предметов",
    "Просмотр предметов",
    "Редактирование предметов",
    "Удаление предметов",
    "Создание конкурсов",
    "Просмотр конкурсов",
    "Редактирование конкурсов",
    "Удаление конкурсов",
    "Создание промокодов",
    "Просмотр промокодов",
    "Редактирование промокодов",
    "Удаление промокодов",
    "Создание реферальных кодов",
    "Просмотр реферальных кодов",
    "Редактирование реферальных кодов",
    "Удаление реферальных кодов",
  ];
  const [selectedPermissions, setSelectedPermissions] = useState([]);

  const handleCheckboxChange = (permission) => {
    if (selectedPermissions.includes(permission)) {
      setSelectedPermissions((prev) =>
        prev.filter((perm) => perm !== permission)
      );
    } else {
      setSelectedPermissions((prev) => [...prev, permission]);
    }
  };
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
              <SelectWithLabel
                id="employer_role"
                label="Должность *"
                options={["Manager", "Developer", "Designer"]}
              />

              <InputWithLabel
                id="employer_grade"
                label="Название новой должности *"
              />
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
            <div className="admin_actions admin_create_actions">
              <button className="create_admin_btn">Создать</button>
              <button className="undo_create">Отменить</button>
            </div>
          </div>

          <div className="admin_permissions">
            <h3>Права сотрудника</h3>
            <div className="admin_permissions_list">
              {permissions.map((permission) => (
                <div className="admin_permission" key={permission}>
                  <input
                    type="checkbox"
                    checked={selectedPermissions.includes(permission)}
                    onChange={() => handleCheckboxChange(permission)}
                  />
                  {permission}
                </div>
              ))}
            </div>
            <div className="admin_actions admin_permisions_btns">
              <button className="create_admin_btn">Сохранить</button>
              <button className="undo_create">Отменить</button>
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
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
}

function SelectWithLabel({ id, label, options }) {
  const [isActive, setIsActive] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const handleFocus = () => {
    setIsActive(true);
  };

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
    if (e.target.value) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  return (
    <div>
      <label htmlFor={id} className={isActive ? "active" : ""}>
        {label}
      </label>
      <select
        id={id}
        value={selectedValue}
        className={isActive ? "active_input" : ""}
        onFocus={handleFocus}
        onChange={handleChange}
      >
        <option value="" disabled hidden></option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
