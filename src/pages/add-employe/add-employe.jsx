import React, { useEffect, useState } from "react";
import "./add-employe.css";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-icon.svg";
import { ReactComponent as ArrowBackIcon } from "../../assets/icons/arrow-back.svg";
import { NavLink } from "react-router-dom";
import { InputWithLabel, SelectWithLabel } from "../../components/utils/utils";
import { mainApi } from "../../components/utils/main-api";

function AddEmploye() {
  const [rolesList, setRolesList] = useState([]);

  useEffect(() => {
    mainApi
      .getRolesAction()
      .then((res) => {
        setRolesList(res.roles);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);
  const [currentActionNumber, setCurrentActionNumber] = useState(1);

  const [currentAdminId, setCurrentAdminId] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setPassword] = useState("");

  const [userRole, setRole] = useState("");

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

  const createEmployee = () => {
    const employee = {
      username: userName,
      first_name: firstName,
      last_name: lastName,
      email: userEmail,
      password: userPassword,
    };
    mainApi
      .createEmployeeAction(employee)
      .then((res) => {
        setCurrentAdminId(res.admin_id);
        setCurrentActionNumber(2);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  const generatePassword = () => {
    mainApi
      .createPasswordAction({
        length: 8,
        uppercase: true,
        digits: true,
        characters: false,
      })
      .then((res) => {
        setPassword(res.password);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const handleSetRole = () => {
    const data = {
      admin_id: currentAdminId,
      role: userRole,
    };
    mainApi
      .setRoleAction(data)
      .then((res) => {
        setCurrentActionNumber(3);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const handleSetPermissions = () => {
    const data = {
      admin_id: currentAdminId,
      permissions: selectedPermissions,
    };
    mainApi
      .setPermissionAction(data)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log("error", error);
      });
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
              <InputWithLabel
                id="employer_last_name"
                label="Фамилия"
                value={lastName}
                event={setLastName}
              />
              <InputWithLabel
                id="employer_name"
                label="Имя"
                value={firstName}
                event={setFirstName}
              />

              <InputWithLabel
                id="employer_email"
                label="Email сотрудника"
                value={userEmail}
                event={setUserEmail}
              />
              <InputWithLabel
                id="employer_login"
                label="Логин"
                value={userName}
                event={setUserName}
              />

              <div className="create_employer_password">
                <input
                  type="text"
                  placeholder="Пароль"
                  value={userPassword}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={generatePassword}>Сгенерировать пароль</button>
              </div>
            </div>
            <div className="admin_actions admin_create_actions">
              <button className="create_admin_btn" onClick={createEmployee}>
                Создать
              </button>
              <button className="undo_create">Отменить</button>
            </div>
          </div>
          {currentActionNumber >= 2 ? (
            <div className="employee_role">
              <h3>Должность сотрудника</h3>

              <div className="add_employe_input">
                <SelectWithLabel
                  id="employee_role_select"
                  label="Должность"
                  options={rolesList}
                  event={setRole}
                />
              </div>
              <div className="admin_actions admin_create_actions">
                <button className="create_admin_btn" onClick={handleSetRole}>
                  Назначить
                </button>
                <button className="undo_create">Отменить</button>
              </div>
            </div>
          ) : (
            ""
          )}

          {currentActionNumber === 3 ? (
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
                <button
                  className="create_admin_btn"
                  onClick={handleSetPermissions}
                >
                  Сохранить
                </button>
                <button className="undo_create">Отменить</button>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default AddEmploye;
