import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as ArrowBackIcon } from "../../assets/icons/arrow-back.svg";
import "./create-case.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";

function CreateCase() {
  const [caseImages, setCaseImages] = useState([]);
  const saveImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setCaseImages((prevImages) => [...prevImages, reader.result]);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const handleImageClick = (imageToRemove) => {
    const newImages = caseImages.filter((image) => image !== imageToRemove);
    setCaseImages(newImages);
  };

  return (
    <div className="template_page category_page">
      <div className="template_page_title">
        <h1>Добавить кейс</h1>
      </div>
      <div className="user_line"></div>
      <NavLink to="/cases">
        <div className="back_btn">
          <ArrowBackIcon /> <p>Назад</p>
        </div>
      </NavLink>
      <div className="cases_actions_wrapper">
        <Tabs>
          <TabList>
            <Tab>Главная</Tab>
            <Tab>Цены</Tab>
            <Tab>История покупок</Tab>
            <Tab>Предметы</Tab>
          </TabList>

          <TabPanel>
            <div className="case_tab_content">
              <div className="case_tab_content_title">
                <p>Информация о кейсе</p>
              </div>
              <div className="case_tab_content_inputs">
                <div className="case_input_temp">
                  <p>Название товара</p>
                  <input type="text" />
                </div>
                <div className="case_input_temp">
                  <p>Название товара (Eng)</p>
                  <input type="text" />
                </div>
                <div className="case_input_temp">
                  <p>Категория товара</p>
                  <select>
                    <option value="">От блогеров</option>
                    <option value="">От блогеров</option>
                    <option value="">От блогеров</option>
                  </select>
                </div>
              </div>
              <div className="case_tab_content_title">
                <p>Картинка товара</p>
              </div>
              <div className="case_img_block_wrapper">
                <div className="case_img_block">
                  {caseImages
                    ? caseImages.map((caseImage) => (
                        <div
                          className="case_img_item"
                          onClick={() => handleImageClick(caseImage)}
                        >
                          <img src={caseImage} alt="" />
                        </div>
                      ))
                    : ""}

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
              <div className="case_tab_content_title">
                <p>Описание товара</p>
              </div>
              <div className="case_tab_content_text">
                <textarea></textarea>
              </div>
              <span>Максимальное количество символов - 300</span>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="case_tab_content">
              <div className="case_tab_content_title">
                <p>Цены на кейсы</p>
              </div>
              <div className="case_tab_content_inputs">
                <div className="case_input_temp">
                  <p>Закупочная цена</p>
                  <input type="text" />
                </div>
                <div className="case_input_temp">
                  <p>Цена в рублях </p>
                  <input type="text" />
                </div>
              </div>
              <button className="main_btn case_save_btn">Сохранить кейс</button>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="case_tab_content">
              <div className="case_tab_content_title">
                <p>История покупок</p>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="case_tab_content">
              <div className="case_tab_content_title">
                <p>Предметы, которые выпадают</p>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}

export default CreateCase;
