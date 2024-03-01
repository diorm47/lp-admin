import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ReactComponent as ArrowBackIcon } from "../../assets/icons/arrow-back.svg";
import { mainApi } from "../../components/utils/main-api";
import Snacbar from "../../components/snackbar/snackbar";

function CreateRarity() {
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [color, setColor] = useState("#000000");
  const [isSnackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarText, setSnackbarText] = useState("");
  const snackbarActions = (snackText) => {
    setSnackbarVisible(true);
    setSnackbarText(snackText);
    setTimeout(() => {
      setSnackbarVisible(false);
    }, 2000);
  };
  const handleChange = (event) => {
    setColor(event.target.value);
  };
  const saveCategory = () => {
    mainApi
      .saveRarity({
        name: name,
        rarity_color: color,
      })
      .then((res) => {
        snackbarActions("Категория создана");
        setTimeout(() => {
          navigate('/rarity')
        }, 1500)
       
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

      <div className="template_page create_item_page">
        <div className="template_page_title">
          <h1>Создать категорию</h1>
        </div>
        <div className="user_line"></div>

        <NavLink to="/rarity">
          <div className="back_btn">
            <ArrowBackIcon /> <p>Назад</p>
          </div>
        </NavLink>
        <div className="create_item_wrapper">
          <h2>Информация о категории</h2>

          <div className="case_tab_content_inputs">
            <div className="case_input_temp">
              <p>Название категории</p>
              <input
                type="text"
                placeholder="Введите название"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          <div className="case_tab_content_inputs">
            <div className="case_input_temp category_color_input">
              <p>Цвет категории</p>
              <input type="color" value={color} onChange={handleChange} />
            </div>
          </div>

          <button
            className="main_btn save_cat_btn main_btn_template_green"
            onClick={saveCategory}
          >
            Сохранить
          </button>
        </div>
      </div>
    </>
  );
}

export default CreateRarity;
