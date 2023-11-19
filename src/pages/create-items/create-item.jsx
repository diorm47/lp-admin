import React from "react";
import "./create-item.css";
import { ReactComponent as ArrowBackIcon } from "../../assets/icons/arrow-back.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function CreateItem() {
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemPriceCrystals, setItemPriceCrystals] = useState("");

  const [itemCategoryId, setItemCategoryId] = useState("");
  const [itemImagesS, setItemImageS] = useState();
  const [itemImages, setItemImage] = useState();
  const [itemColor, setItemColor] = useState();
  const categories = [
    {
      category_id: "qwes",
      name: "asdfasdf",
    },
    {
      category_id: "qwes",
      name: "asdfasdf",
    },
    {
      category_id: "qwes",
      name: "asdfasdf",
    },
  ];

  const saveImage = (e) => {
    const file = e.target.files[0];
    setItemImageS(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setItemImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const saveItem = () => {
    let headersList = {
      Accept: "*/*",
    };

    let bodyContent = new FormData();
    bodyContent.append("name", itemName);
    bodyContent.append("cost", itemPrice);
    bodyContent.append("color", itemColor);
    bodyContent.append("gem_cost", itemPriceCrystals);
    bodyContent.append("image", itemImagesS);

    fetch("https://legadrop.org/admin/item", {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    })
      .then(() => {})
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="template_page create_item_page">
      <div className="template_page_title">
        <h1>Создать предмет</h1>
      </div>
      <div className="user_line"></div>
      <NavLink to="/items">
        <div className="back_btn">
          <ArrowBackIcon /> <p>Назад</p>
        </div>
      </NavLink>
      <div className="create_item_wrapper">
        <h2>Информация о предемете</h2>

        <div className="case_tab_content_inputs">
          <div className="case_input_temp">
            <p>Название предмета</p>
            <input
              type="text"
              placeholder="Введите название товара"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
            />
          </div>

          <div className="case_input_temp">
            <p>Категория предмета</p>
            <select onChange={(e) => setItemCategoryId(e.target.value)}>
              {categories && categories[0]
                ? categories.map((categories) => (
                    <option
                      key={categories.category_id}
                      value={categories.category_id}
                    >
                      {categories.name}
                    </option>
                  ))
                : ""}
            </select>
          </div>
        </div>
        <h2>Цена</h2>
        <div className="case_tab_content_inputs">
          <div className="case_input_temp">
            <p>Цена в рублях</p>
            <input
              type="text"
              placeholder="Введите цену"
              value={itemPrice}
              onChange={(e) => setItemPrice(e.target.value)}
            />
          </div>
          <div className="case_input_temp">
            <p>Цена в кристаллах</p>
            <input
              type="text"
              placeholder="Введите цену в кристаллах"
              value={itemPriceCrystals}
              onChange={(e) => setItemPriceCrystals(e.target.value)}
            />
          </div>
        </div>
        <h2>Цвет предмета</h2>

        <div className="case_input_temp">
          <p>Цвета предмета (Синий, Красный, Золотой)</p>
          <div className="item_color_wrapper">
            <div
              className={
                itemColor == "blue"
                  ? "item_color_btn item_color_btn_active"
                  : "item_color_btn"
              }
              onClick={() => setItemColor("blue")}
            >
              <div></div>
              <p>Синий</p>
            </div>
            <div
              className={
                itemColor == "red"
                  ? "item_color_btn item_color_btn_active"
                  : "item_color_btn"
              }
              onClick={() => setItemColor("red")}
            >
              <div></div>
              <p>Красный</p>
            </div>
            <div
              className={
                itemColor == "gold"
                  ? "item_color_btn item_color_btn_active"
                  : "item_color_btn"
              }
              onClick={() => setItemColor("gold")}
            >
              <div></div>
              <p>Золотой</p>
            </div>
          </div>
        </div>
        <h2>Картинка товара</h2>
        <div className="case_img_block_wrapper item_image">
          <div className="case_img_block">
            {itemImages ? (
              <div className="case_img_item" title="удалить">
                <img src={itemImages} alt="" />
              </div>
            ) : (
              ""
            )}

            <label htmlFor="upload_img_btn">
              <div className="case_img_item case_img_add_block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M18.5 7.5V10.49C18.5 10.49 16.51 10.5 16.5 10.49V7.5H13.5C13.5 7.5 13.51 5.51 13.5 5.5H16.5V2.5H18.5V5.5H21.5V7.5H18.5ZM15.5 11.5V8.5H12.5V5.5H4.5C3.4 5.5 2.5 6.4 2.5 7.5V19.5C2.5 20.6 3.4 21.5 4.5 21.5H16.5C17.6 21.5 18.5 20.6 18.5 19.5V11.5H15.5ZM4.5 19.5L7.5 15.5L9.5 18.5L12.5 14.5L16.5 19.5H4.5Z"
                    fill="#2A72AC"
                  />
                </svg>
                <p>Изменить фото</p>
              </div>
            </label>

            <input
              type="file"
              accept="image/*"
              id="upload_img_btn"
              className="upload_img_input"
              placeholder="Surat tanlang"
              onChange={saveImage}
            />
          </div>
          <span>Выберите с компьютера или перетащите в эту область</span>
        </div>
        <button className="main_btn save_cat_btn" onClick={saveItem}>
          Сохранить предмет
        </button>
      </div>
    </div>
  );
}

export default CreateItem;
