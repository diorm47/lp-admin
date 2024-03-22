import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { mainApi } from "../utils/main-api";
import { subDays } from "date-fns";

function AnalyticsChart() {
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
  const [chartData, setChartData] = useState({
    series: [
      {
        name: "Доходы",
        data: [44, 55, 57, 56, 61, 58, 63],
        color: "rgb(57, 181, 74)",
      },
      {
        name: "Расходы",
        data: [76, 85, 101, 98, 87, 105, 91],
        color: "rgb(235, 30, 35)",
      },
      {
        name: "Открыто кейсов",
        data: [35, 41, 36, 26, 45, 48, 52],
        color: "rgb(243, 172, 14)",
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          colors: {
            ranges: [
              {
                from: 100000000,
                to: -100000000,
                color: "rgb(173, 173, 173)",
              },
            ],
          },
          columnWidth: "20%",
        },
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
      yaxis: {
        labels: {
          formatter: function (y) {
            return y.toFixed(2);
          },
        },
      },

      xaxis: {
        type: "datetime",
        categories: [
          "03/03",
          "03/04",
          "03/05",
          "03/06",
          "03/07",
          "03/08",
          "03/09",
          "03/10",
        ],
        labels: {
          format: "MM/dd",
          style: {
            colors: "rgb(173, 173, 173)",
          },
        },
      },
      tooltip: {
        y: {
          formatter: function (value) {
            return `${Number(value).toFixed(2)} USD`;
          },
        },
      },
      legend: {
        position: "right",
        fontFamily: "Inter",
        fontSize: "12px",
        markers: {
          width: 20,
          height: 20,
          radius: 3,
        },
        itemMargin: {
          vertical: 10,
        },
      },
    },
  });
  const updateChartData = (newIncomeData, newOutlayData, newCasesData) => {
    const updatedIncomeData = newIncomeData.map((entry) => entry.income);
    const updatedOutlayData = newOutlayData.map((entry) => entry.outlay);
    const updatedCasesData = newCasesData.map((entry) => entry.cases);

    // Обновляем данные графика
    setChartData({
      ...chartData,
      series: [
        { ...chartData.series[0], data: updatedIncomeData },
        { ...chartData.series[1], data: updatedOutlayData },
        { ...chartData.series[2], data: updatedCasesData },
      ],
      options: {
        ...chartData.options,
        xaxis: {
          ...chartData.options.xaxis,
          categories: newIncomeData.map((entry) => entry.date),
        },
      },
    });
  };

  const fetchData = () => {
    Promise.all([
      mainApi.getGraphsIncomeAction(
        formatDate(selectedTime[0]),
        formatDate(selectedTime[1])
      ),
      mainApi.getGraphsOutlayAction(
        formatDate(selectedTime[0]),
        formatDate(selectedTime[1])
      ),
      mainApi.getGraphsCasesAction(
        formatDate(selectedTime[0]),
        formatDate(selectedTime[1])
      ),
    ])
      .then(([incomeRes, outlayRes, casesRes]) => {
        // Обновляем данные графика и ось x
        updateChartData(incomeRes, outlayRes, casesRes);

        // Обновляем дату, если необходимо
        const startDate = new Date(selectedTime[0]);
        const endDate = new Date(selectedTime[1]);
        if (
          formatDate(startDate) !== incomeRes[0].date ||
          formatDate(endDate) !== incomeRes[incomeRes.length - 1].date
        ) {
          setSelectedTime([
            new Date(incomeRes[0].date),
            new Date(incomeRes[incomeRes.length - 1].date),
          ]);
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, [selectedTime]);

  return (
    <ReactApexChart
      options={chartData.options}
      series={chartData.series}
      type="bar"
      height={370}
    />
  );
}

export default AnalyticsChart;
