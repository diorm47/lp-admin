import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { ReactComponent as ArrowBackIcon } from "../../assets/icons/arrow-back.svg";
import "./create-promocode.css";
import { mainApi } from "../../components/utils/main-api";
import Snacbar from "../../components/snackbar/snackbar";

function CreatePromocode() {
  const [promoName, setPromoName] = useState("");
  const [promoCategory, setPromoCategory] = useState("bonus");
  const [depositPercent, setDepositPercent] = useState("");
  const [workingAmount, setWorkingAmount] = useState("");
  const [promoTime, setPromoTime] = useState("1");
  const [activationsAmount, setActivationsAmount] = useState("");

  const [active, setActive] = useState(true);
  const [limitUser, setLimitUser] = useState();
  const [bonusLimit, setBonusLimit] = useState();

  const [isSnackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarText, setSnackbarText] = useState("");
  const snackbarActions = (snackText) => {
    setSnackbarVisible(true);
    setSnackbarText(snackText);
    setTimeout(() => {
      setSnackbarVisible(false);
    }, 2000);
  };

  const savePromo = () => {
    mainApi
      .createPromo({
        name: promoName,
        type: promoCategory,

        active: active,
        summ: workingAmount,
        percent: depositPercent,
        limit_activations: activationsAmount,
        limit_for_user: limitUser,
        bonus_limit: bonusLimit,
        to_date: promoTime,
      })
      .then((res) => {
        snackbarActions("Промокод создан");
      })
      .catch((error) => {
        console.log("error", error);
        snackbarActions("Ошибка создания промокода");
      });
  };

  return (
    <>
      <div className="template_page promocode_page_crud">
        <div className="template_page_title">
          <h1>Создать промокод</h1>
        </div>
        <div className="user_line"></div>
        <NavLink to="/promocodes">
          <div className="back_btn">
            <ArrowBackIcon /> <p>Назад</p>
          </div>
        </NavLink>
        <div className="cases_actions_wrapper">
          <Tabs>
            <TabList>
              <Tab>Главная</Tab>
              <Tab>Промокод для блогера</Tab>
            </TabList>

            <TabPanel>
              <div className="case_tab_content">
                <div className="case_tab_content_title">
                  <p>Информация о промокоде</p>
                </div>
                <div className="case_tab_content_inputs">
                  <div className="case_input_temp">
                    <div
                      className="case_input_temp_title"
                      title="Его необходимо вводить, чтобы получить бонус"
                    >
                      <p>Имя промокода</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M9.99935 1.66089C5.39935 1.66089 1.66602 5.38124 1.66602 9.96524C1.66602 14.5492 5.39935 18.2696 9.99935 18.2696C14.5993 18.2696 18.3327 14.5492 18.3327 9.96524C18.3327 5.38124 14.5993 1.66089 9.99935 1.66089ZM10.8327 14.1174H9.16602V9.13481H10.8327V14.1174ZM10.8327 7.47394H9.16602V5.81307H10.8327V7.47394Z"
                          fill="#A6A6A6"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      value={promoName}
                      onChange={(e) => setPromoName(e.target.value)}
                    />
                  </div>
                </div>

                <div className="case_input_temp case_input_temp_checkbox">
                  <input
                    type="checkbox"
                    checked={active}
                    onClick={() => setActive(!active)}
                  />{" "}
                  <p>Активность</p>
                </div>

                <div className="case_input_temp">
                  <p>Категория промокода</p>

                  <div className="item_color_wrapper promocode_category">
                    <div
                      className={
                        promoCategory == "bonus"
                          ? "item_color_btn item_color_btn_active"
                          : "item_color_btn"
                      }
                      onClick={() => setPromoCategory("bonus")}
                    >
                      <p>Бонус</p>
                    </div>
                    <div
                      className={
                        promoCategory == "balance"
                          ? "item_color_btn item_color_btn_active"
                          : "item_color_btn"
                      }
                      onClick={() => setPromoCategory("balance")}
                    >
                      <p>Баланс</p>
                    </div>
                  </div>
                </div>
                <div className="case_tab_content_title">
                  <p>Бонус</p>
                </div>
                <div className="case_input_temp">
                  <div
                    className="case_input_temp_title"
                    title="Бонус на счет юзера при пополнении"
                  >
                    <p>Какой % прибавляется при депозите?</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M9.99935 1.66089C5.39935 1.66089 1.66602 5.38124 1.66602 9.96524C1.66602 14.5492 5.39935 18.2696 9.99935 18.2696C14.5993 18.2696 18.3327 14.5492 18.3327 9.96524C18.3327 5.38124 14.5993 1.66089 9.99935 1.66089ZM10.8327 14.1174H9.16602V9.13481H10.8327V14.1174ZM10.8327 7.47394H9.16602V5.81307H10.8327V7.47394Z"
                        fill="#A6A6A6"
                      />
                    </svg>
                  </div>

                  <input
                    type="text"
                    value={depositPercent}
                    onChange={(e) => setDepositPercent(e.target.value)}
                  />
                </div>
                <div className="case_input_temp">
                  <div
                    className="case_input_temp_title"
                    title="Условия промокода"
                  >
                    <p>От какой суммы пополнения работает промокод?</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M9.99935 1.66089C5.39935 1.66089 1.66602 5.38124 1.66602 9.96524C1.66602 14.5492 5.39935 18.2696 9.99935 18.2696C14.5993 18.2696 18.3327 14.5492 18.3327 9.96524C18.3327 5.38124 14.5993 1.66089 9.99935 1.66089ZM10.8327 14.1174H9.16602V9.13481H10.8327V14.1174ZM10.8327 7.47394H9.16602V5.81307H10.8327V7.47394Z"
                        fill="#A6A6A6"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    value={workingAmount}
                    onChange={(e) => setWorkingAmount(e.target.value)}
                  />
                </div>
                <div className="case_tab_content_title">
                  <p>Ограничения</p>
                </div>
                <div className="case_input_temp ">
                  <p>Время действия</p>
                  <input
                    type="date"
                    value={promoTime}
                    onChange={(e) => setPromoTime(e.target.value)}
                  />
                </div>
                <div className="case_input_temp">
                  <p>Введите количество активаций купона</p>
                  <input
                    type="text"
                    value={activationsAmount}
                    onChange={(e) => setActivationsAmount(e.target.value)}
                  />
                </div>
                <div className="case_input_temp">
                  <p>Лимит для пользователя</p>
                  <input
                    type="text"
                    value={limitUser}
                    onChange={(e) => setLimitUser(e.target.value)}
                  />
                </div>
                <div className="case_input_temp">
                  <p>Лимит бонуса</p>
                  <input
                    type="text"
                    value={bonusLimit}
                    onChange={(e) => setBonusLimit(e.target.value)}
                  />
                </div>

                <div className="admin_actions case_actions">
                  <button className="create_admin_btn" onClick={savePromo}>
                    Сохранить
                  </button>
                  <NavLink to="/promocodes">
                    <button className="undo_create">Отменить</button>
                  </NavLink>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="case_tab_content">
                <div className="case_tab_content_title">
                  <p>Промокод для блогера</p>
                </div>
                <div className="case_tab_content_inputs">
                  <div className="case_input_temp">
                    <div
                      className="case_input_temp_title"
                      title="Какой процент от дохода получает реферал?"
                    >
                      <p>Процент от продаж</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M9.99935 1.66089C5.39935 1.66089 1.66602 5.38124 1.66602 9.96524C1.66602 14.5492 5.39935 18.2696 9.99935 18.2696C14.5993 18.2696 18.3327 14.5492 18.3327 9.96524C18.3327 5.38124 14.5993 1.66089 9.99935 1.66089ZM10.8327 14.1174H9.16602V9.13481H10.8327V14.1174ZM10.8327 7.47394H9.16602V5.81307H10.8327V7.47394Z"
                          fill="#A6A6A6"
                        />
                      </svg>
                    </div>

                    <input type="text" />
                  </div>
                </div>
                <div className="case_tab_content_title">
                  <p>Реферал</p>
                </div>
                <div className="case_input_temp">
                  <div className="case_input_temp_title">
                    <p>Email реферала </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M9.99935 1.66089C5.39935 1.66089 1.66602 5.38124 1.66602 9.96524C1.66602 14.5492 5.39935 18.2696 9.99935 18.2696C14.5993 18.2696 18.3327 14.5492 18.3327 9.96524C18.3327 5.38124 14.5993 1.66089 9.99935 1.66089ZM10.8327 14.1174H9.16602V9.13481H10.8327V14.1174ZM10.8327 7.47394H9.16602V5.81307H10.8327V7.47394Z"
                        fill="#A6A6A6"
                      />
                    </svg>
                  </div>
                  <input type="text" />
                </div>
                <div className="case_input_temp">
                  <p>Кошелек для выплаты </p>
                  <input type="text" />
                </div>
                <div className="admin_actions case_actions">
                  <button className="create_admin_btn">Сохранить</button>
                  <button className="undo_create">Отменить</button>
                </div>
              </div>
            </TabPanel>
          </Tabs>
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

export default CreatePromocode;
