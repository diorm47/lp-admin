import React from "react";
import "./conclusion-page.css";
import avatar from "../../assets/images/avatar.png";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { ReactComponent as ArrowBackIcon } from "../../assets/icons/arrow-back.svg";

function ConclusionPage() {
  const paymentsData = [
    {
      payment_id: 13232,
      user_id: 450965 - 44,
      unical_code: "l3123kds4",
      payment_amount: "690 ₽",
      bonus: "100 ₽",
      payment_type: "Qiwi",
      payment_date: "2023-09-01 22:34:23",
      payment_status: "Успешно",
    },
    {
      payment_id: 85558,
      user_id: 450965 - 44,
      unical_code: "l3123kds4",
      payment_amount: "690 ₽",
      bonus: "100 ₽",
      payment_type: "Qiwi",
      payment_date: "2023-09-01 22:34:23",
      payment_status: "Успешно",
    },
    {
      payment_id: 58578,
      user_id: 450965 - 44,
      unical_code: "l3123kds4",
      payment_amount: "690 ₽",
      bonus: "100 ₽",
      payment_type: "Qiwi",
      payment_date: "2023-09-01 22:34:23",
      payment_status: "Успешно",
    },
    {
      payment_id: 88888,
      user_id: 450965 - 44,
      unical_code: "l3123kds4",
      payment_amount: "690 ₽",
      bonus: "100 ₽",
      payment_type: "Qiwi",
      payment_date: "2023-09-01 22:34:23",
      payment_status: "Успешно",
    },
    {
      payment_id: 85858,
      user_id: 450965 - 44,
      unical_code: "l3123kds4",
      payment_amount: "690 ₽",
      bonus: "100 ₽",
      payment_type: "Qiwi",
      payment_date: "2023-09-01 22:34:23",
      payment_status: "Успешно",
    },
    {
      payment_id: 58855,
      user_id: 450965 - 44,
      unical_code: "l3123kds4",
      payment_amount: "690 ₽",
      bonus: "100 ₽",
      payment_type: "Qiwi",
      payment_date: "2023-09-01 22:34:23",
      payment_status: "Успешно",
    },
    {
      payment_id: 77444,
      user_id: 450965 - 44,
      unical_code: "l3123kds4",
      payment_amount: "690 ₽",
      bonus: "100 ₽",
      payment_type: "Qiwi",
      payment_date: "2023-09-01 22:34:23",
      payment_status: "Успешно",
    },
    {
      payment_id: 36447,
      user_id: 450965 - 44,
      unical_code: "l3123kds4",
      payment_amount: "690 ₽",
      bonus: "100 ₽",
      payment_type: "Qiwi",
      payment_date: "2023-09-01 22:34:23",
      payment_status: "Успешно",
    },
    {
      payment_id: 87545,
      user_id: 450965 - 44,
      unical_code: "l3123kds4",
      payment_amount: "690 ₽",
      bonus: "100 ₽",
      payment_type: "Qiwi",
      payment_date: "2023-09-01 22:34:23",
      payment_status: "Успешно",
    },
    {
      payment_id: 42555,
      user_id: 450965 - 44,
      unical_code: "l3123kds4",
      payment_amount: "690 ₽",
      bonus: "100 ₽",
      payment_type: "Qiwi",
      payment_date: "2023-09-01 22:34:23",
      payment_status: "Успешно",
    },
    {
      payment_id: 96723,
      user_id: 450965 - 44,
      unical_code: "l3123kds4",
      payment_amount: "690 ₽",
      bonus: "100 ₽",
      payment_type: "Qiwi",
      payment_date: "2023-09-01 22:34:23",
      payment_status: "Успешно",
    },
    {
      payment_id: 52415,
      user_id: 450965 - 44,
      unical_code: "l3123kds4",
      payment_amount: "690 ₽",
      bonus: "100 ₽",
      payment_type: "Qiwi",
      payment_date: "2023-09-01 22:34:23",
      payment_status: "Успешно",
    },
    {
      payment_id: 10032,
      user_id: 450965 - 44,
      unical_code: "l3123kds4",
      payment_amount: "690 ₽",
      bonus: "100 ₽",
      payment_type: "Qiwi",
      payment_date: "2023-09-01 22:34:23",
      payment_status: "Успешно",
    },
    {
      payment_id: 13562,
      user_id: 450965 - 44,
      unical_code: "l3123kds4",
      payment_amount: "690 ₽",
      bonus: "100 ₽",
      payment_type: "Qiwi",
      payment_date: "2023-09-01 22:34:23",
      payment_status: "Успешно",
    },
    {
      payment_id: 16232,
      user_id: 450965 - 44,
      unical_code: "l3123kds4",
      payment_amount: "690 ₽",
      bonus: "100 ₽",
      payment_type: "Qiwi",
      payment_date: "2023-09-01 22:34:23",
      payment_status: "Успешно",
    },
    {
      payment_id: 13532,
      user_id: 450965 - 44,
      unical_code: "l3123kds4",
      payment_amount: "690 ₽",
      bonus: "100 ₽",
      payment_type: "Qiwi",
      payment_date: "2023-09-01 22:34:23",
      payment_status: "Успешно",
    },
    {
      payment_id: 234444,
      user_id: 450965 - 44,
      unical_code: "l3123kds4",
      payment_amount: "690 ₽",
      bonus: "100 ₽",
      payment_type: "Qiwi",
      payment_date: "2023-09-01 22:34:23",
      payment_status: "Успешно",
    },
  ];
  const user = {
    id: 345,
    name: "Дуров",
    email: "admin567@mail.ru",
    balance: 999,
    deposite: 2322,
    winrate: 47,
  };

  const params = useParams();
  const conclusion = paymentsData.find(
    (u) => u.payment_id == params.conclusion
  );

  const navigate = useNavigate();
  const aboutUser = (id) => {
    navigate(`/user/${id}`);
  };
  return (
    <div className="template_page ">
      <div className="template_page_title">
        <h1>Просмотр вывода #{conclusion.payment_id}</h1>
      </div>
      <div className="user_line"></div>
      <NavLink to="/conclusions">
        <div className="back_btn">
          <ArrowBackIcon /> <p>Назад</p>
        </div>
      </NavLink>
      <div className="review_page_content conclusion_content about_content_tamplate">
        <table className="users_table">
          <thead>
            <tr>
              <th className="tal">ID вывода</th>
              <th className="tal">ID юзера</th>
              <th className="tal">Уникальный код</th>
              <th className="tal">Сумма вывода</th>
              <th className="tal">Предмет вывода</th>
              <th className="tal">UID победителя</th>
              <th className="tac">Дата вывода</th>
              <th className="tac">Статус системы</th>
              <th className="tac"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="">
                <p>{conclusion.payment_id}</p>
              </td>
              <td className="">
                <p>{conclusion.user_id}</p>
              </td>
              <td className="">
                <p>{conclusion.unical_code}</p>
              </td>
              <td className="">
                <p>{conclusion.payment_amount}</p>
              </td>
              <td className="">
                <p>Благославение <br /> полой Луны</p>
              </td>
              <td className="">
                <p>21223490</p>
              </td>

              <td className="tac">
                {conclusion && conclusion.payment_date.split(" ")[0]}
                <br />
                {conclusion && conclusion.payment_date.split(" ")[1]}
              </td>

              <td className="tac rev_status">
                <p>{conclusion.payment_status}</p>
              </td>

              <td>
                <div className="cases_table_actions">
                  <button className="undo_create main_btn_template_border">Завершить заказать</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="about_page_secondary_block">
          <div className="template_page_title">
            <h1>Данные юзера</h1>
          </div>
          <table className="users_table">
            <thead>
              <tr>
                <th className="table_user_id_title">ID</th>
                <th className="table_user_avatar_title">Аватар</th>
                <th className="table_user_name_title">Имя юзера</th>
                <th className="table_user_email_title">Контакт</th>
                <th className="tal">Баланс</th>
                <th className="table_user_balance_title">Сумма выводов</th>
                <th className="table_user_deposite_title">Сумма депозитов</th>
                <th className="table_user_winrate_title">Винрейт</th>
                <th className="table_user_winrate_title">Диалоги</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="table_user_id_row">
                  <p>{user.id}</p>
                </td>
                <td className="table_user_avatar_row">
                  <img src={avatar} alt="" />
                </td>
                <td className="table_user_name_row">
                  <p>{user.name}</p>
                </td>
                <td className="table_user_email_row">
                  <p>{user.email}</p>
                </td>
                <td className="">
                  <p>{user.balance} ₽</p>
                </td>
                <td className="table_user_balance_row">
                  <p>{user.balance} ₽</p>
                </td>
                <td className="table_user_deposite_row">
                  <p>{user.deposite} ₽</p>
                </td>
                <td className="table_user_winrate_row">
                  <p>{user.winrate}%</p>
                </td>

                <td>
                  <button className="main_btn about_secondary_btn main_btn_template">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M13.332 2.66669H2.66536C1.93203 2.66669 1.3387 3.26669 1.3387 4.00002L1.33203 12C1.33203 12.7334 1.93203 13.3334 2.66536 13.3334H13.332C14.0654 13.3334 14.6654 12.7334 14.6654 12V4.00002C14.6654 3.26669 14.0654 2.66669 13.332 2.66669ZM13.332 12H2.66536V5.33335L7.9987 8.66669L13.332 5.33335V12ZM7.9987 7.33335L2.66536 4.00002H13.332L7.9987 7.33335Z"
                        fill="white"
                      />
                    </svg>
                    <p>Перейти в диалог</p>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="about_page_actions">
            <button className="main_btn_template_green">Посмотреть все платежи юзера </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConclusionPage;
