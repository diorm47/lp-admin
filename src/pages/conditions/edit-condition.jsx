import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import "./conditions.css";
import { ReactComponent as ArrowBackIcon } from "../../assets/icons/arrow-back.svg";
import { mainApi } from "../../components/utils/main-api";
import Snacbar from "../../components/snackbar/snackbar";

function EditCondion() {
  const params = useParams();
  const [id, setId] = useState();

  const [name, setName] = useState();
  const [desc, setDesc] = useState();
  const [condType, setCondType] = useState();
  const [price, setPrice] = useState();
  const [time, setTime] = useState();
  const [timeReboot, setTimeReboot] = useState();
  const type = [
    {
      type: "calc",
      name: "Начисление",
    },
    {
      type: "time",
      name: "Время",
    },
  ];

  const [isSnackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarText, setSnackbarText] = useState("");
  const snackbarActions = (snackText) => {
    setSnackbarVisible(true);
    setSnackbarText(snackText);
    setTimeout(() => {
      setSnackbarVisible(false);
    }, 2000);
  };

  const getCondition = () => {
    mainApi
      .getConditionAction(params.item)
      .then((res) => {
        setId(res.condition_id);
        setName(res.name);
        setDesc(res.description);
        setCondType(res.type_condition);
        setPrice(res.price);
        setTime(res.time);
        setTimeReboot(res.time_reboot);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  useEffect(() => {
    getCondition();
  }, []);

  const saveCondition = () => {
    mainApi
      .updateCondition(
        {
          name: name,
          description: desc,
          type_condition: condType,
          price: price,
          time: time,
          time_reboot: timeReboot,
        },
        id
      )
      .then((res) => {
        snackbarActions("Условие обновлена!");
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  return (
    <>
      {isSnackbarVisible ? (
        <Snacbar visible={isSnackbarVisible} text={snackbarText} />
      ) : (
        ""
      )}

      <div className="template_page category_page">
        <div className="template_page_title">
          <h1>Редактировать условие</h1>
        </div>
        <div className="user_line"></div>
        <NavLink to="/conditions">
          <div className="back_btn">
            <ArrowBackIcon /> <p>Назад</p>
          </div>
        </NavLink>
        <div className="conditions_wrapper">
          <div className="condition_input">
            <p>Название</p>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="condition_input">
            <p>Описание</p>
            <textarea
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
          </div>
          <div className="case_input_temp">
            <p>Тип предмета</p>
            <select
              onChange={(e) => setCondType(e.target.value)}
              value={condType}
            >
              {type
                ? type.map((categories, index) => (
                    <option key={index} value={categories.type}>
                      {categories.name}
                    </option>
                  ))
                : ""}
            </select>
          </div>
          <div className="condition_input">
            <p>Цена</p>
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="condition_input">
            <p>Время</p>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
          <div className="condition_input">
            <p>Время перезагрузки</p>
            <input
              type="time"
              value={timeReboot}
              onChange={(e) => setTimeReboot(e.target.value)}
            />
          </div>

          <div className="admin_actions case_actions">
            <button
              className="create_admin_btn main_btn_template_green"
              onClick={saveCondition}
            >
              Сохранить
            </button>

            <NavLink to="/conditions">
              <button className="undo_create main_btn_template_border">
                Отменить
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditCondion;
