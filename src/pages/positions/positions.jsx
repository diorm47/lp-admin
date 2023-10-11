import React, { useState } from "react";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-icon.svg";
import "./positions.css";
import CreatePosition from "../../components/create-position/create-position";
import { useEffect } from "react";
import { mainApi } from "../../components/utils/main-api";

function Positions() {
  const [categoryModal, setCategoryModal] = useState(false);
  const [rolesList, setRolesList] = useState([]);

  const [permissions, setPermissions] = useState([]);

  const [selectedPermissions, setSelectedPermissions] = useState([]);
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

  const handleSetPermissions = () => {
    const data = {
      role_name: selectedRole.name,
      permissions_names: selectedPermissions,
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

  const selectRole = (data) => {
    setSelectedRole(data);
    mainApi
      .getRolePermissionAction(data.name)
      .then((res) => {
        setSelectedPermissions(res.permissions);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

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
          <h1>Должности</h1>
          <button
            className="main_btn create_position_btn"
            onClick={() => setCategoryModal(true)}
          >
            Создать должность
          </button>
          <div className="users_search">
            <SearchIcon />
            <input type="text" placeholder="Поиск" />
          </div>
        </div>
        <div className="user_line"></div>
        <div className="positions_content">
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
              <h3>Права {selectedRole.name}</h3>
              <div className="admin_permissions_list">
                {permissions.map((permission) => (
                  <div className="admin_permission" key={permission.id}>
                    <div>
                      <input
                        type="checkbox"
                        checked={selectedPermissions.includes(permission.name)}
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
        </div>
      </div>
    </>
  );
}

export default Positions;
