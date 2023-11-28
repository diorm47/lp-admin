import React, { useEffect, useState } from "react";
import "./add-employe.css";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-icon.svg";
import { ReactComponent as ArrowBackIcon } from "../../assets/icons/arrow-back.svg";
import { NavLink, useParams } from "react-router-dom";
import { InputWithLabel, SelectWithLabel } from "../../components/utils/utils";
import { mainApi } from "../../components/utils/main-api";

function EditEmployee() {
  const [rolesList, setRolesList] = useState([]);
  const params = useParams();

  useEffect(() => {
    mainApi
      .getRolesAction()
      .then((res) => {
        setRolesList(res);
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
        setCurrentAdminId(res.username);
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
      username: currentAdminId,
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

  useEffect(() => {
    mainApi
      .getEmployee(params.employee)
      .then((res) => {
        console.log(res);
        setFirstName(res[0].first_name);
        setLastName(res[0].last_name);
        setUserEmail(res[0].email);
        setCurrentAdminId(res[0].username)
        setUserName(res[0].username);
        setCurrentActionNumber(2)
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  return (
    <div className="template_page add_employee_page">
      <div className="template_page_title">
        <h1>Изменить данные сотрудника</h1>
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
          <h3>Сотрудник</h3>
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
                  options={rolesList || []}
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
        </div>
      </div>
    </div>
  );
}

export default EditEmployee;
