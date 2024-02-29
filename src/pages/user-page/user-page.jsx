import React, { useEffect, useState } from "react";
import "./user-page.css";
import { useParams } from "react-router-dom";
import { usersData } from "../../components/users";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-icon.svg";
import { ReactComponent as Google } from "../../assets/icons/socials/google.svg";
import { ReactComponent as Vk } from "../../assets/icons/socials/vk.svg";
import { ReactComponent as TG } from "../../assets/icons/socials/tg.svg";
import { ReactComponent as Mailru } from "../../assets/icons/socials/mailru.svg";
import { ReactComponent as Yandex } from "../../assets/icons/socials/yandex.svg";
import avatar from "../../assets/images/avatar.png";
import PaginationSecondary from "../../components/pagionation-secondary/pagination-secondary";
import { mainApi } from "../../components/utils/main-api";

function UserPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const params = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    mainApi
      .getUserAction(params.user)
      .then((res) => {
        setUser(res);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  const openingHistoryData = [
    {
      id: 24324,
      case_name: "Кейс от Зепикса",
      recieved_item: "30 кристаллов",
      date: "2023-12-03 21:34:21",
      quantity: 12,
      case_price: 234,
      win_price: 122,
      status: "got_status",
    },
    {
      id: 45645,
      case_name: "Кейс от Зепикса",
      recieved_item: "30 кристаллов",
      date: "2023-12-03 21:34:21",
      quantity: 12,
      case_price: 234,
      win_price: 122,
      status: "error_status",
    },
    {
      id: 123432,
      case_name: "Кейс от Зепикса",
      recieved_item: "30 кристаллов",
      date: "2023-12-03 21:34:21",
      quantity: 12,
      case_price: 234,
      win_price: 122,
      status: "selled_status",
    },
    {
      id: 234543,
      case_name: "Кейс от Зепикса",
      recieved_item: "30 кристаллов",
      date: "2023-12-03 21:34:21",
      quantity: 12,
      case_price: 234,
      win_price: 122,
      status: "got_status",
    },
    {
      id: 678657,
      case_name: "Кейс от Зепикса",
      recieved_item: "30 кристаллов",
      date: "2023-12-03 21:34:21",
      quantity: 12,
      case_price: 234,
      win_price: 122,
      status: "error_status",
    },
    {
      id: 65756,
      case_name: "Кейс от Зепикса",
      recieved_item: "30 кристаллов",
      date: "2023-12-03 21:34:21",
      quantity: 12,
      case_price: 234,
      win_price: 122,
      status: "selled_status",
    },
    {
      id: 4565465,
      case_name: "Кейс от Зепикса",
      recieved_item: "30 кристаллов",
      date: "2023-12-03 21:34:21",
      quantity: 12,
      case_price: 234,
      win_price: 122,
      status: "got_status",
    },
    {
      id: 34123432,
      case_name: "Кейс от Зепикса",
      recieved_item: "30 кристаллов",
      date: "2023-12-03 21:34:21",
      quantity: 12,
      case_price: 234,
      win_price: 122,
      status: "error_status",
    },
    {
      id: 56756,
      case_name: "Кейс от Зепикса",
      recieved_item: "30 кристаллов",
      date: "2023-12-03 21:34:21",
      quantity: 12,
      case_price: 234,
      win_price: 122,
      status: "selled_status",
    },
    {
      id: 353466,
      case_name: "Кейс от Зепикса",
      recieved_item: "30 кристаллов",
      date: "2023-12-03 21:34:21",
      quantity: 12,
      case_price: 234,
      win_price: 122,
      status: "got_status",
    },
    {
      id: 567547,
      case_name: "Кейс от Зепикса",
      recieved_item: "30 кристаллов",
      date: "2023-12-03 21:34:21",
      quantity: 12,
      case_price: 234,
      win_price: 122,
      status: "error_status",
    },
    {
      id: 123414,
      case_name: "Кейс от Зепикса",
      recieved_item: "30 кристаллов",
      date: "2023-12-03 21:34:21",
      quantity: 12,
      case_price: 234,
      win_price: 122,
      status: "selled_status",
    },
    {
      id: 34523,
      case_name: "Кейс от Зепикса",
      recieved_item: "30 кристаллов",
      date: "2023-12-03 21:34:21",
      quantity: 12,
      case_price: 234,
      win_price: 122,
      status: "got_status",
    },
    {
      id: 65785687,
      case_name: "Кейс от Зепикса",
      recieved_item: "30 кристаллов",
      date: "2023-12-03 21:34:21",
      quantity: 12,
      case_price: 234,
      win_price: 122,
      status: "error_status",
    },
    {
      id: 345365,
      case_name: "Кейс от Зепикса",
      recieved_item: "30 кристаллов",
      date: "2023-12-03 21:34:21",
      quantity: 12,
      case_price: 234,
      win_price: 122,
      status: "selled_status",
    },
  ];
  const [openingHistory, setOpeningHistory] = useState([]);

  const openingHistoryTopupData = [
    {
      id: 23456,
      name: "Киви карта",
      date: "2023-12-03 21:34:21",
      quantity: 34,
      price: 34,
      status: "selled_status",
    },
    {
      id: 345,
      name: "Киви карта",
      date: "2023-12-03 21:34:21",
      quantity: 34,
      price: 34,
      status: "got_status",
    },
    {
      id: 12344,
      name: "Киви карта",
      date: "2023-12-03 21:34:21",
      quantity: 34,
      price: 34,
      status: "error_status",
    },
    {
      id: 345,
      name: "Киви карта",
      date: "2023-12-03 21:34:21",
      quantity: 34,
      price: 34,
      status: "got_status",
    },
    {
      id: 678,
      name: "Киви карта",
      date: "2023-12-03 21:34:21",
      quantity: 34,
      price: 34,
      status: "got_status",
    },
    {
      id: 5676,
      name: "Киви карта",
      date: "2023-12-03 21:34:21",
      quantity: 34,
      price: 34,
      status: "error_status",
    },
    {
      id: 4646,
      name: "Киви карта",
      date: "2023-12-03 21:34:21",
      quantity: 34,
      price: 34,
      status: "selled_status",
    },
    {
      id: 2345,
      name: "Киви карта",
      date: "2023-12-03 21:34:21",
      quantity: 34,
      price: 34,
      status: "error_status",
    },
  ];
  const [openingHistoryTopup, setOpeningHistoryTopup] = useState([]);

  const userInventarData = [
    {
      id: 234545,
      item: "Луна ежемесячная",
      got_type: "Апгрейд",
      date: "2023-12-03 21:34:21",
      price: "450",
      status: "Доступен",
    },
    {
      id: 456765,
      item: "Луна ежемесячная",
      got_type: "Открыл кейс",
      date: "2023-12-03 21:34:21",
      price: "450",
      status: "Продан",
    },
    {
      id: 45765,
      item: "Луна ежемесячная",
      got_type: "Апгрейд",
      date: "2023-12-03 21:34:21",
      price: "450",
      status: "Доступен",
    },
    {
      id: 4567457,
      item: "Луна ежемесячная",
      got_type: "Бесплатный кейс",
      date: "2023-12-03 21:34:21",
      price: "450",
      status: "Выведен",
    },
    {
      id: 4567,
      item: "Луна ежемесячная",
      got_type: "Апгрейд",
      date: "2023-12-03 21:34:21",
      price: "450",
      status: "Доступен",
    },
    {
      id: 789896,
      item: "Луна ежемесячная",
      got_type: "Открыл кейс",
      date: "2023-12-03 21:34:21",
      price: "450",
      status: "Продан",
    },
    {
      id: 67897689,
      item: "Луна ежемесячная",
      got_type: "Апгрейд",
      date: "2023-12-03 21:34:21",
      price: "450",
      status: "Доступен",
    },
    {
      id: 6789,
      item: "Луна ежемесячная",
      got_type: "Бесплатный кейс",
      date: "2023-12-03 21:34:21",
      price: "450",
      status: "Выведен",
    },
    {
      id: 687678,
      item: "Луна ежемесячная",
      got_type: "Апгрейд",
      date: "2023-12-03 21:34:21",
      price: "450",
      status: "Доступен",
    },
    {
      id: 68678,
      item: "Луна ежемесячная",
      got_type: "Открыл кейс",
      date: "2023-12-03 21:34:21",
      price: "450",
      status: "Продан",
    },
    {
      id: 567653,
      item: "Луна ежемесячная",
      got_type: "Апгрейд",
      date: "2023-12-03 21:34:21",
      price: "450",
      status: "Доступен",
    },
    {
      id: 12434,
      item: "Луна ежемесячная",
      got_type: "Бесплатный кейс",
      date: "2023-12-03 21:34:21",
      price: "450",
      status: "Выведен",
    },
  ];
  const [userInventar, setUserInventar] = useState([]);

  console.log(user);
  return (
    <div className="template_page user_page">
      <div className="template_page_title">
        <h1>Профиль пользователя</h1>
        <div className="users_search">
          <SearchIcon />
          <input type="text" placeholder="Поиск" />
        </div>
      </div>
      <div className="template_page_content">
        {user && user.user_id ? (
          <div className="user_page_wrapper">
            <div className="user_line"></div>
            <div className="user_main_data">
              <p>Фото изображение человека</p>
              <div className="user_top_actions_btns">
                <div className="user_image">
                  <img src={user.image || avatar} alt="" />
                  <div className="user_image_actions">
                    <button>Изменить</button>
                    <button className="delete_user_btn">Удалить</button>
                  </div>
                </div>
                <div className="user_action_btns">
                  <button className="main_btn main_btn_template_red">
                    Заблокировать юзера
                  </button>
                  <button className="main_btn">Разблокировать</button>
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
                      placeholder="-"
                      value={user.username || ""}
                      readOnly
                    />
                  </div>
                  <div className="personal_information_block">
                    <p>Аккаунт телеграм</p>
                    <input
                      type="text"
                      placeholder="-"
                      value="https://t.me/admin12"
                      readOnly
                    />
                    <svg
                      className="copy_icon"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_379_7747)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M2.02286 0.75C1.31988 0.75 0.75 1.31988 0.75 2.02286V11.2629C0.75 11.9658 1.31988 12.5357 2.02286 12.5357H5.46429V15.9771C5.46429 16.6801 6.03416 17.25 6.73714 17.25H15.9771C16.6801 17.25 17.25 16.6801 17.25 15.9771V6.73714C17.25 6.03416 16.6801 5.46429 15.9771 5.46429H12.5357V2.02286C12.5357 1.31988 11.9658 0.75 11.2629 0.75H2.02286ZM11.1214 5.46429V2.16429H2.16429V11.1214H5.46429V6.73714C5.46429 6.03416 6.03416 5.46429 6.73714 5.46429H11.1214ZM6.87857 15.8357H15.8357V6.87857H6.87857V15.8357Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_379_7747">
                          <rect width="18" height="18" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="personal_information_block">
                    <p>Почта</p>
                    <input
                      type="text"
                      placeholder="-"
                      value="admin@mail.ru"
                      readOnly
                    />
                  </div>
                  <div className="personal_information_block">
                    <p>Аккаунт вконтакте</p>
                    <input
                      type="text"
                      placeholder="-"
                      value="https://vk.com/admin"
                      readOnly
                    />
                    <svg
                      className="copy_icon"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_379_7747)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M2.02286 0.75C1.31988 0.75 0.75 1.31988 0.75 2.02286V11.2629C0.75 11.9658 1.31988 12.5357 2.02286 12.5357H5.46429V15.9771C5.46429 16.6801 6.03416 17.25 6.73714 17.25H15.9771C16.6801 17.25 17.25 16.6801 17.25 15.9771V6.73714C17.25 6.03416 16.6801 5.46429 15.9771 5.46429H12.5357V2.02286C12.5357 1.31988 11.9658 0.75 11.2629 0.75H2.02286ZM11.1214 5.46429V2.16429H2.16429V11.1214H5.46429V6.73714C5.46429 6.03416 6.03416 5.46429 6.73714 5.46429H11.1214ZM6.87857 15.8357H15.8357V6.87857H6.87857V15.8357Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_379_7747">
                          <rect width="18" height="18" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="personal_information_block">
                    <p>Способы входа</p>
                    <div className="user_socials">
                      <Google />
                      <Vk />
                      <TG />
                      <Mailru />
                      <Yandex />
                    </div>
                  </div>
                  <div className="personal_information_block">
                    <p>Дата регистрации пользователя</p>
                    <input
                      type="text"
                      placeholder="-"
                      value="17.07.2023 17:34"
                      readOnly
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="user_line"></div>
            <div className="user_activity">
              <p className="user_block_title">Игровая активность</p>
              <div className="user_activities">
                <div className="personal_information_block">
                  <p>Баланс юзера</p>
                  <input
                    type="text"
                    placeholder="0"
                    value={user.balance}
                    readOnly
                  />
                  <svg
                    className="copy_icon"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_379_4164)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M15.9968 6.36003C16.2165 6.14036 16.2165 5.7842 15.9968 5.56453L12.2845 1.85222C12.0648 1.63255 11.7086 1.63255 11.489 1.85222L2.16271 11.1785C1.91657 11.4246 1.77828 11.7585 1.77828 12.1066L1.77828 15.5082C1.77828 15.8189 2.03012 16.0707 2.34078 16.0707L5.74243 16.0707C6.09053 16.0707 6.42437 15.9324 6.67051 15.6863L15.9968 6.36003ZM14.8035 5.96228L13.4777 7.28811L10.5609 4.37129L11.8867 3.04546L14.8035 5.96228ZM9.76541 5.16679L12.6822 8.0836L5.87502 14.8908C5.83985 14.926 5.79216 14.9457 5.74243 14.9457L2.90328 14.9457L2.90328 12.1066C2.90328 12.0568 2.92304 12.0092 2.9582 11.974L9.76541 5.16679Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_379_4164">
                        <rect width="18" height="18" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="personal_information_block winrate_edit">
                  <p>Винрейт</p>
                  <input
                    type="text"
                    placeholder="0"
                    value={user.winrate}
                    readOnly
                  />
                  <svg
                    className="copy_icon"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_379_4164)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M15.9968 6.36003C16.2165 6.14036 16.2165 5.7842 15.9968 5.56453L12.2845 1.85222C12.0648 1.63255 11.7086 1.63255 11.489 1.85222L2.16271 11.1785C1.91657 11.4246 1.77828 11.7585 1.77828 12.1066L1.77828 15.5082C1.77828 15.8189 2.03012 16.0707 2.34078 16.0707L5.74243 16.0707C6.09053 16.0707 6.42437 15.9324 6.67051 15.6863L15.9968 6.36003ZM14.8035 5.96228L13.4777 7.28811L10.5609 4.37129L11.8867 3.04546L14.8035 5.96228ZM9.76541 5.16679L12.6822 8.0836L5.87502 14.8908C5.83985 14.926 5.79216 14.9457 5.74243 14.9457L2.90328 14.9457L2.90328 12.1066C2.90328 12.0568 2.92304 12.0092 2.9582 11.974L9.76541 5.16679Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_379_4164">
                        <rect width="18" height="18" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="user_winrate_title">
                    {user.winrate > 50 ? "Высокий процент победы!" : ""}{" "}
                  </p>
                  <div className="user_winrate">
                    <button className="user_winrate_btn">
                      Настроить подкрутку
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="user_operations">
              <div className="user_operations_title">
                <p className="user_block_title">История открытий</p>
                <div className="users_search">
                  <SearchIcon />
                  <input type="text" placeholder="Поиск" />
                </div>
              </div>
              <div className="user_operations_table">
                <table className="user_table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Название кейса</th>
                      <th>Полученный предмет</th>
                      <th>Дата</th>
                      <th>Кол-во</th>
                      <th>Цена кейса</th>
                      <th>Цена выйгрыша</th>
                      <th>Статус</th>
                    </tr>
                  </thead>
                  <tbody>
                    {openingHistory
                      ? openingHistory.map((item) => (
                          <tr>
                            <td>{item.id}</td>
                            <td>{item.case_name}</td>
                            <td>{item.recieved_item}</td>
                            <td>{item.date}</td>
                            <td>{item.quantity}</td>
                            <td>{item.case_price} р.</td>
                            <td>{item.win_price} р.</td>

                            <td>
                              <div className="open_status_box">
                                {item.status === "got_status" ? (
                                  <div className="open_status status_succes">
                                    <p>Получен</p>
                                  </div>
                                ) : (
                                  ""
                                )}
                                {item.status === "selled_status" ? (
                                  <div className="open_status status_selled">
                                    <p>Продан</p>
                                  </div>
                                ) : (
                                  ""
                                )}
                                {item.status === "error_status" ? (
                                  <div className="open_status status_error">
                                    <p>Ошибка</p>
                                  </div>
                                ) : (
                                  ""
                                )}
                              </div>
                            </td>
                          </tr>
                        ))
                      : ""}
                  </tbody>
                </table>
              </div>
              <PaginationSecondary
                allData={openingHistoryData}
                paginationData={setOpeningHistory}
                length={6}
              />
            </div>
            <div className="user_operations">
              <div className="user_operations_title">
                <p className="user_block_title">История пополнений</p>
                <div className="users_search">
                  <SearchIcon />
                  <input type="text" placeholder="Поиск" />
                </div>
              </div>
              <div className="user_operations_table">
                <table className="user_table">
                  <thead>
                    <tr>
                      <th>ID пополнения</th>
                      <th>Способ пополнения</th>
                      <th>Дата</th>
                      <th>Кол-во</th>
                      <th>Сумма</th>
                      <th>Статус</th>
                    </tr>
                  </thead>
                  <tbody>
                    {openingHistoryTopup
                      ? openingHistoryTopup.map((item) => (
                          <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.date}</td>
                            <td>{item.quantity}</td>
                            <td>{item.price} р.</td>
                            <td>
                              <div className="open_status_box">
                                <div className="open_status status_succes">
                                  <p>Пополнен</p>
                                </div>
                              </div>
                            </td>
                          </tr>
                        ))
                      : ""}
                  </tbody>
                </table>
              </div>
              <PaginationSecondary
                allData={openingHistoryTopupData}
                paginationData={setOpeningHistoryTopup}
                length={6}
              />
            </div>
            <div className="user_operations">
              <div className="user_operations_title">
                <p className="user_block_title">Статистика пользователя</p>
              </div>
              <div className="user_stats_blocks">
                <div className="user_stats_block">
                  <div className="user_stats_block_title">
                    <p>Депозитов за все время</p>
                  </div>
                  <div className="user_stats_block_amount">
                    <p>250 230 ₽</p>
                  </div>
                </div>
                <div className="user_stats_block">
                  <div className="user_stats_block_title">
                    <p>Выйграл</p>
                  </div>
                  <div className="user_stats_block_amount">
                    <p>290 230 ₽</p>
                  </div>
                </div>
                <div className="user_stats_block">
                  <div className="user_stats_block_title">
                    <p>Проиграл</p>
                  </div>
                  <div className="user_stats_block_amount">
                    <p>4 250 230 ₽</p>
                  </div>
                </div>
                <div className="user_stats_block">
                  <div className="user_stats_block_title">
                    <p>Вывел</p>
                  </div>
                  <div className="user_stats_block_amount">
                    <p>100 050 ₽</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="user_operations">
              <div className="user_operations_title">
                <p className="user_block_title">Инвентарь</p>
                <div className="users_search">
                  <SearchIcon />
                  <input type="text" placeholder="Поиск" />
                </div>
              </div>
              <div className="user_operations_table">
                <table className="user_table">
                  <thead>
                    <tr>
                      <th>ID товара</th>
                      <th>Товар</th>
                      <th>Способ получения</th>
                      <th>Дата</th>
                      <th>Сумма</th>
                      <th>Статус</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userInventar
                      ? userInventar.map((item) => (
                          <tr>
                            <td>{item.id}</td>
                            <td>{item.item}</td>
                            <td>{item.got_type}</td>
                            <td>{item.date}</td>
                            <td>{item.price} р.</td>
                            <td>
                              <div className="open_status_box">
                                <div className="open_status status_succes">
                                  <p>{item.status}</p>
                                </div>
                              </div>
                            </td>
                          </tr>
                        ))
                      : ""}
                  </tbody>
                </table>
              </div>
              <PaginationSecondary
                allData={userInventarData}
                paginationData={setUserInventar}
                length={6}
              />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default UserPage;
