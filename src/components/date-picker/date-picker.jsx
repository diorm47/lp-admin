import React, { useState } from "react";
import "./date-picker.css";
import left_arrow from "../../assets/icons/keyboard_arrow_left.png";
import right_arrow from "../../assets/icons/keyboard_arrow_right.png";
import date_to_show_icon from "../../assets/icons/calendar_today.png";
import subDays from "date-fns/subDays";
import { DateRangePicker } from "rsuite";
import "rsuite/dist/rsuite-rtl.css";

function DatePicker({ setSelectedTime }) {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const customLocale = {
    ok: "Подтвердить",
    sunday: "Вс",
    monday: "Пн",
    tuesday: "Вт",
    wednesday: "Ср",
    thursday: "Чт",
    friday: "Пт",
    saturday: "Сб",
    today: "Сегодня",
    yesterday: "Вчера",
    last7Days: "Последние 7 дней",
    last30Days: "Последние 30 дней",
    last90Days: "Последние 90 дней",
    last180Days: "Последние 180 дней",
    thisMonth: "Текущий месяц",
    lastMonth: "Предыдущий месяц",
    january: "Январь",
    february: "Февраль",
    march: "Март",
    april: "Апрель",
    may: "Май",
    june: "Июнь",
    july: "Июль",
    august: "Август",
    september: "Сентябрь",
    october: "Октябрь",
    november: "Ноябрь",
    december: "Декабрь",
  };

  const [selectedRange, setSelectedRange] = useState([new Date(), new Date()]);

  const handleDateRangeChange = (value) => {
    setSelectedRange(value);
    setSelectedTime(value);
    setIsCalendarOpen(false);
  };

  const openCalendar = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  const convert = (date_data) => {
    var date = new Date(date_data);
    var formattedDate = date.toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    return formattedDate.split("г")[0];
  };


  return (
    <div className="date_picker">
      <DateRangePicker
        locale={customLocale}
        value={selectedRange}
        onChange={handleDateRangeChange}
        onShortcutClick={(shortcut, event) => {
          console.log(shortcut);
        }}
        open={isCalendarOpen}
        placement="bottomEnd"
      />

      <div className="analytic_date_toggler">
        <div className="analytic_date_toggler_btn analytic_date_toggler_left">
          <img src={left_arrow} alt="" />
        </div>
        <div className="analytic_date_toggler_data" onClick={openCalendar}>
          <img src={date_to_show_icon} alt="" />
          {selectedRange[0].toLocaleDateString() !=
          selectedRange[1].toLocaleDateString() ? (
            <>
              {" "}
              <p>{convert(selectedRange[0].toLocaleDateString())}</p>-
            </>
          ) : (
            ""
          )}

          <p>{convert(selectedRange[1].toLocaleDateString())}</p>
        </div>
        <div className="analytic_date_toggler_btn analytic_date_toggler_right">
          <img src={right_arrow} alt="" />
        </div>
      </div>
    </div>
  );
}

export default DatePicker;
