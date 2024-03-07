import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import avatar from "../../assets/images/avatar.png";
import { mainApi } from "../../components/utils/main-api";
import "./user-page.css";
import { ReactComponent as ArrowBackIcon } from "../../assets/icons/arrow-back.svg";
import Snacbar from "../../components/snackbar/snackbar";

function EditUserPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const params = useParams();

  const [image, setImage] = useState();
  const [updatingImage, setUpdatingImage] = useState();
  const [name, setName] = useState();

  const [indPrecent, setIndPrecent] = useState();
  const [partnerPercent, setPartnerPercent] = useState();
  const [partnerIncome, setPartnerIncome] = useState();
  const [demo, setDemo] = useState();
  const [verified, setVerified] = useState();

  const [isSnackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarText, setSnackbarText] = useState("");
  const snackbarActions = (snackText) => {
    setSnackbarVisible(true);
    setSnackbarText(snackText);
    setTimeout(() => {
      setSnackbarVisible(false);
    }, 2000);
  };
  // get user
  useEffect(() => {
    mainApi
      .getUserAction(params.user)
      .then((res) => {
        setImage(res.image);
        setName(res.username);
   
        setIndPrecent(res.individual_percent);
        setPartnerPercent(res.partner_percent);
        setPartnerIncome(res.partner_income);
        setDemo(res.demo);
        setVerified(res.verified);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, [params.user]);

  const aboutUser = () => {
    navigate(`/user/${params.user}`);
  };
  const saveImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setUpdatingImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const saveUser = () => {
    mainApi
      .updateUserAction(
        {
          image: updatingImage,
          username: name,
          partner_percent: partnerPercent,
          partner_income: partnerIncome,

          individual_percent: indPrecent,
          demo: demo,
          verified: verified,
        },
        params.user
      )
      .then((res) => {
        snackbarActions('Профиль пользователя обновлена')
      })
      .catch((error) => {
        console.log("error", error);
        snackbarActions('Ошибка обновления')

      });
  };


  return (
    <>
      <div className="template_page user_page edit_user_page">
        <div className="template_page_title">
          <h1>Редактирование профиля пользователя</h1>
        </div>
        <div className="user_line"></div>
        <NavLink to={`/user/${params.user}`}>
          <div className="back_btn">
            <ArrowBackIcon /> <p>Назад</p>
          </div>
        </NavLink>
        <div className="template_page_content">
          {name ? (
            <div className="user_page_wrapper">
              <div className="user_main_data">
                <p>Фото изображение человека</p>
                <div className="user_top_actions_btns">
                  <div className="user_image">
                    <img src={updatingImage || image || avatar} alt="" />
                    <label htmlFor="upload_user_img_btn">
                      <div className="upload_user_img_btn">
                        <p>Изменить</p>
                      </div>
                    </label>

                    <input
                      type="file"
                      accept="image/*"
                      id="upload_user_img_btn"
                      className="upload_img_input"
                      onChange={saveImage}
                    />
                  </div>
                </div>
              </div>
              <div className="user_line"></div>
              <div className="personal_informations">
                <p className="user_block_title">Персональная информация</p>
                <div className="personal_informations_list">
                  <div className="personal_information_wrapper">
                    <div className="personal_information_block">
                      <p>Имя пользователя</p>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="user_line"></div>

              <div className="user_activity">
                <p className="user_block_title">Игровая активность</p>
                <div className="user_activities">
              
                  <div className="personal_information_block winrate_edit">
                    <p>Процент накрутки</p>
                    <input
                      type="text"
                      placeholder="0"
                      value={indPrecent}
                      onChange={(e) => setIndPrecent(e.target.value)}
                    />
                  </div>
                </div>
                <p className="user_block_title mt_40px">Реферальная система</p>{" "}
                <div className="user_activities">
                  <div className="personal_information_block">
                    <p>Процент от рефералов</p>
                    <input
                      type="text"
                      placeholder="0"
                      value={partnerPercent}
                      onChange={(e) => setPartnerPercent(e.target.value)}
                    />
                  </div>
                  <div className="personal_information_block">
                    <p>Поступления с рефералов</p>
                    <input
                      type="text"
                      placeholder="0"
                      value={partnerIncome}
                      onChange={(e) => setPartnerIncome(e.target.value)}
                    />
                  </div>
                </div>
                <div className="user_checkboxes">
                  <div className="user_checkbox">
                    <p>Верифицирован:</p>
                    <input
                      type="checkbox"
                      checked={verified}
                      onChange={(e) => setVerified(e.target.checked)}
                    />
                  </div>
                  <div className="user_checkbox">
                    <p>Демо:</p>
                    <input
                      type="checkbox"
                      checked={demo}
                      onChange={(e) => setDemo(e.target.checked)}
                    />
                  </div>
                </div>
                <div class="admin_actions case_actions">
                  <button
                    class="create_admin_btn main_btn_template_green"
                    onClick={saveUser}
                  >
                    Сохранить
                  </button>
                  <button
                    class="undo_create main_btn_template_border"
                    onClick={aboutUser}
                  >
                    Отменить
                  </button>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      {isSnackbarVisible ? (
        <Snacbar visible={isSnackbarVisible} text={snackbarText} />
      ) : (
        ""
      )}
    </>
  );
}

export default EditUserPage;
