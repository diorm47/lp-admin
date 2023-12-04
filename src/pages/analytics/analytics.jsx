import React from "react";
import "./analytics.css";

import left_arrow from "../../assets/icons/keyboard_arrow_left.png";
import right_arrow from "../../assets/icons/keyboard_arrow_right.png";
import date_to_show_icon from "../../assets/icons/calendar_today.png";
import { ReactComponent as Menu } from "../../assets/icons/analytic-card-menu.svg";
import { ReactComponent as Card1Icon } from "../../assets/icons/analytics/card-1-icon.svg";
import { ReactComponent as Card2Icon } from "../../assets/icons/analytics/card-2-icon.svg";
import { ReactComponent as Card3Icon } from "../../assets/icons/analytics/card-3-icon.svg";
import { ReactComponent as Card4Icon } from "../../assets/icons/analytics/card-4-icon.svg";
import { ReactComponent as ArrowTop } from "../../assets/icons/analytics/arrow-top.svg";

function Analytics() {
  return (
    <div className="template_page analytics_page">
      <div className="template_page_title">
        <h1>Аналитика</h1>
      </div>
      <div className="analytic_date_toggler">
        <div className="analytic_date_toggler_btn analytic_date_toggler_left">
          <img src={left_arrow} alt="" />
        </div>
        <div className="analytic_date_toggler_data">
          <img src={date_to_show_icon} alt="" />
          <p>6 ноября 2023 </p>
        </div>
        <div className="analytic_date_toggler_btn analytic_date_toggler_right">
          <img src={right_arrow} alt="" />
        </div>
      </div>

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
                <p>156 568 ₽</p>
              </div>
              <div className="analytic_card_right_data">
                <ArrowTop />
                <p>34.6%</p>
              </div>
            </div>
            <div className="analytic_descr">
              <p>В сравнении с 12 окт 2023 </p>
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
                <p>132 082 ₽</p>
              </div>
              <div className="analytic_card_right_data">
                <ArrowTop />
                <p>34.6%</p>
              </div>
            </div>
            <div className="analytic_descr">
              <p>В сравнении с 12 окт 2023 </p>
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
                <p>23 460 ₽</p>
              </div>
              <div className="analytic_card_right_data">
                <ArrowTop />
                <p>34.6%</p>
              </div>
            </div>
            <div className="analytic_descr">
              <p>В сравнении с 12 окт 2023 </p>
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
                <p>210</p>
              </div>
              <div className="analytic_card_right_data">
                <ArrowTop />
                <p>34.6%</p>
              </div>
            </div>
            <div className="analytic_descr">
              <p>В сравнении с 12 окт 2023 </p>
            </div>
          </div>
        </div>
        <div className="analytics_bottom_cards">
          <div className="analytics_bottom_left analytics_bottom_card">
            <h2 className="analytics_bottom_card_title">Kexibt</h2>
          </div>
          <div className="analytics_bottom_right analytics_bottom_card">
            <h2 className="analytics_bottom_card_title">Best Sellers</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
