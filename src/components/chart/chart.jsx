import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { mainApi } from "../utils/main-api";
import { subDays } from "date-fns";

function AnalyticsChart({selectedTime, setSelectedTimeChart}) {

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
        data: [0, 0, 0, 0, 0, 0, 0],
        color: "rgb(57, 181, 74)",
      },
      {
        name: "Расходы",
        data: [0, 0, 0, 0, 0, 0, 0],
        color: "rgb(235, 30, 35)",
      },
      {
        name: "Открыто кейсов",
        data: [0, 0, 0, 0, 0, 0, 0],
        color: "rgb(243, 172, 14)",
      },
      {
        name: "Доходы от кейсов",
        data: [0, 0, 0, 0, 0, 0, 0],
        color: "rgb(166, 0, 255)",
      },
      {
        name: "Чистая прибыль",
        data: [0, 0, 0, 0, 0, 0, 0],
        color: "#358ed7",
      },
      {
        name: "Новые пользователи",
        data: [0, 0, 0, 0, 0, 0, 0],
        color: "#fb8a01",
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
          columnWidth: "10px",
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
            return `${Number(value)}`;
            // return `${Number(value).toFixed(2)}`;
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
  const updateChartData = (newIncomeData, newOutlayData, newCasesData, casesIncome, total, users) => {
    const updatedIncomeData = newIncomeData.map((entry) => entry.income);
    const updatedOutlayData = newOutlayData.map((entry) => entry.outlay);
    const updatedCasesData = newCasesData.map((entry) => entry.count);
    const updatedCasesIncomeData = casesIncome.map((entry) => entry.income);
    const updatedTotalIncomeData = total.map((entry) => entry.profit);
    const updatedUsersData = users.map((entry) => entry.count);

    // Обновляем данные графика
    setChartData({
      ...chartData,
      series: [
        { ...chartData.series[0], data: updatedIncomeData },
        { ...chartData.series[1], data: updatedOutlayData },
        { ...chartData.series[2], data: updatedCasesData },
        { ...chartData.series[3], data: updatedCasesIncomeData },
        { ...chartData.series[4], data: updatedTotalIncomeData },
        { ...chartData.series[5], data: updatedUsersData },
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
      mainApi.getGraphsCasesIncomeAction(
        formatDate(selectedTime[0]),
        formatDate(selectedTime[1])
      ),
      mainApi.getGraphsTotalIncomeAction(
        formatDate(selectedTime[0]),
        formatDate(selectedTime[1])
      ),
      mainApi.getGraphsRegusersAction(
        formatDate(selectedTime[0]),
        formatDate(selectedTime[1])
      ),
      
    ])
      .then(([incomeRes, outlayRes, casesRes, casesIncome, total, users]) => {
        // Обновляем данные графика и ось x
        updateChartData(incomeRes, outlayRes, casesRes, casesIncome, total, users);

        // Обновляем дату, если необходимо
        const startDate = new Date(selectedTime[0]);
        const endDate = new Date(selectedTime[1]);
        if (
          formatDate(startDate) !== incomeRes[0].date ||
          formatDate(endDate) !== incomeRes[incomeRes.length - 1].date
        ) {
          setSelectedTimeChart([
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
