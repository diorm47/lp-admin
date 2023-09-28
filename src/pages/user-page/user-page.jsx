import React, { useEffect } from "react";
import "./user-page.css";
import { useParams } from "react-router-dom";
import { users } from "../../components/users";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-icon.svg";
import { ReactComponent as Google } from "../../assets/icons/socials/google.svg";
import { ReactComponent as Vk } from "../../assets/icons/socials/vk.svg";
import { ReactComponent as TG } from "../../assets/icons/socials/tg.svg";
import { ReactComponent as Mailru } from "../../assets/icons/socials/mailru.svg";
import { ReactComponent as Yandex } from "../../assets/icons/socials/yandex.svg";
import avatar from "../../assets/images/avatar.png";

function UserPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  //   React.useEffect(() => {
  //     document.title = `${item.item_name} - ${item.name} - Legadrop`;
  //   }, []);

  const params = useParams();
  const item = users.find((u) => u.id == params.user);

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
        <div className="user_page_wrapper">
          <div className="user_line"></div>
          <div className="user_main_data">
            <p>Фото изображение человека</p>
            <div className="user_image">
              <img src={avatar} alt="" />
              <div className="user_image_actions">
                <button>Изменить</button>
                <button>Удалить</button>
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
                    value={item.name}
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
                <input type="text" placeholder="0" value="0" readOnly />
              </div>
              <div className="personal_information_block">
                <p>Винрейт</p>
                <input type="text" placeholder="0" value="89%" readOnly />
                <p className="user_winrate_title">Высокий процент победы!</p>
                <div className="user_winrate">
                  <button className="user_winrate_btn">
                    Настроить винрейт
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
                    <th>Название предмета</th>
                    <th>Дата</th>
                    <th>Кол-во</th>
                    <th>Цена</th>
                    <th>Статус</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>3343</td>
                    <td>Кейс от Зепикса</td>
                    <td>2023-12-03 21:34:21</td>
                    <td>1</td>
                    <td>450</td>
                    <td>
                      <div className="open_status_box">
                        <div className="open_status status_succes">
                          <p>Получен</p>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>3343</td>
                    <td>Кейс от Зепикса</td>
                    <td>2023-12-03 21:34:21</td>
                    <td>1</td>
                    <td>450</td>
                    <td>
                      <div className="open_status_box">
                        <div className="open_status status_selled">
                          <p>Продан</p>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>3343</td>
                    <td>Кейс от Зепикса</td>
                    <td>2023-12-03 21:34:21</td>
                    <td>1</td>
                    <td>450</td>
                    <td>
                      <div className="open_status_box">
                        <div className="open_status status_error">
                          <p>Ошибка</p>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>3343</td>
                    <td>Кейс от Зепикса</td>
                    <td>2023-12-03 21:34:21</td>
                    <td>1</td>
                    <td>450</td>
                    <td>
                      <div className="open_status_box">
                        <div className="open_status status_succes">
                          <p>Получен</p>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>3343</td>
                    <td>Кейс от Зепикса</td>
                    <td>2023-12-03 21:34:21</td>
                    <td>1</td>
                    <td>450</td>
                    <td>
                      <div className="open_status_box">
                        <div className="open_status status_succes">
                          <p>Получен</p>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPage;
