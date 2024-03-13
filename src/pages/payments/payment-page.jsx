import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { ReactComponent as ArrowBackIcon } from "../../assets/icons/arrow-back.svg";
import Snacbar from "../../components/snackbar/snackbar";
import { mainApi } from "../../components/utils/main-api";

function PaymentPage() {
  const params = useParams();
  const [payment, setPayment] = useState({});
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

  const getOutput = () => {
    mainApi
      .getPaymentAction(params.id)
      .then((res) => {
        setPayment(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getOutput();
  }, [params]);

  const getStatus = (status) => {
    if (status == "create") {
      return "Создан";
    } else if (status == "expired") {
      return "Отменен";
    } else if (status == "success") {
      return "Оплачен";
    } else if (status == "manually approved") {
      return "Одобрен вручную";
    }
  };
  const getType = (type) => {
    if (type == "lava") {
      return "Платежная система ЛАВА(LAVA)";
    } else if (type == "yookassa") {
      return "Платежная система ЮКасса(Yookassa)";
    } else if (type == "freekassa") {
      return "Платежная система ФРИКАССА(Freekassa)";
    }
  };

  const approveOutput = () => {
    mainApi
      .approvePaymentAction(payment.order_id)
      .then((res) => {
        snackbarActions("Платежь одобрен");
      })
      .catch((error) => {
        snackbarActions("Ошибка одобрения платежа");
      });
  };
  return (
    <>
      {modal ? (
        <div className="modal_overlay" onClick={() => setModal(false)}></div>
      ) : (
        ""
      )}
      {payment && payment.id ? (
        <div className="template_page promocode_page_crud">
          <div className="template_page_title">
            <h1>Платеж: {payment.order_id}</h1>
          </div>
          <div className="user_line"></div>
          <NavLink to="/payments">
            <div className="back_btn">
              <ArrowBackIcon /> <p>Назад</p>
            </div>
          </NavLink>
          <div className="cases_actions_wrapper">
            <div className="case_tab_content">
              <div className="case_tab_content_title">
                <p>Информация о платеже</p>
              </div>

              <div className="case_input_temp">
                <div className="case_input_temp_title">
                  <p>Пользователь</p>
                </div>
                <input type="text" value={payment.user} readOnly />
              </div>
              <div className="case_input_temp">
                <div className="case_input_temp_title">
                  <p>Email</p>
                </div>
                <input type="text" value={payment.email} readOnly />
              </div>
              <div className="case_input_temp">
                <div className="case_input_temp_title">
                  <p>Сумма</p>
                </div>
                <input type="text" readOnly value={payment.sum} />
              </div>
              <div className="case_input_temp">
                <div className="case_input_temp_title">
                  <p>Способ платежа</p>
                </div>
                <input
                  readOnly
                  type="text"
                  value={getType(payment.type_payments)}
                />
              </div>
              {payment.location !== "string" ? (
                <div className="case_input_temp payment_link_input">
                  <div className="case_input_temp_title">
                    <p>Ссылка платежа</p>
                  </div>
                  <div className="payment_link">
                    <a target="_blank" href={payment.location}>
                      {payment.location}
                    </a>
                  </div>
                </div>
              ) : (
                ""
              )}

              <div className="case_input_temp">
                <p>Статус</p>

                <input readOnly type="text" value={getStatus(payment.status)} />
              </div>

              <div className="case_input_temp">
                <div className="case_input_temp_title">
                  <p>Дата создания</p>
                </div>
                <input
                  type="text"
                  readOnly
                  value={`${payment.created_at.split("T")[0]} ${
                    payment.created_at.split("T")[1].split(".")[0]
                  }`}
                />
              </div>

              {/*  */}
              <div className="case_input_temp case_input_temp_checkbox">
                <input type="checkbox" checked={payment.active} />{" "}
                <p>Активный</p>
              </div>
              <div className="case_input_temp case_input_temp_checkbox">
                <input type="checkbox" checked={payment.removed} />{" "}
                <p>Удален</p>
              </div>

              {payment.status == "create" ? (
                <div className="admin_actions case_actions">
                  <button className="create_admin_btn" onClick={approveOutput}>
                    Одобрить
                  </button>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {isSnackbarVisible ? (
        <Snacbar visible={isSnackbarVisible} text={snackbarText} />
      ) : (
        ""
      )}
    </>
  );
}

export default PaymentPage;
