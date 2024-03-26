import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as ArrowBackIcon } from "../../assets/icons/arrow-back.svg";

import "react-calendar/dist/Calendar.css";
import Select from "react-select";
import CaseItems from "../../components/case-items/case-items";
import Snacbar from "../../components/snackbar/snackbar";
import { mainApi } from "../../components/utils/main-api";

function CreateCompetitons() {
  const [modal, setModal] = useState(false);
  const [isSnackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarText, setSnackbarText] = useState("");
  const snackbarActions = (snackText) => {
    setSnackbarVisible(true);
    setSnackbarText(snackText);
    setTimeout(() => {
      setSnackbarVisible(false);
    }, 2000);
  };
  const closeModal = () => {
    setModal(false);
  };
  const [items, setItems] = useState([]);
  const [conditionsList, setConditionsList] = useState();
  const [selectesConditions, setSelectesConditions] = useState([]);
  const [time, setTime] = useState();
  const [name, setName] = useState("");
  const [priceID, setPriceID] = useState("");
  const [active, setActive] = useState(true);
  const [oneTime, setOneTime] = useState(true);

  const createContest = () => {
    mainApi
      .createContestAction({
        name: name,
        timer: time,
        active: active,
        one_time: oneTime,
        item_ids: items.map((item) => item.item_id),
        current_award_id: priceID,
        condition_ids: selectesConditions.map((item) => item.value),
      })
      .then((res) => {
        snackbarActions("Конкурс создан");
      })
      .catch((error) => {
        console.log("error", error);
        snackbarActions("Ошибка создания конкурса");
      });
  };

  const getConditons = () => {
    mainApi
      .getConditions()
      .then((res) => {
        setConditionsList(
          res.results.map((condition) => ({
            value: condition.condition_id,
            label: condition.name,
          }))
        );
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  useEffect(() => {
    getConditons();
  }, []);
  const delSelectedItem = (data) => {
    setItems(items.filter((item) => item.item_id !== data.item_id));
  };
  useEffect(() => {
    if (items[0]) {
      setPriceID(items[0].item_id);
    }
  }, [items]);

  return (
    <>
      {isSnackbarVisible ? (
        <Snacbar visible={isSnackbarVisible} text={snackbarText} />
      ) : (
        ""
      )}
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
              <input
                type="text"
                placeholder="Введите название конкурса"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="user_checkboxes contest_conds">
            <div className="user_checkbox">
              <p>Активный:</p>
              <input
                type="checkbox"
                checked={active}
                onChange={(e) => setActive(e.target.checked)}
              />
            </div>
            <div className="user_checkbox">
              <p>Одноразовый:</p>
              <input
                type="checkbox"
                checked={oneTime}
                onChange={(e) => setOneTime(e.target.checked)}
              />
            </div>
          </div>

          <h3>Призы </h3>
          <h4 className="comp_item_prize_title">Выберите предметы призы</h4>
          <div className="case_img_block_wrapper">
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

            {items && items.length ? (
              <>
                <br />
                <h4 className="comp_item_prize_title">Выбранные предметы</h4>
                <div className="case_items_list">
                  {items && items.length
                    ? items.map((item) => (
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
            <p>ID приза</p>
            <input
              type="text"
              placeholder="Введите ID приза конкурса"
              value={priceID}
              onChange={(e) => setPriceID(e.target.value)}
            />
          </div>
          <h3>Условия конкурса</h3>
          <div className="conditions_select">
            <Select
              isMulti
              options={conditionsList}
              className="conditions_select_box"
              onChange={setSelectesConditions}
              value={selectesConditions}
              placeholder={<div>Выбор условий</div>}
            />
          </div>
          <h2 className="create_competition_wrapper_block_title">Таймер</h2>

          <div className="case_tab_content_inputs">
            <div className="case_input_temp calendar_comp_input_block">
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
            {/* <div className="case_input_temp calendar_comp_input_block">
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
            </div> */}
          </div>

          <div className="admin_actions case_actions">
            <button
              className="create_admin_btn main_btn_template_green"
              onClick={createContest}
            >
              Создать
            </button>
            <NavLink to="/competitons">
              <button className="undo_create main_btn_template_border">
                Отменить
              </button>
            </NavLink>
          </div>
        </div>
      </div>

      {modal ? <div className="modal_overlay" onClick={closeModal}></div> : ""}
      {modal ? (
        <CaseItems
          setModal={setModal}
          setCaseItems={setItems}
          caseItems={items}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default CreateCompetitons;
