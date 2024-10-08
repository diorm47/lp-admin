import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-icon.svg";
import { ReactComponent as Google } from "../../assets/icons/socials/google.svg";
import { ReactComponent as Mailru } from "../../assets/icons/socials/mailru.svg";
import { ReactComponent as TG } from "../../assets/icons/socials/tg.svg";
import { ReactComponent as Vk } from "../../assets/icons/socials/vk.svg";
import { ReactComponent as Yandex } from "../../assets/icons/socials/yandex.svg";
import avatar from "../../assets/images/avatar.png";
import PaginationSecondary from "../../components/pagionation-secondary/pagination-secondary";
import { mainApi } from "../../components/utils/main-api";
import "./user-page.css";
import { ReactComponent as ArrowBackIcon } from "../../assets/icons/arrow-back.svg";

function UserPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();

  const params = useParams();
  const [user, setUser] = useState({});

  const [userGames, setUserGames] = useState([]);
  const [userItems, setUserItems] = useState([]);
  const [userPayments, setUserPayments] = useState([]);

  // get user
  useEffect(() => {
    mainApi
      .getUserAction(params.user)
      .then((res) => {
        setUser(res);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, [params.user]);

  // get user game
  const [dataLengthG, setDataLengthG] = useState();
  const [currentPageG, setCurrentPageG] = useState(0);
  useEffect(() => {
    getUserGames(currentPageG * 10);
  }, [currentPageG]);

  const getUserGames = (offset = 0) => {
    mainApi
      .getUserGamesAction(params.user, offset)
      .then((res) => {
        setUserGames(res.results);
        setDataLengthG(res.count);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  // get user items
  const [dataLengthI, setDataLengthI] = useState();
  const [currentPageI, setCurrentPageI] = useState(0);
  useEffect(() => {
    getUserItems(currentPageI * 10);
  }, [currentPageI]);

  const getUserItems = (offset = 0) => {
    mainApi
      .getUserItemsAction(params.user, offset)
      .then((res) => {
        setUserItems(res.results);
        setDataLengthI(res.count);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  // get user payments
  const [dataLength, setDataLength] = useState();
  const [currentPage, setCurrentPage] = useState(0);
  useEffect(() => {
    getUserPayments(currentPage * 10);
  }, [currentPage]);

  const getUserPayments = (offset = 0) => {
    mainApi
      .getUserPaymentsAction(params.user, offset)
      .then((res) => {
        setUserPayments(res.results);
        setDataLength(res.count);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const aboutUser = () => {
    navigate(`/edit-user/${params.user}`);
  };

  return (
    <div className="template_page user_page">
      <div className="template_page_title">
        <h1>Профиль пользователя: {user.username}</h1>
        <div className="users_search">
          <SearchIcon />
          <input type="text" placeholder="Поиск" />
        </div>
      </div>
      <div className="user_line"></div>
      <NavLink to={`/users`}>
        <div className="back_btn">
          <ArrowBackIcon /> <p>Назад</p>
        </div>
      </NavLink>
      <div className="template_page_content">
        {user ? (
          <div className="user_page_wrapper">
            <div className="user_main_data">
              <p>Фото изображение человека</p>
              <div className="user_top_actions_btns">
                <div className="user_image">
                  <img src={user.image || avatar} alt="" />
                </div>
                <div className="user_action_btns">
                  {/* <button className="main_btn main_btn_template_red">
                    {" "}
                    Заблокировать{" "}
                  </button> */}
                  <button className="main_btn" onClick={aboutUser}>
                    Редактировать
                  </button>
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
                      value={`${user.first_name || ""} ${user.last_name || ""}`}
                      readOnly
                    />
                  </div>
                  <div className="personal_information_block">
                    <p>Аккаунт телеграм</p>
                    <input
                      type="text"
                      placeholder="-"
                      value={user.link_tg}
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
                      value={user.email}
                      readOnly
                    />
                  </div>
                  <div className="personal_information_block">
                    <p>Аккаунт вконтакте</p>
                    <input
                      type="text"
                      placeholder="-"
                      value={user.link_vk}
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
                  {user.date_joined ? (
                    <div className="personal_information_block">
                      <p>Дата регистрации пользователя</p>
                      <input
                        type="text"
                        placeholder="-"
                        value={`${user.date_joined.split("T")[0]} в ${
                          user.date_joined.split("T")[1].split("Z")[0]
                        }`}
                        readOnly
                      />
                    </div>
                  ) : (
                    ""
                  )}
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
                </div>
                <div className="personal_information_block winrate_edit">
                  <p>Винрейт</p>
                  <input
                    type="text"
                    placeholder="0"
                    value={user.winrate}
                    readOnly
                  />
                </div>
                <div className="personal_information_block winrate_edit">
                  <p>Процент накрутки</p>
                  <input
                    type="text"
                    placeholder="0"
                    value={user.individual_percent}
                    readOnly
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
                    value={user.partner_percent}
                    readOnly
                  />
                </div>
                <div className="personal_information_block">
                  <p>Поступления с рефералов</p>
                  <input
                    type="text"
                    placeholder="0"
                    value={user.partner_income}
                    readOnly
                  />
                </div>
                <div className="personal_information_block">
                  <p>Вывел с реферального баланса</p>
                  <input
                    type="text"
                    placeholder="0"
                    value={user.total_withdrawal}
                    readOnly
                  />
                </div>
                <div className="personal_information_block">
                  <p>Доступно для вывода</p>
                  <input
                    type="text"
                    placeholder="0"
                    value={user.available_withdrawal}
                    readOnly
                  />
                </div>
              </div>
              <div className="user_checkboxes">
                <div className="user_checkbox">
                  <p>Верифицирован:</p>
                  <input type="checkbox" checked={user.verified} />
                </div>
                <div className="user_checkbox">
                  <p>Демо:</p>
                  <input type="checkbox" checked={user.verified} />
                </div>
              </div>
            </div>

            {/* game */}
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
                    {userGames && userGames.length ? (
                      userGames.map((item, index) => (
                        <tr key={index}>
                          <td>{item.id || "-"}</td>
                          <td>{item.case.name}</td>
                          <td>{item.item.name}</td>
                          <td>{item.date || "-"}</td>
                          <td>{item.quantity || "1"}</td>
                          <td>{item.case.price || "-"} р.</td>
                          <td>{item.item.price || "-"} р.</td>

                          <td>
                            <div className="open_status_box">
                              <div className="open_status status_succes">
                                <p>{item.status}</p>
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <div className="empty_block">
                        <p>Пусто</p>
                      </div>
                    )}
                  </tbody>
                </table>
              </div>
              <PaginationSecondary
                pageCount={Math.ceil(dataLengthG / 10)}
                onPageChange={setCurrentPageG}
              />
            </div>
            {/* payments */}
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
                    {userPayments && userPayments.length ? (
                      userPayments.map((item) => (
                        <tr>
                          <td>{item.id || "-"}</td>
                          <td>{item.status || "-"}</td>
                          <td>{item.created_at}</td>
                          <td>{item.quantity || "-"}</td>
                          <td>{item.sum} р.</td>
                          <td>
                            <div className="open_status_box">
                              <div className="open_status status_succes">
                                <p>-</p>
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <div className="empty_block">
                        <p>Пусто</p>
                      </div>
                    )}
                  </tbody>
                </table>
              </div>
              <PaginationSecondary
                pageCount={Math.ceil(dataLength / 10)}
                onPageChange={setCurrentPage}
              />
            </div>
            {/* stats */}
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
                    <p>{user.all_debit} ₽</p>
                  </div>
                </div>
                <div className="user_stats_block">
                  <div className="user_stats_block_title">
                    <p>Выйграл</p>
                  </div>
                  <div className="user_stats_block_amount">
                    <p>0 ₽</p>
                  </div>
                </div>
                <div className="user_stats_block">
                  <div className="user_stats_block_title">
                    <p>Проиграл</p>
                  </div>
                  <div className="user_stats_block_amount">
                    <p>0 ₽</p>
                  </div>
                </div>
                <div className="user_stats_block">
                  <div className="user_stats_block_title">
                    <p>Вывел</p>
                  </div>
                  <div className="user_stats_block_amount">
                    <p>{user.all_output} ₽</p>
                  </div>
                </div>
              </div>
            </div>
            {/* inventar */}
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
                    {userItems && userItems.length ? (
                      userItems.map((item) => (
                        <tr>
                          <td>{item.id}</td>
                          <td>{item.name}</td>
                          <td>{item.got_type || "-"}</td>
                          <td>{item.date || "-"}</td>
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
                    ) : (
                      <div className="empty_block">
                        <p>Пусто</p>
                      </div>
                    )}
                  </tbody>
                </table>
              </div>
              <PaginationSecondary
                pageCount={Math.ceil(dataLengthI / 10)}
                onPageChange={setCurrentPageI}
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
