import React from "react";
import "./case-category.css";
import { InputWithLabel } from "../../components/utils/utils";
import { useState } from "react";
import { ReactComponent as ArrowBackIcon } from "../../assets/icons/arrow-back.svg";
import { NavLink } from "react-router-dom";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-icon.svg";


function CaseCategory() {
  const [value, setValue] = useState("");
  return (
    <div className="template_page category_page">
      <div className="template_page_title">
        <h1>Категории кейса</h1>
        <div className="users_search">
          <SearchIcon />
          <input type="text" placeholder="Поиск" />
        </div>
      </div>
      <div className="user_line"></div>
      <NavLink to="/cases">
        <div className="back_btn">
          <ArrowBackIcon /> <p>Назад</p>
        </div>
      </NavLink>
      <div className="categories_page">
        <div className="add_employe_input add_category_input">
          <InputWithLabel
            id="case_category"
            label="Категория"
            value={value}
            event={setValue}
          />
        </div>
        <button className="main_btn save_cat_btn">Сохранить</button>
      </div>
    </div>
  );
}

export default CaseCategory;
