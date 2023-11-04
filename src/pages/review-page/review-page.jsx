import React from "react";
import "./review-page.css";
import avatar from "../../assets/images/avatar.png";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { ReactComponent as ArrowBackIcon } from "../../assets/icons/arrow-back.svg";

function ReviewPage() {
  const reviewData = [
    {
      review_num: 23,
      user_name: "Виолетта Вишнеевская",
      user_id: "124890-343",
      review_text: "Лучший сайт с кейсами для Геншин Импакт",
      rev_grade: "Позитивная",
      rev_date: "2023-09-01 22:34:23",
      rev_status: "Выложен",
    },
    {
      review_num: 234,
      user_name: "Виолетта Вишнеевская",
      user_id: "124890-343",
      review_text: "Лучший сайт с кейсами для Геншин Импакт",
      rev_grade: "Позитивная",
      rev_date: "2023-09-01 22:34:23",
      rev_status: "Выложен",
    },
    {
      review_num: 34,
      user_name: "Виолетта Вишнеевская",
      user_id: "124890-343",
      review_text: "Лучший сайт с кейсами для Геншин Импакт",
      rev_grade: "Позитивная",
      rev_date: "2023-09-01 22:34:23",
      rev_status: "Выложен",
    },
    {
      review_num: 45,
      user_name: "Виолетта Вишнеевская",
      user_id: "124890-343",
      review_text: "Лучший сайт с кейсами для Геншин Импакт",
      rev_grade: "Позитивная",
      rev_date: "2023-09-01 22:34:23",
      rev_status: "Выложен",
    },
    {
      review_num: 56,
      user_name: "Виолетта Вишнеевская",
      user_id: "124890-343",
      review_text: "Лучший сайт с кейсами для Геншин Импакт",
      rev_grade: "Позитивная",
      rev_date: "2023-09-01 22:34:23",
      rev_status: "Выложен",
    },
    {
      review_num: 5,
      user_name: "Виолетта Вишнеевская",
      user_id: "124890-343",
      review_text: "Лучший сайт с кейсами для Геншин Импакт",
      rev_grade: "Позитивная",
      rev_date: "2023-09-01 22:34:23",
      rev_status: "Выложен",
    },
    {
      review_num: 12,
      user_name: "Виолетта Вишнеевская",
      user_id: "124890-343",
      review_text: "Лучший сайт с кейсами для Геншин Импакт",
      rev_grade: "Позитивная",
      rev_date: "2023-09-01 22:34:23",
      rev_status: "Выложен",
    },
    {
      review_num: 123,
      user_name: "Виолетта Вишнеевская",
      user_id: "124890-343",
      review_text: "Лучший сайт с кейсами для Геншин Импакт",
      rev_grade: "Позитивная",
      rev_date: "2023-09-01 22:34:23",
      rev_status: "Выложен",
    },
    {
      review_num: 354,
      user_name: "Виолетта Вишнеевская",
      user_id: "124890-343",
      review_text: "Лучший сайт с кейсами для Геншин Импакт",
      rev_grade: "Позитивная",
      rev_date: "2023-09-01 22:34:23",
      rev_status: "Выложен",
    },
    {
      review_num: 455,
      user_name: "Виолетта Вишнеевская",
      user_id: "124890-343",
      review_text: "Лучший сайт с кейсами для Геншин Импакт",
      rev_grade: "Позитивная",
      rev_date: "2023-09-01 22:34:23",
      rev_status: "Выложен",
    },
    {
      review_num: 253,
      user_name: "Виолетта Вишнеевская",
      user_id: "124890-343",
      review_text: "Лучший сайт с кейсами для Геншин Импакт",
      rev_grade: "Позитивная",
      rev_date: "2023-09-01 22:34:23",
      rev_status: "Выложен",
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
  const review = reviewData.find((u) => u.review_num == params.review);

  const navigate = useNavigate();
  const aboutUser = (id) => {
    navigate(`/user/${id}`);
  };
  return (
    <div className="template_page ">
      <div className="template_page_title">
        <h1>Просмотр отзыва #{review.review_num}</h1>
      </div>
      <div className="user_line"></div>
      <NavLink to="/reviews">
        <div className="back_btn">
          <ArrowBackIcon /> <p>Назад</p>
        </div>
      </NavLink>
      <div className="review_page_content about_content_tamplate">
        <table className="users_table">
          <thead>
            <tr>
              <th className="tal">Номер отзыва</th>
              <th className="tal">Имя юзера</th>
              <th className="tal">ID юзера</th>
              <th className="tal">Текст отзыва</th>
              <th className="tal">Оценка</th>

              <th className="tal">Дата</th>
              <th className="tal">Статус</th>
              <td className="users_select">
                <div className="select_all">
                  <input type="checkbox" /> Выделить все
                </div>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="">
                <p># {review.review_num}</p>
              </td>
              <td className="">
                <p>{review.user_name}</p>
              </td>
              <td className="">
                <p>id: {review.user_id}</p>
              </td>
              <td className="review_text">
                <p>{review.review_text}</p>
              </td>
              <td className="">
                <p>{review.rev_grade}</p>
              </td>

              <td className="">
                {review && review.rev_date.split(" ")[0]}
                <br />
                {review && review.rev_date.split(" ")[1]}
              </td>
              <td className="tac rev_status">
                <p>{review.rev_status}</p>
              </td>

              <td>
                <div className="cases_table_actions">
                  <button class="undo_create">Завершить заказать</button>
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
                  <button class="main_btn about_secondary_btn">
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
            <button>Посмотреть все платежи юзера </button>
            <button onClick={() => aboutUser(345)}>Посмотреть профиль</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewPage;
