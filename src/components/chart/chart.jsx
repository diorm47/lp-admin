import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

function AnalyticsChart() {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: "Доходы",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
        color: "rgb(57, 181, 74)",
      },
      {
        name: "Расходы",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
        color: "rgb(235, 30, 35)",
      },
      {
        name: "Открыто кейсов",
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
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
            return `${Number(value).toFixed(2)} USDT`;
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
     
            vertical: 10
        },
      },
    },
  });

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
