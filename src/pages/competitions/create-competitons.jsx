import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as ArrowBackIcon } from "../../assets/icons/arrow-back.svg";
import { ReactComponent as SelectedIcon } from "../../assets/icons/selected-icon.svg";
import { ReactComponent as CalendarIcon } from "../../assets/icons/calendar-icon.svg";
import CaseItems from "./case-items";
import itemImg from "../../assets/images/comp-item.png";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function CreateCompetitons() {
  const [topup, setTopup] = useState(false);
  const [tgchanel, setTgchanel] = useState(false);
  const [vkchanel, setVkchanel] = useState(false);

  const [modal, setModal] = useState(false);
  const closeModal = () => {
    setModal(false);
  };
  const [items, setItems] = useState([]);
  const [value, onChange] = useState(new Date());
  const [visibleCalendar, setVisibleCalendar] = useState(false);
  const formatDate = (date) => {
    return date.toLocaleDateString("ru-RU", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  return (
    <>
      <div className="template_page create_item_page">
        <div className="template_page_title">
          <h1>Создать конкурс</h1>
        </div>
        <div className="user_line"></div>

        <NavLink to="/competitons">
          <div className="back_btn">
            <ArrowBackIcon /> <p>Назад</p>
          </div>
        </NavLink>
        <div className="create_item_wrapper create_competition_wrapper">
          <h2 className="create_competition_wrapper_block_title">
            Информация о конкурсе
          </h2>
          <div className="case_tab_content_inputs">
            <div className="case_input_temp">
              <p>Название конкурса</p>
              <input type="text" placeholder="Введите название конкурса" />
            </div>
          </div>

          <h3>Призы и победители</h3>
          <div className="case_tab_content_inputs">
            <div className="case_input_temp">
              <div className="validated_input_title">
                <p>Сколько будет победителей?</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M10.0013 1.66666C5.4013 1.66666 1.66797 5.39999 1.66797 9.99999C1.66797 14.6 5.4013 18.3333 10.0013 18.3333C14.6013 18.3333 18.3346 14.6 18.3346 9.99999C18.3346 5.39999 14.6013 1.66666 10.0013 1.66666ZM10.8346 14.1667H9.16797V9.16666H10.8346V14.1667ZM10.8346 7.49999H9.16797V5.83332H10.8346V7.49999Z"
                    fill="#A6A6A6"
                  />
                </svg>
              </div>
              <input type="text" placeholder="Введите количество победителей" />
            </div>
          </div>

          <h4 className="comp_item_prize_title">Выберите предметы призы</h4>
          <div className="case_img_block_wrapper item_image add_item_competition">
            <div className="case_img_block">
              {items
                ? items.map((item, index) => (
                    <div className="case_img_item competition_item" key={index}>
                      <img src={itemImg} alt="" />
                      <p>{item.name}</p>
                    </div>
                  ))
                : ""}

              <label htmlFor="upload_img_btn" onClick={() => setModal(true)}>
                <div className="case_img_item case_img_add_block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M11.9219 9.5H13.9219V6.5H16.9219V4.5H13.9219V1.5H11.9219V4.5H8.92188V6.5H11.9219V9.5ZM7.92188 18.5C6.82188 18.5 5.93188 19.4 5.93188 20.5C5.93188 21.6 6.82188 22.5 7.92188 22.5C9.02187 22.5 9.92188 21.6 9.92188 20.5C9.92188 19.4 9.02187 18.5 7.92188 18.5ZM17.9219 18.5C16.8219 18.5 15.9319 19.4 15.9319 20.5C15.9319 21.6 16.8219 22.5 17.9219 22.5C19.0219 22.5 19.9219 21.6 19.9219 20.5C19.9219 19.4 19.0219 18.5 17.9219 18.5ZM8.09188 15.25L8.12187 15.13L9.02188 13.5H16.4719C17.2219 13.5 17.8819 13.09 18.2219 12.47L22.0819 5.46L20.3419 4.5H20.3319L19.2319 6.5L16.4719 11.5H9.45187L9.32187 11.23L7.08187 6.5L6.13188 4.5L5.19187 2.5H1.92188V4.5H3.92188L7.52187 12.09L6.17188 14.54C6.01188 14.82 5.92188 15.15 5.92188 15.5C5.92188 16.6 6.82188 17.5 7.92188 17.5H19.9219V15.5H8.34188C8.21187 15.5 8.09188 15.39 8.09188 15.25Z"
                      fill="#2A72AC"
                    />
                  </svg>
                  <p>Выбрать предм.</p>
                </div>
              </label>
            </div>
            <span>Выберите из существующих предметов</span>
          </div>

          <h3>Условия конкурса</h3>
          <div className="competition_conditions_block">
            <div className="comp_condition_enable">
              <div className="select_all">
                <div className="is_selected">
                  {topup ? (
                    <SelectedIcon onClick={() => setTopup(!topup)} />
                  ) : (
                    <div
                      className="not_selected_item"
                      onClick={() => setTopup(!topup)}
                    ></div>
                  )}
                </div>{" "}
                <p> Пополнение от какой-то суммы</p>
              </div>
            </div>
            {topup ? (
              <div className="case_tab_content_inputs">
                <div className="case_input_temp">
                  <div className="validated_input_title">
                    <p>От какой суммы?</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M10.0013 1.66666C5.4013 1.66666 1.66797 5.39999 1.66797 9.99999C1.66797 14.6 5.4013 18.3333 10.0013 18.3333C14.6013 18.3333 18.3346 14.6 18.3346 9.99999C18.3346 5.39999 14.6013 1.66666 10.0013 1.66666ZM10.8346 14.1667H9.16797V9.16666H10.8346V14.1667ZM10.8346 7.49999H9.16797V5.83332H10.8346V7.49999Z"
                        fill="#A6A6A6"
                      />
                    </svg>
                  </div>
                  <input type="text" placeholder="Введите сумму" />
                </div>
              </div>
            ) : (
              ""
            )}
            <div className="comp_condition_enable">
              <div className="select_all">
                <div className="is_selected">
                  {tgchanel ? (
                    <SelectedIcon onClick={() => setTgchanel(!tgchanel)} />
                  ) : (
                    <div
                      className="not_selected_item"
                      onClick={() => setTgchanel(!tgchanel)}
                    ></div>
                  )}
                </div>{" "}
                <p> Подписка на Telegram канал</p>
              </div>
            </div>
            {tgchanel ? (
              <div className="case_tab_content_inputs">
                <div className="case_input_temp">
                  <div className="validated_input_title">
                    <p>Введите ссылку</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M10.0013 1.66666C5.4013 1.66666 1.66797 5.39999 1.66797 9.99999C1.66797 14.6 5.4013 18.3333 10.0013 18.3333C14.6013 18.3333 18.3346 14.6 18.3346 9.99999C18.3346 5.39999 14.6013 1.66666 10.0013 1.66666ZM10.8346 14.1667H9.16797V9.16666H10.8346V14.1667ZM10.8346 7.49999H9.16797V5.83332H10.8346V7.49999Z"
                        fill="#A6A6A6"
                      />
                    </svg>
                  </div>
                  <input type="text" placeholder="Введите ссылку канала" />
                </div>
              </div>
            ) : (
              ""
            )}
            <div className="comp_condition_enable">
              <div className="select_all">
                <div className="is_selected">
                  {vkchanel ? (
                    <SelectedIcon onClick={() => setVkchanel(!vkchanel)} />
                  ) : (
                    <div
                      className="not_selected_item"
                      onClick={() => setVkchanel(!vkchanel)}
                    ></div>
                  )}
                </div>{" "}
                <p> Подписка на группу VK</p>
              </div>
            </div>
            {vkchanel ? (
              <div className="case_tab_content_inputs">
                <div className="case_input_temp mb0">
                  <div className="validated_input_title">
                    <p>Введите ссылку</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M10.0013 1.66666C5.4013 1.66666 1.66797 5.39999 1.66797 9.99999C1.66797 14.6 5.4013 18.3333 10.0013 18.3333C14.6013 18.3333 18.3346 14.6 18.3346 9.99999C18.3346 5.39999 14.6013 1.66666 10.0013 1.66666ZM10.8346 14.1667H9.16797V9.16666H10.8346V14.1667ZM10.8346 7.49999H9.16797V5.83332H10.8346V7.49999Z"
                        fill="#A6A6A6"
                      />
                    </svg>
                  </div>
                  <input type="text" placeholder="Введите ссылку группы" />
                </div>
              </div>
            ) : (
              ""
            )}{" "}
          </div>
          <h2 className="create_competition_wrapper_block_title">
            Дата завершения розыгрыша
          </h2>

          <div className="case_tab_content_inputs">
            <div className="case_input_temp calendar_comp_input_block">
              <p>Введите дату окончания розыгрыша</p>
              <input
                disabled
                type="text"
                value={formatDate(value)}
                placeholder="00.00.0000"
              />
              <CalendarIcon
                className="calendar_comp_icon"
                onClick={() => setVisibleCalendar(!visibleCalendar)}
              />
              {visibleCalendar ? (
                <div className="comp_calendar">
                  <Calendar onChange={onChange} value={value} />
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div class="admin_actions case_actions">
            <button class="create_admin_btn main_btn_template_green">
              Создать
            </button>
            <button class="undo_create main_btn_template_border">
              Отменить
            </button>
          </div>
        </div>
      </div>

      {modal ? <div className="modal_overlay" onClick={closeModal}></div> : ""}
      {modal ? <CaseItems setItems={setItems} setModal={setModal} /> : ""}
    </>
  );
}

export default CreateCompetitons;
