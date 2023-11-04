import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { ReactComponent as ArrowBackIcon } from "../../assets/icons/arrow-back.svg";
import "./create-promocode.css";

function EditPromocode() {
  const [promoName, setPromoName] = useState("Кристаллик");
  const [promoCategory, setPromoCategory] = useState("percent");
  const [depositPercent, setDepositPercent] = useState("40");
  const [workingAmount, setWorkingAmount] = useState("100");
  const [promoTime, setPromoTime] = useState("1");
  const [activationsAmount, setActivationsAmount] = useState("200");

  return (
    <>
      <div className="template_page promocode_page_crud">
        <div className="template_page_title">
          <h1>Редактировать промокод</h1>
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
                <div className="case_input_temp">
                  <p>Категория промокода</p>

                  <div className="item_color_wrapper promocode_category">
                    <div
                      className={
                        promoCategory == "percent"
                          ? "item_color_btn item_color_btn_active"
                          : "item_color_btn"
                      }
                      onClick={() => setPromoCategory("percent")}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M7.49805 11.0022C9.42805 11.0022 10.998 9.43217 10.998 7.50217C10.998 5.57217 9.42805 4.00217 7.49805 4.00217C5.56805 4.00217 3.99805 5.57217 3.99805 7.50217C3.99805 9.43217 5.56805 11.0022 7.49805 11.0022ZM7.49805 6.00217C8.32805 6.00217 8.99805 6.67217 8.99805 7.50217C8.99805 8.33217 8.32805 9.00217 7.49805 9.00217C6.66805 9.00217 5.99805 8.33217 5.99805 7.50217C5.99805 6.67217 6.66805 6.00217 7.49805 6.00217Z"
                          fill="#737373"
                        />
                        <path
                          d="M18.588 3.9978L4.00055 18.5853L5.41475 19.9995L20.0022 5.412L18.588 3.9978Z"
                          fill="#737373"
                        />
                        <path
                          d="M16.498 13.0022C14.568 13.0022 12.998 14.5722 12.998 16.5022C12.998 18.4322 14.568 20.0022 16.498 20.0022C18.428 20.0022 19.998 18.4322 19.998 16.5022C19.998 14.5722 18.428 13.0022 16.498 13.0022ZM16.498 18.0022C15.668 18.0022 14.998 17.3322 14.998 16.5022C14.998 15.6722 15.668 15.0022 16.498 15.0022C17.328 15.0022 17.998 15.6722 17.998 16.5022C17.998 17.3322 17.328 18.0022 16.498 18.0022Z"
                          fill="#737373"
                        />
                      </svg>
                      <p>Бонус % к пополнению</p>
                    </div>
                    <div
                      className={
                        promoCategory == "money"
                          ? "item_color_btn item_color_btn_active"
                          : "item_color_btn"
                      }
                      onClick={() => setPromoCategory("money")}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M13.5 3H7V12H5V14H7V16H5V18H7V21H9V18H13V16H9V14H13.5C16.54 14 19 11.54 19 8.5C19 5.46 16.54 3 13.5 3ZM13.5 12H9V5H13.5C15.43 5 17 6.57 17 8.5C17 10.43 15.43 12 13.5 12Z"
                          fill="#737373"
                        />
                      </svg>
                      <p>Бонус ₽ к пополнению</p>
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
                <div className="case_input_temp promocodes_time">
                  <p>Время действия</p>

                  <div className="item_color_wrapper">
                    <div
                      className={
                        promoTime == "1"
                          ? "item_color_btn item_color_btn_active"
                          : "item_color_btn"
                      }
                      onClick={() => setPromoTime("1")}
                    >
                      <p>Кол-во активаций</p>
                    </div>
                    <div
                      className={
                        promoTime == "2"
                          ? "item_color_btn item_color_btn_active"
                          : "item_color_btn"
                      }
                      onClick={() => setPromoTime("2")}
                    >
                      <p>До даты</p>
                    </div>
                    <div
                      className={
                        promoTime == "3"
                          ? "item_color_btn item_color_btn_active"
                          : "item_color_btn"
                      }
                      onClick={() => setPromoTime("3")}
                    >
                      <p>Одноразовый</p>
                    </div>
                    <div
                      className={
                        promoTime == "4"
                          ? "item_color_btn item_color_btn_active"
                          : "item_color_btn"
                      }
                      onClick={() => setPromoTime("4")}
                    >
                      <p>Многоразовый до удаления</p>
                    </div>
                  </div>
                </div>
                <div className="case_input_temp">
                  <p>Введите количество активаций купона</p>
                  <input
                    type="text"
                    value={activationsAmount}
                    onChange={(e) => setActivationsAmount(e.target.value)}
                  />
                </div>

                <div class="admin_actions case_actions">
                  <button class="create_admin_btn">Сохранить</button>
                  <button class="undo_create">Отменить</button>
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
                <div class="admin_actions case_actions">
                  <button class="create_admin_btn">Сохранить</button>
                  <button class="undo_create">Отменить</button>
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </>
  );
}

export default EditPromocode;
