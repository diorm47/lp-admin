import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { ReactComponent as ArrowBackIcon } from "../../assets/icons/arrow-back.svg";

import Snacbar from "../../components/snackbar/snackbar";
import { mainApi } from "../../components/utils/main-api";
import CaseItems from "../../components/case-items/case-items";

function ConclusionPage() {
  const params = useParams();

  const [modal, setModal] = useState(false);
  const [id, setId] = useState("");

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

  const getOutput = () => {
    mainApi
      .getOutput(params.conclusion)
      .then((res) => {
        setCostWithdrawalItems(res.cost_withdrawal_of_items);
        setCostWithdrawalItemsRub(res.cost_withdrawal_of_items_in_rub);
        setStatus(res.status);
        setPlayerId(res.player_id);
        setComment(res.comment);
        setRemoved(res.removed);
        setWithdrawalPrice(res.withdrawal_price);
        setActive(res.active);
        setUser(res.user);
        setApprovalUser(res.approval_user);
        setRemoveUser(res.remove_user);
        setOutputItems(res.output_items);
        setId(res.id);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getOutput();
  }, []);
  const saveOutput = () => {
    mainApi
      .createOutput({
        output_items: outputItems,

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
        snackbarActions("Вывод обновлен");
      })
      .catch((error) => {
        snackbarActions("Ошибка обновления вывода");
      });
  };

  const delSelectedItem = (data) => {
    setOutputItems(outputItems.filter((item) => item.item_id !== data.item_id));
  };

  const getStatus = (status) => {
    if (status == "completed") {
      return "Завершенный";
    } else if (status == "proccess") {
      return "В процессе";
    } else if (status == "technical-error") {
      return "Техническая ошибка";
    }
  };

  const approveOutput = () => {
    mainApi
      .approveOutputAction(params.conclusion)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
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
          <h1>Вывод: {id}</h1>
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

            <div
              className="case_img_block_wrapper add_output_items"
              style={{ margin: 0 }}
            >
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
                            // onClick={() => delSelectedItem(item)}
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
                readOnly
                value={costWithdrawalItems}
                onChange={(e) => setCostWithdrawalItems(e.target.value)}
              />
            </div>
            <div className="case_input_temp">
              <div className="case_input_temp_title">
                <p>Стоимость вывода предметов (руб)</p>
              </div>
              <input
                readOnly
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
                readOnly
                type="text"
                value={withdrawalPrice}
                onChange={(e) => setWithdrawalPrice(e.target.value)}
              />
            </div>
            <div className="case_input_temp">
              <p>Статус</p>

              <input readOnly type="text" value={getStatus(status)} />
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
                readOnly
                onChange={(e) => setPlayerId(e.target.value)}
              />
            </div>
            <div className="case_input_temp">
              <div className="case_input_temp_title">
                <p>Комментарии</p>
              </div>
              <input
                type="text"
                readOnly
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </div>

            {/*  */}
            <div className="case_input_temp case_input_temp_checkbox">
              <input
                type="checkbox"
                checked={active}
                // onClick={() => setActive(!active)}
              />{" "}
              <p>Активный</p>
            </div>
            <div className="case_input_temp case_input_temp_checkbox">
              <input
                type="checkbox"
                checked={removed}
                // onClick={() => setRemoved(!active)}
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
                readOnly
                // onChange={(e) => setUser(e.target.value)}
              />
            </div>
            <div className="case_input_temp">
              <div className="case_input_temp_title">
                <p>Одобренные пользователи</p>
              </div>
              <input
                type="text"
                value={approvalUser}
                readOnly
                onChange={(e) => setApprovalUser(e.target.value)}
              />
            </div>
            <div className="case_input_temp">
              <div className="case_input_temp_title">
                <p>Удаленные пользователи</p>
              </div>
              <input
                type="text"
                readOnly
                value={removeUser}
                onChange={(e) => setRemoveUser(e.target.value)}
              />
            </div>
            {status == "proccess" ? (
              <div className="admin_actions case_actions">
                <button className="create_admin_btn" onClick={approveOutput}>
                  Одобрить
                </button>
              </div>
            ) : (
              ""
            )}
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

export default ConclusionPage;
