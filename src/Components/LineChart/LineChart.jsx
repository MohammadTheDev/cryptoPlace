import React, { useEffect, useState } from "react";
import Chart from "react-google-charts";

const LineChart = ({ historyCalData }) => {
  const [data, setData] = useState([["Date", "Prices"]]);

  useEffect(() => {
    let dataCopy = [["Date", "Prices"]];

    if (historyCalData.prices) {
      historyCalData.prices.map((item) => {
        dataCopy.push([
          `${new Date(item[0]).toLocaleDateString().slice(0, -5)}`,
          item[1],
        ]);
      });

      setData(dataCopy);
    }
  }, [historyCalData]);

  return (
    <div>
      <Chart chartType="LineChart" data={data} height="100%" legendToggle />
    </div>
  );
};

export default LineChart;
