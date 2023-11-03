import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as ArrowBackIcon } from "../../assets/icons/arrow-back.svg";
import "./create-promocode.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import { useEffect } from "react";
import { mainApi } from "../../components/utils/main-api";
import CaseItems from "../../components/case-items/case-items";

function CreatePromocode() {
  const [modal, setModal] = useState(false);
  const [caseImage, setCaseImage] = useState();
  const [caseImageU, setCaseImageU] = useState();
  const [caseName, setCaseName] = useState("");
  const [caseCategoryId, setCaseCategoryId] = useState("");
  const [caseDescriptions, setCaseDescriptions] = useState("");

  const [caseID, setCaseID] = useState();
  const [caseItems, setCaseItems] = useState();

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    mainApi
      .getCaseCategoryAction()
      .then((res) => {
        setCategories(res.categories);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  useEffect(() => {
    if (caseID) {
      mainApi
        .getCaseItems(caseID)
        .then((res) => {
          console.log(res);
          setCaseItems(res.items);
        })
        .catch((error) => {
          console.log("error", error);
        });
    }
  }, [caseID]);
  const saveImage = (e) => {
    const file = e.target.files[0];
    setCaseImageU(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setCaseImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const saveCase = () => {
    let headersList = {
      Accept: "*/*",
    };

    let bodyContent = new FormData();
    bodyContent.append("category_id", caseCategoryId);
    bodyContent.append("name", caseName);
    bodyContent.append("picture", caseImageU);

    fetch("http://192.168.1.8:8000/admin/case", {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((res) => {
        setCaseID(res.case_id);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const closeModal = () => {
    setModal(false);
  };

  return (
    <>
      <div className="template_page category_page">
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
                    <p>Имя промокода</p>
                    <input
                      type="text"
                      value={caseName}
                      onChange={(e) => setCaseName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="case_input_temp">
                  <p>Категория промокода</p>
                  <input
                    type="text"
                    value={caseName}
                    onChange={(e) => setCaseName(e.target.value)}
                  />
                </div>
                <div className="case_tab_content_title">
                  <p>Бонус</p>
                </div>
                <div className="case_input_temp">
                  <p>Какой % прибавляется при депозите?</p>
                  <input
                    type="text"
                    value={caseName}
                    onChange={(e) => setCaseName(e.target.value)}
                  />
                </div>
                <div className="case_input_temp">
                  <p>От какой суммы пополнения работает промокод?</p>
                  <input
                    type="text"
                    value={caseName}
                    onChange={(e) => setCaseName(e.target.value)}
                  />
                </div>
                <div className="case_tab_content_title">
                  <p>Ограничения</p>
                </div>
                <div className="case_input_temp">
                  <p>Время действия</p>
                  <input
                    type="text"
                    value={caseName}
                    onChange={(e) => setCaseName(e.target.value)}
                  />
                </div>
                <div className="case_input_temp">
                  <p>Введите количество активаций купона</p>
                  <input
                    type="text"
                    value={caseName}
                    onChange={(e) => setCaseName(e.target.value)}
                  />
                </div>

                <div class="admin_actions case_actions">
                  <button class="create_admin_btn" onClick={saveCase}>
                    Сохранить
                  </button>
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
                    <p>Процент от продаж</p>
                    <input type="text" />
                  </div>
                </div>
                <div className="case_tab_content_title">
                  <p>Реферал</p>
                </div>
                <div className="case_input_temp">
                  <p>Email реферала </p>
                  <input type="text" />
                </div>
                <div className="case_input_temp">
                  <p>Кошелек для выплаты </p>
                  <input type="text" />
                </div>
                <div class="admin_actions case_actions">
                  <button class="create_admin_btn" onClick={saveCase}>
                    Сохранить
                  </button>
                  <button class="undo_create">Отменить</button>
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>

      {modal ? <div className="modal_overlay" onClick={closeModal}></div> : ""}

      {modal ? <CaseItems setModal={setModal} case_id={caseID} /> : ""}
    </>
  );
}

export default CreatePromocode;
