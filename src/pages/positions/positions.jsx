import React, { useEffect, useState } from "react";
import { ReactComponent as ArrowBackIcon } from "../../assets/icons/arrow-back.svg";
import CreatePosition from "../../components/create-position/create-position";
import "./positions.css";

import { NavLink } from "react-router-dom";
import { mainApi } from "../../components/utils/main-api";
import { InputWithLabel } from "../../components/utils/utils";

function Positions() {
  const [categoryModal, setCategoryModal] = useState(false);
  const [rolesList, setRolesList] = useState([]);
  const [value, setValue] = useState("");
  const [permissions, setPermissions] = useState([]);

  const [selectedPermissions, setSelectedPermissions] = useState([]);
  const [selectedPage, setSelectedPage] = useState([]);
  const [selectedRole, setSelectedRole] = useState();
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

  useEffect(() => {
    mainApi
      .getPermissionAction()
      .then((res) => {
        setPermissions(res);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  const closeModal = () => {
    setCategoryModal(false);
  };

  const handleCheckboxChange = (permission) => {
    if (selectedPermissions.includes(permission.name)) {
      setSelectedPermissions((prev) =>
        prev.filter((perm) => perm !== permission.name)
      );
    } else {
      setSelectedPermissions((prev) => [...prev, permission.name]);
    }
  };
  const handleCheckboxPageChange = (page) => {
    if (selectedPage.includes(page)) {
      setSelectedPage((prev) => prev.filter((perm) => perm !== page));
    } else {
      setSelectedPage((prev) => [...prev, page]);
    }
  };
  const savePagePerms = () => {
    mainApi
      .setPagePerm({
        role: selectedRole.name,
        pages: selectedPage,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleSetPermissions = () => {
    savePagePerms();
    const data = {
      role: selectedRole.name,
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

  const getRolePages = (data) => {
    mainApi
      .getRolePages(data)
      .then((res) => {
        setSelectedPage(res.pages);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  const selectRole = (data) => {
    setSelectedRole(data);
    getRolePages(data.name);
    mainApi
      .getRolePermissionAction(data.name)
      .then((res) => {
        setSelectedPermissions(res.permissions);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  // createPositionAction
  const savePositions = () => {
    mainApi
      .createPositionAction({
        role: value,
      })
      .then((res) => {
        console.log(res);
        setCategoryModal(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const pages = [
    "Аналитика",

    "Промокоды",

    "Кейсы",

    "Предметы",

    "Конкурсы",

    "Пользователи",

    "Платежи",

    "Выводы",

    "Отзывы",

    "Поддержка",

    "Сотрудники",

    "Настройки",
  ];

  return (
    <>
      {categoryModal ? (
        <div className="modal_overlay" onClick={closeModal}></div>
      ) : (
        ""
      )}

      {categoryModal ? (
        <CreatePosition setCategoryModal={setCategoryModal} />
      ) : (
        ""
      )}

      <div className="template_page analytics_page">
        <div className="template_page_title">
          <h1>Добавить роль</h1>
        </div>
        <div className="user_line"></div>
        <NavLink to="/employees">
          <div className="back_btn">
            <ArrowBackIcon /> <p>Назад</p>
          </div>
        </NavLink>

        <div className="add_employee_wrapper">
          <h3>Создание новой роли</h3>
          <div className="add_role_form">
            <div className="add_role_block">
              <div className="add_employe_input">
                <InputWithLabel
                  id="employer_last_name"
                  label="Название *"
                  value={value}
                  event={setValue}
                />
              </div>
              <div className="warning">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V11H13V17ZM13 9H11V7H13V9Z"
                    fill="#A6A6A6"
                  />
                </svg>
                <p>
                  Новая роль будет сохранена для дальнейшего <br /> применения с
                  выбранными правами
                </p>
              </div>
            </div>

            <div className="position_roles">
              {rolesList.map((permission) => (
                <div
                  className={
                    selectedRole && selectedRole.id === permission.id
                      ? "active_sel_permission"
                      : ""
                  }
                  key={permission.id}
                  onClick={() => selectRole(permission)}
                >
                  <p>{permission.name}</p>
                </div>
              ))}
            </div>
            {selectedRole ? (
              <div className="admin_permissions">
                <div className="admin_page_perms">
                  <h3>Доступ к страницам для {selectedRole.name}</h3>
                  <div className="admin_page_perms_list admin_permissions_list">
                    {pages.map((page, index) => (
                      <div className="admin_permission" key={index}>
                        <div>
                          <input
                            type="checkbox"
                            checked={selectedPage.includes(page)}
                            onChange={() => handleCheckboxPageChange(page)}
                          />
                        </div>
                        <p> {page}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <h3>Права {selectedRole.name}</h3>
                <div className="admin_permissions_list">
                  {permissions.map((permission) => (
                    <div className="admin_permission" key={permission.id}>
                      <div>
                        <input
                          type="checkbox"
                          checked={selectedPermissions.includes(
                            permission.name
                          )}
                          onChange={() => handleCheckboxChange(permission)}
                        />
                      </div>
                      <p> {permission.name}</p>
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
                </div>
              </div>
            ) : (
              ""
            )}
            <div className="admin_actions ">
              <button className="create_admin_btn" onClick={savePositions}>
                Создать
              </button>
              <button className="undo_create">Отменить</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Positions;
