import React from "react";
import "./analytics.css";

import { ReactComponent as UpIcon } from "../../assets/icons/up-icon.svg";
import { ReactComponent as UpDiagram } from "../../assets/icons/up-diagram.svg";
import { ReactComponent as DownIcon } from "../../assets/icons/down-icon.svg";
import { ReactComponent as DownDiagram } from "../../assets/icons/down-diagram.svg";

function Analytics() {
  return (
    <div className="template_page analytics_page">
      <div className="template_page_title">
        <h1>Аналитика</h1>
      </div>

      <div className="template_page_content ">
        <div className="analytics_page_wrapper">
          <div className="analytic_card">
            <div className="analytic_card_left">
              <div className="analytic_card_name">
                <p>Депозитов за сегодня</p>
              </div>
              <div className="analytic_card_cost">
                <p>250 230 ₽</p>
              </div>
            </div>
            <div className="analytic_card_right">
              <div className="analytic_card_position">
                <p>+12%</p>
                <UpIcon />
              </div>
              <div className="analytic_card_diagram">
                <UpDiagram />
              </div>
            </div>
          </div>
          <div className="analytic_card">
            <div className="analytic_card_left">
              <div className="analytic_card_name">
                <p>Депозитов за 7 дней</p>
              </div>
              <div className="analytic_card_cost">
                <p>250 230 ₽</p>
              </div>
            </div>
            <div className="analytic_card_right">
              <div className="analytic_card_position">
                <p>-8%</p>
                <DownIcon />
              </div>
              <div className="analytic_card_diagram">
                <DownDiagram />
              </div>
            </div>
          </div>
          <div className="analytic_card">
            <div className="analytic_card_left">
              <div className="analytic_card_name">
                <p>Депозитов за 30 дней</p>
              </div>
              <div className="analytic_card_cost">
                <p>4 250 230 ₽</p>
              </div>
            </div>
            <div className="analytic_card_right">
              <div className="analytic_card_position">
                <p>-12%</p>
                <DownIcon />
              </div>
              <div className="analytic_card_diagram">
                <DownDiagram />
              </div>
            </div>
          </div>
          <div className="analytic_card">
            <div className="analytic_card_left">
              <div className="analytic_card_name">
                <p>Выводов сегодня</p>
              </div>
              <div className="analytic_card_cost">
                <p>100 050 ₽</p>
              </div>
            </div>
            <div className="analytic_card_right">
              <div className="analytic_card_position">
                <p>+40%</p>
                <UpIcon />
              </div>
              <div className="analytic_card_diagram">
                <UpDiagram />
              </div>
            </div>
          </div>
          <div className="analytic_card site_pofit">
            <div className="analytic_card_name">
              <p>Профит сайта</p>
            </div>
            <div className="site_pofit_numbers">
              <p>100 170 ₽/ 630 000 ₽/ 2 400 000 ₽</p>
            </div>
            <div className="site_pofit_time">
              <p>сегодня / 7 дней / неделя</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
