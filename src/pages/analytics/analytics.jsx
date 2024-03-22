import React, { useEffect, useState } from "react";
import "./analytics.css";

import { ReactComponent as Menu } from "../../assets/icons/analytic-card-menu.svg";
import { ReactComponent as Card1Icon } from "../../assets/icons/analytics/card-1-icon.svg";
import { ReactComponent as Card2Icon } from "../../assets/icons/analytics/card-2-icon.svg";
import { ReactComponent as Card3Icon } from "../../assets/icons/analytics/card-3-icon.svg";
import { ReactComponent as Card4Icon } from "../../assets/icons/analytics/card-4-icon.svg";
import { ReactComponent as Card5Icon } from "../../assets/icons/analytics/card-5-icon.svg";
import { ReactComponent as Card6Icon } from "../../assets/icons/analytics/card-6-icon.svg";
import { ReactComponent as Card7Icon } from "../../assets/icons/analytics/card-7-icon.svg";
import DatePicker from "../../components/date-picker/date-picker";
import { ReactComponent as ArrowTop } from "../../assets/icons/analytics/arrow-top.svg";
import AnalyticsChart from "../../components/chart/chart";
import subDays from "date-fns/subDays";
import { mainApi } from "../../components/utils/main-api";

function Analytics() {
  const [selectedTime, setSelectedTime] = useState([
    subDays(new Date(), 6),
    new Date(),
  ]);
  function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  const convert = (date_data) => {
    var date = new Date(date_data);
    var formattedDate = date.toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    return formattedDate.split("г")[0];
  };
  const balanceConverter = (dateString) => {
    if (dateString) {
      const date = new Date(dateString);
      const currentDate = new Date();

      const differenceInMilliseconds = currentDate - date;
      const differenceInHours = differenceInMilliseconds / (1000 * 60 * 60);

      return Math.floor(differenceInHours);
    }
  };
  const [analytics, setAnalytics] = useState({});
  const [analyticsCommon, setAnalyticsCommon] = useState({});
  const [moogold, setMoogold] = useState({});

  const getAnalytics = () => {
    mainApi
      .getAnalyticsAction(
        formatDate(selectedTime[0]),
        formatDate(selectedTime[1])
      )
      .then((res) => {
        setAnalytics(res);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  const getAnalyticsCommon = () => {
    mainApi
      .getAnalyticsCommonAction()
      .then((res) => {
        setAnalyticsCommon(res);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  const getMoogold = () => {
    mainApi
      .getAnalyticsMoogoldAction()
      .then((res) => {
        setMoogold(res);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    getAnalytics();
    getAnalyticsCommon();
    getMoogold();
  }, [selectedTime]);

  return (
    <div className="template_page analytics_page">
      <div className="template_page_title">
        <h1>Аналитика</h1>
      </div>

      <DatePicker setSelectedTime={setSelectedTime} />
      <div className="template_page_content ">
        <div className="analytic_cards">
          <div className="analytic_card">
            <div className="analytic_card_title">
              <p>Общий доход за день</p>
              <div>
                {" "}
                <Menu />
              </div>
            </div>
            <div className="analytic_card_data">
              <div className="analytic_card_left_data">
                <Card1Icon />
                <p>{analytics.total_income} ₽</p>
              </div>
              <div className="analytic_card_right_data">
                <ArrowTop />
                <p>34.6%</p>
              </div>
            </div>
            <div className="analytic_descr">
              <p>
                В сравнении с {convert(selectedTime[0].toLocaleDateString())}{" "}
              </p>
            </div>
          </div>
          <div className="analytic_card">
            <div className="analytic_card_title">
              <p>Общий расход за день</p>
              <div>
                {" "}
                <Menu />
              </div>
            </div>
            <div className="analytic_card_data">
              <div className="analytic_card_left_data">
                <Card2Icon />
                <p>{analytics.total_expense} ₽</p>
              </div>
              <div className="analytic_card_right_data">
                <ArrowTop />
                <p>34.6%</p>
              </div>
            </div>
            <div className="analytic_descr">
              <p>
                В сравнении с {convert(selectedTime[0].toLocaleDateString())}{" "}
              </p>
            </div>
          </div>
          <div className="analytic_card">
            <div className="analytic_card_title">
              <p>Чистая прибыль за день</p>
              <div>
                {" "}
                <Menu />
              </div>
            </div>
            <div className="analytic_card_data">
              <div className="analytic_card_left_data">
                <Card3Icon />
                <p>{analytics.profit} ₽</p>
              </div>
              <div className="analytic_card_right_data">
                <ArrowTop />
                <p>34.6%</p>
              </div>
            </div>
            <div className="analytic_descr">
              <p>
                В сравнении с {convert(selectedTime[0].toLocaleDateString())}{" "}
              </p>
            </div>
          </div>
          <div className="analytic_card">
            <div className="analytic_card_title">
              <p>Открыто кейсов за день</p>
              <div>
                {" "}
                <Menu />
              </div>
            </div>
            <div className="analytic_card_data">
              <div className="analytic_card_left_data">
                <Card4Icon />
                <p>{analyticsCommon.total_open}</p>
              </div>
              <div className="analytic_card_right_data">
                <ArrowTop />
                <p>34.6%</p>
              </div>
            </div>
            <div className="analytic_descr">
              <p>
                В сравнении с {convert(selectedTime[0].toLocaleDateString())}{" "}
              </p>
            </div>
          </div>
          <div className="analytic_card">
            <div className="analytic_card_title">
              <p>Новых пользователей за день</p>
              <div>
                {" "}
                <Menu />
              </div>
            </div>
            <div className="analytic_card_data">
              <div className="analytic_card_left_data">
                <Card5Icon />
                <p>{analytics.count_users}</p>
              </div>
              <div className="analytic_card_right_data">
                <ArrowTop />
                <p>90</p>
              </div>
            </div>
            <div className="analytic_descr">
              <p>
                В сравнении с {convert(selectedTime[0].toLocaleDateString())}{" "}
              </p>
            </div>
          </div>
          <div className="analytic_card">
            <div className="analytic_card_title">
              <p>Активные пользователи онлайн</p>
              <div>
                {" "}
                <Menu />
              </div>
            </div>
            <div className="analytic_card_data">
              <div className="analytic_card_left_data">
                <Card6Icon />
                <p>{analyticsCommon.online}</p>
              </div>
              <div className="analytic_card_right_data">
                <ArrowTop />
                <p>90</p>
              </div>
            </div>
            <div className="analytic_descr">
              <p>В сравнении с часом ранее</p>
            </div>
          </div>
          <div className="analytic_card">
            <div className="analytic_card_title">
              <p>Баланс MooGold</p>
              <div>
                {" "}
                <Menu />
              </div>
            </div>
            <div className="analytic_card_data">
              <div className="analytic_card_left_data">
                <Card7Icon />
                <p>${moogold.balance}</p>
              </div>
              <div className="analytic_card_right_data">
                <ArrowTop />
                <p>90</p>
              </div>
            </div>
            <div className="analytic_descr">
              {balanceConverter(moogold.date) > 1 ? (
                <p>{balanceConverter(moogold.date)} часов ранее</p>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="analytic_card">
            <div className="analytic_card_title">
              <p>
                GGR Общая сумма пополнений <br /> и выплат за все время
              </p>
              <div>
                {" "}
                <Menu />
              </div>
            </div>
            <div className="analytic_card_data">
              <div className="analytic_card_left_data">
                <Card1Icon />
                <p>{Math.round(analyticsCommon.ggr * 100) / 100} ₽</p>
              </div>
              <div className="analytic_card_right_data">
                <ArrowTop />
                <p>34.6%</p>
              </div>
            </div>
            <div className="analytic_descr">
              <p></p>
            </div>
          </div>
        </div>
        <div className="analytics_bottom_cards">
          <div className="analytics_bottom_left analytics_bottom_card">
            <div className="analytics_bottom_left_top">
              <h3>График доходов и расходов</h3>
              <div className="analytics_bottom_left_top_togglers">
                <p>Текущая неделя</p>
                <p>Месяц</p>
                <p>Год</p>
              </div>
            </div>
            <div className="analytics_graph">
              <AnalyticsChart />
            </div>
          </div>
          <div className="analytics_bottom_right ">
            <div className="analytic_card">
              <div className="analytic_card_title">
                <p>Средний доход на посетителя</p>
                <div>
                  {" "}
                  <Menu />
                </div>
              </div>
              <div className="analytic_card_data">
                <div className="analytic_card_left_data">
                  <Card1Icon />
                  <p>
                    {" "}
                    {Math.round(analyticsCommon.average_income * 100) /
                      100} ₽{" "}
                  </p>
                </div>
                <div className="analytic_card_right_data">
                  <ArrowTop />
                  <p>34.6%</p>
                </div>
              </div>
      
            </div>
            <div className="analytic_card">
              <div className="analytic_card_title">
                <p>Lifetime Value (LTV)</p>
                <div>
                  {" "}
                  <Menu />
                </div>
              </div>
              <div className="analytic_card_data">
                <div className="analytic_card_left_data">
                  <Card1Icon />
                  <p>156 568 ₽</p>
                </div>
                <div className="analytic_card_right_data">
                  <ArrowTop />
                  <p>34.6%</p>
                </div>
              </div>
              <div className="analytic_descr">
                <p>
                  В сравнении с {convert(selectedTime[0].toLocaleDateString())}{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
