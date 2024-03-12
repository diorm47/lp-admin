import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as ArrowBackIcon } from "../../assets/icons/arrow-back.svg";

import Snacbar from "../../components/snackbar/snackbar";
import { mainApi } from "../../components/utils/main-api";
import CaseItems from "../../components/case-items/case-items";

function CreateOutput() {
  const [modal, setModal] = useState(false);

  const [outputItems, setOutputItems] = useState([]);
  const [purchaseCIOutputs, setPurchaseCIOutputs] = useState([]);
  const [costWithdrawalItems, setCostWithdrawalItems] = useState("");
  const [costWithdrawalItemsRub, setCostWithdrawalItemsRub] = useState("");
  const [type, setType] = useState("moogold");
  const [status, setStatus] = useState("completed");
  const [playerId, setPlayerId] = useState("");
  const [comment, setComment] = useState("");
  const [removed, setRemoved] = useState(true);
  const [withdrawalPrice, setWithdrawalPrice] = useState("");
  const [active, setActive] = useState(true);
  const [user, setUser] = useState("");
  const [approvalUser, setApprovalUser] = useState("");
  const [removeUser, setRemoveUser] = useState("");

  const [isSnackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarText, setSnackbarText] = useState("");
  const snackbarActions = (snackText) => {
    setSnackbarVisible(true);
    setSnackbarText(snackText);
    setTimeout(() => {
      setSnackbarVisible(false);
    }, 2000);
  };

  const saveOutput = () => {
    mainApi
      .createOutput({
        output_items: outputItems,
        purchase_ci_outputs: purchaseCIOutputs,
        cost_withdrawal_of_items: costWithdrawalItems,
        cost_withdrawal_of_items_in_rub: costWithdrawalItemsRub,
        type: type,
        status: status,
        player_id: playerId,
        comment: comment,
        removed: removed,
        withdrawal_price: withdrawalPrice,
        active: active,
        user: user,
        approval_user: approvalUser,
        remove_user: removeUser,
      })
      .then((res) => {
        snackbarActions("Вывод создан");
      })
      .catch((error) => {
        snackbarActions("Ошибка создания вывода");
      });
  };

  const delSelectedItem = (data) => {
    setOutputItems(outputItems.filter((item) => item.item_id !== data.item_id));
  };
  const categories = [
    {
      type: "completed",
      name: "Завершенный",
    },
    {
      type: "proccess",
      name: "В процессе",
    },
    {
      type: "technical-error",
      name: "Техническая ошибка",
    },
  ];
  return (
    <>
      {modal ? (
        <div className="modal_overlay" onClick={() => setModal(false)}></div>
      ) : (
        ""
      )}

      {modal ? (
        <CaseItems
          setModal={setModal}
          setCaseItems={setOutputItems}
          caseItems={outputItems}
        />
      ) : (
        ""
      )}

      <div className="template_page promocode_page_crud">
        <div className="template_page_title">
          <h1>Создать вывод</h1>
        </div>
        <div className="user_line"></div>
        <NavLink to="/conclusions">
          <div className="back_btn">
            <ArrowBackIcon /> <p>Назад</p>
          </div>
        </NavLink>
        <div className="cases_actions_wrapper">
          <div className="case_tab_content">
            <div className="case_tab_content_title">
              <p>Информация о выводе</p>
            </div>

            <div className="case_img_block_wrapper add_output_items">
              <div className="case_img_block add_item_case_btn">
                <div
                  className="case_img_item case_img_add_block"
                  onClick={() => setModal(true)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M18 6V4L16 2H11L9 4V6H5V17C5 17 6 19 7 19H20C20 19 22 18.02 22 17V6H18ZM4 9H2V20C2 21.11 2.89 22 4 22H18C19.11 22 20 21.11 20 20H5.2C4.53726 20 4 19.4627 4 18.8V9ZM11 5C11 4.45 11.53 4 12 4H15C15.46 4 16 4.54 16 5V6H11V5ZM5 6H13.5H22V17C22 18.1 21.1 19 20 19H7C5.9 19 5 18.1 5 17V6Z"
                      fill="#358ed7"
                    />
                    <path
                      d="M9 6H5V17C5 17 6 19 7 19H20C20 19 22 18.02 22 17V6H18H16H13.5H11H9Z"
                      fill="#358ed7"
                    />
                  </svg>
                  <p>Добавить предмет</p>
                </div>
              </div>
              {outputItems && outputItems.length ? (
                <>
                  <div className="case_input_temp_title">
                    <p>Выбранные предметы</p>
                  </div>
                  <div className="case_items_list">
                    {outputItems && outputItems.length
                      ? outputItems.map((item) => (
                          <div
                            className="case_img_item case_items_list_item"
                            key={item.id}
                            onClick={() => delSelectedItem(item)}
                          >
                            <img src={item.image} alt="" />
                            <p>{item.name}</p>
                            <p>{item.price} р.</p>
                          </div>
                        ))
                      : ""}
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
            <div className="case_input_temp">
              <div className="case_input_temp_title">
                <p>Стоимость вывода предметов</p>
              </div>
              <input
                type="text"
                value={costWithdrawalItems}
                onChange={(e) => setCostWithdrawalItems(e.target.value)}
              />
            </div>
            <div className="case_input_temp">
              <div className="case_input_temp_title">
                <p>Стоимость вывода предметов (руб)</p>
              </div>
              <input
                type="text"
                value={costWithdrawalItemsRub}
                onChange={(e) => setCostWithdrawalItemsRub(e.target.value)}
              />
            </div>
            <div className="case_input_temp">
              <div className="case_input_temp_title">
                <p>Стоимость вывода</p>
              </div>
              <input
                type="text"
                value={withdrawalPrice}
                onChange={(e) => setWithdrawalPrice(e.target.value)}
              />
            </div>
            <div className="case_input_temp">
              <p>Статус</p>
              <select onChange={(e) => setStatus(e.target.value)}>
                {categories && categories[0]
                  ? categories.map((categories, index) => (
                      <option key={index} value={categories.type}>
                        {categories.name}
                      </option>
                    ))
                  : ""}
              </select>
            </div>
            {/*  */}
            {/*  */}
            <div className="case_input_temp">
              <div className="case_input_temp_title">
                <p>ID игрока</p>
              </div>
              <input
                type="text"
                value={playerId}
                onChange={(e) => setPlayerId(e.target.value)}
              />
            </div>
            <div className="case_input_temp">
              <div className="case_input_temp_title">
                <p>Комментарии</p>
              </div>
              <input
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </div>

            {/*  */}
            <div className="case_input_temp case_input_temp_checkbox">
              <input
                type="checkbox"
                checked={active}
                onClick={() => setActive(!active)}
              />{" "}
              <p>Активный</p>
            </div>
            <div className="case_input_temp case_input_temp_checkbox">
              <input
                type="checkbox"
                checked={removed}
                onClick={() => setRemoved(!active)}
              />{" "}
              <p>Удален</p>
            </div>
            <div className="case_input_temp">
              <div className="case_input_temp_title">
                <p>Пользователь</p>
              </div>
              <input
                type="text"
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
            </div>
            <div className="case_input_temp">
              <div className="case_input_temp_title">
                <p>Одобренные пользователи</p>
              </div>
              <input
                type="text"
                value={approvalUser}
                onChange={(e) => setApprovalUser(e.target.value)}
              />
            </div>
            <div className="case_input_temp">
              <div className="case_input_temp_title">
                <p>Удаленные пользователи</p>
              </div>
              <input
                type="text"
                value={removeUser}
                onChange={(e) => setRemoveUser(e.target.value)}
              />
            </div>

            <div className="admin_actions case_actions">
              <button className="create_admin_btn" onClick={saveOutput}>
                Сохранить
              </button>
              <NavLink to="/conclusions">
                <button className="undo_create">Отменить</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      {isSnackbarVisible ? (
        <Snacbar visible={isSnackbarVisible} text={snackbarText} />
      ) : (
        ""
      )}
    </>
  );
}

export default CreateOutput;
