import React, { useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { ReactComponent as ArrowBackIcon } from "../../assets/icons/arrow-back.svg";
import { mainApi } from "../../components/utils/main-api";
import { useEffect } from "react";

function UpdateRarity() {
  const navigate = useNavigate();

  const [updatingItem, setUpdatingItem] = useState({});
  const [name, setName] = useState();
  const [percent, setPercent] = useState();
  const [category_id, setCategory_id] = useState();
  const params = useParams();

  useEffect(() => {
    mainApi
      .getRarity()
      .then((res) => {
        setUpdatingItem(
          res.find((rarity) => rarity.category_id === params.item)
        );
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);
  useEffect(() => {
    if (updatingItem) {
      setName(updatingItem.name);
      setPercent(updatingItem.category_percent);
      setCategory_id(updatingItem.category_id);
    }
  }, [updatingItem]);

  const updateCategory = () => {
    mainApi
      .updateRarity({
        rarity_id: category_id,
        category_percent: String(percent),
        name: name,
      })
      .then((res) => {
        console.log(res);
        navigate("/rarity");
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  return (
    <div className="template_page create_item_page">
      <div className="template_page_title">
        <h1>Обновить категорию</h1>
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
          <div className="case_input_temp">
            <p>Процент категории</p>
            <input
              type="text"
              placeholder="Введите процент"
              value={percent}
              onChange={(e) => setPercent(e.target.value)}
            />
          </div>
        </div>

        <button
          className="main_btn save_cat_btn main_btn_template_green"
          onClick={updateCategory}
        >
          Сохранить изменений
        </button>
      </div>
    </div>
  );
}

export default UpdateRarity;
