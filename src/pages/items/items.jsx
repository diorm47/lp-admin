import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-icon.svg";
import { ReactComponent as SelectedIcon } from "../../assets/icons/selected-icon.svg";
import { ReactComponent as TopIcon } from "../../assets/icons/top.svg";
import "../cases/cases.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { mainApi } from "../../components/utils/main-api";
import Snacbar from "../../components/snackbar/snackbar";
import Pagination from "../../components/pagionation/pagination";

function Items() {
  const navigate = useNavigate();
  const [isSnackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarText, setSnackbarText] = useState("");
  const snackbarActions = (snackText) => {
    setSnackbarVisible(true);
    setSnackbarText(snackText);
    setTimeout(() => {
      setSnackbarVisible(false);
    }, 2000);
  };

  const [casesItems, setCasesItems] = useState("");
  const [items, setItems] = useState("");
  const [rarity, setRarity] = useState([]);

  const getItems = () => {
    mainApi
      .getItemsAction()
      .then((res) => {
        setCasesItems(res.results);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const getRarityList = () => {
    mainApi
      .getRarytyListActions()
      .then((res) => {
        setRarity(res.results);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    getItems();
    getRarityList()
  }, []);

  const deleteItem = (id) => {
    mainApi
      .deleteItemAction(id)
      .then((res) => {
        snackbarActions("Предмет удалён!");
        getItems();
      })
      .catch((error) => {
        console.log("error", error);
      });
    setTimeout(() => {
      getItems();
      snackbarActions("Предмет удалён!");
    }, 1500);
  };

  const editItem = (id) => {
    navigate(`/edit-item/${id}`);
  };

  const [selected, setSelected] = useState([]);
  const toggleSelected = (data) => {
    const filteredSelectedItems = selected.some(
      (selected) => selected.item_id === data.item_id
    );
    if (filteredSelectedItems) {
      setSelected(selected.filter((item) => item.item_id !== data.item_id));
    } else {
      setSelected([...selected, data]);
    }
  };
  const toggleAllDataSelected = () => {
    if (selected.length == casesItems.length) {
      setSelected([]);
    } else {
      setSelected([...casesItems]);
    }
  };

  const categories = {
    crystal: "Кристалл",
    blessing: "Благословение",
    ghost_item: "Призрачный пердмет",
  };

  const getItemType = (type) => {
    return categories[type];
  };

  const [activeFilter, setActiveFilter] = useState("");
  const filterItems = (type) => {
    setActiveFilter(type);
    if (type !== "all") {
      const filtered = casesItems.filter(
        (item) => item.rarity_category && item.rarity_category.rarity_id === type
      );

      setItems(filtered);
    } else {
      setItems(casesItems.slice(0, 10));
    }
  };

  return (
    <>
      {isSnackbarVisible ? (
        <Snacbar visible={isSnackbarVisible} text={snackbarText} />
      ) : (
        ""
      )}
      <div className="template_page employees_page">
        <div className="template_page_title">
          <h1>Предметы</h1>
          <div className="top_cases_actions">
            <NavLink to="/rarity">
              <button className="main_btn add_categories_btn main_btn_template_orange">
                <p>Категории редкости</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M12.6663 8.66667H8.66634V12.6667H7.33301V8.66667H3.33301V7.33334H7.33301V3.33334H8.66634V7.33334H12.6663V8.66667Z"
                    fill="white"
                  />
                </svg>
              </button>
            </NavLink>
            <NavLink to="/create-item">
              <button className="main_btn add_case_btn main_btn_template">
                <p>Добавить предмет</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M12.6663 8.66667H8.66634V12.6667H7.33301V8.66667H3.33301V7.33334H7.33301V3.33334H8.66634V7.33334H12.6663V8.66667Z"
                    fill="white"
                  />
                </svg>
              </button>
            </NavLink>
          </div>
        </div>
        <div className="template_page_content">
          <div className="cases_wrapper">
            <div className="cases_top_togglers">
              <button
                className={
                  activeFilter == "all"
                    ? "main_btn top_active_filter"
                    : "main_btn"
                }
                onClick={() => filterItems("all")}
              >
                <p>Все кейсы</p>
              </button>
              {rarity && rarity.length
                ? rarity.map((rarity) => (
                    <button
                      className={
                        activeFilter == rarity.rarity_id
                          ? "main_btn top_active_filter"
                          : "main_btn"
                      }
                      key={rarity.name}
                      onClick={() => filterItems(rarity.rarity_id)}
                    >
                      <p>{rarity.name}</p>
                    </button>
                  ))
                : ""}
            </div>
            <div className="cases_top_actions">
              <button className="main_btn main_btn_template_red">
                <p>Действие над предметом</p>
              </button>
              <div className="users_search">
                <SearchIcon />
                <input type="text" placeholder="Поиск" />
              </div>
            </div>
            <div className="user_line"></div>

            {items && items.length ? (
              <table className="cases_table">
                <thead>
                  <tr>
                    <td> ID предмета</td>
                    <td>Название</td>
                    <td>Категория</td>
                    <td>Тип</td>
                    <td className="tac">Цена</td>
                    <td className="tac">Закупочная цена</td>
                    <td className="tac">Дата создания</td>
                    <td>
                      <div className="select_all">
                        <div className="is_selected ">
                          {selected.length == casesItems.length ? (
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
                  {items && items.length
                    ? items.map((item) => (
                        <tr>
                          <td>{item.item_id}</td>
                          <td>{item.name}</td>
                          <td>{item.rarity_category && item.rarity_category.name}</td>
                          <td>{getItemType(item.type)}</td>
                          <td className="tac">{item.price} ₽</td>
                          <td className="tac">{item.purchase_price} ₽</td>

                          <td className="tac">
                            {item.created_at.split("T")[0]}
                          </td>
                          <td>
                            <div className="cases_table_actions">
                              <div className="cases_table_actions_list">
                     
                                <div
                                  title="редактировать"
                                  className="cases_table_edit"
                                  onClick={() => editItem(item.item_id)}
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
                        
                                <div
                                  title="удалить"
                                  className="cases_table_delete"
                                  onClick={() => deleteItem(item.item_id)}
                                >
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
                              <div className="is_selected ">
                                {selected.some(
                                  (selected) =>
                                    selected.item_id === item.item_id
                                ) ? (
                                  <SelectedIcon
                                    onClick={() => toggleSelected(item)}
                                  />
                                ) : (
                                  <div
                                    className="not_selected_item"
                                    onClick={() => toggleSelected(item)}
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
            ) : (
              <p className="empty_error">Предметы отсутствуют</p>
            )}
            <div className="cases_paginations">
              {casesItems ? (
                <Pagination allData={casesItems} paginationData={setItems} />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Items;
