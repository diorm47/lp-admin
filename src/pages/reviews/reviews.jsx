import React from "react";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-icon.svg";
import { useState } from "react";
import "./reviews.css";

import Pagination from "../../components/pagionation/pagination";
import { useNavigate } from "react-router-dom";
import { ReactComponent as SelectedIcon } from "../../assets/icons/selected-icon.svg";

function Reviews() {
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
  const [reviews, setReviews] = useState([]);

  const navigate = useNavigate();
  const aboutReview = (id) => {
    navigate(`/review/${id}`);
  };

  const [selected, setSelected] = useState([]);

  const toggleSelected = (data) => {
    const filteredSelectedItems = selected.some(
      (selected) => selected.review_num === data.review_num
    );
    if (filteredSelectedItems) {
      setSelected(
        selected.filter((item) => item.review_num !== data.review_num)
      );
    } else {
      setSelected([...selected, data]);
    }
  };

  const toggleAllDataSelected = () => {
    if (selected.length == reviewData.length) {
      setSelected([]);
    } else {
      setSelected([...reviewData]);
    }
  };

  return (
    <div className="template_page analytics_page">
      <div className="template_page_title">
        <h1>Отзывы</h1>
      </div>
      <div className="cases_top_actions">
        <button className="main_btn main_btn_template_red">
          <p>Действие над отзывами</p>
        </button>
        <div className="users_search">
          <SearchIcon />
          <input type="text" placeholder="Поиск" />
        </div>
      </div>
      <div className="reviews_table">
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
                  <div className="is_selected ml_55px">
                    {selected.length == reviewData.length ? (
                      <SelectedIcon onClick={toggleAllDataSelected} />
                    ) : (
                      <div
                        className="not_selected_item"
                        onClick={toggleAllDataSelected}
                      ></div>
                    )}
                  </div>{" "}
                  Выделить все
                </div>
              </td>
            </tr>
          </thead>
          <tbody>
            {reviews
              ? reviews.map((review) => (
                  <tr className="review_raw" key={review.review_num}>
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
                        <div className="cases_table_actions_list">
                          <div title="поиск" className="cases_table_search">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M15.7549 14.255H14.9649L14.6849 13.985C15.6649 12.845 16.2549 11.365 16.2549 9.755C16.2549 6.165 13.3449 3.255 9.75488 3.255C6.16488 3.255 3.25488 6.165 3.25488 9.755C3.25488 13.345 6.16488 16.255 9.75488 16.255C11.3649 16.255 12.8449 15.665 13.9849 14.685L14.2549 14.965V15.755L19.2549 20.745L20.7449 19.255L15.7549 14.255ZM9.75488 14.255C7.26488 14.255 5.25488 12.245 5.25488 9.755C5.25488 7.26501 7.26488 5.255 9.75488 5.255C12.2449 5.255 14.2549 7.26501 14.2549 9.755C14.2549 12.245 12.2449 14.255 9.75488 14.255Z"
                                fill="black"
                              />
                            </svg>
                          </div>
                          <div
                            title="редактировать"
                            className="cases_table_edit"
                            onClick={() => aboutReview(review.review_num)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M2.99902 17.2512V21.0012H6.74902L17.809 9.94125L14.059 6.19125L2.99902 17.2512ZM20.709 7.04125C21.099 6.65125 21.099 6.02125 20.709 5.63125L18.369 3.29125C17.979 2.90125 17.349 2.90125 16.959 3.29125L15.129 5.12125L18.879 8.87125L20.709 7.04125Z"
                                fill="black"
                              />
                            </svg>
                          </div>
                          <div title="удалить" className="cases_table_delete">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM19 4H15.5L14.5 3H9.5L8.5 4H5V6H19V4Z"
                                fill="black"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="is_selected ml_55px">
                              {selected.some(
                                (selected) =>
                                  selected.review_num ===
                                  review.review_num
                              ) ? (
                                <SelectedIcon
                                  onClick={() => toggleSelected(review)}
                                />
                              ) : (
                                <div
                                  className="not_selected_item"
                                  onClick={() => toggleSelected(review)}
                                ></div>
                              )}
                            </div>
                      </div>
                    </td>
                  </tr>
                ))
              : ""}
          </tbody>
        </table>
        <div className="cases_paginations">
          <Pagination allData={reviewData} paginationData={setReviews} />
        </div>
      </div>
    </div>
  );
}

export default Reviews;
