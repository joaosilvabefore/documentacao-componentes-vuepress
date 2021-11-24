export const DEFAULT_OPTIONS = {
  responsive: true,
  maintainAspectRatio: false,
  legend: { display: false },
  scales: {
    yAxes: [
      {
        ticks: {
          padding: 16,
          fontColor: "#5A5D61",
          fontSize: 12,
          lineHeight: "15px",
          fontFamily: "Montserrat"
        },
        gridLines: {
          color: "#eef0f2",
          zeroLineColor: "#eef0f2",
          drawTicks: true,
          display: true
        }
      }
    ],
    xAxes: [
      {
        barPercentage: 1.0,
        ticks: {
          padding: 8,
          fontColor: "#5A5D61",
          fontSize: 16,
          lineHeight: "21px",
          fontFamily: "Montserrat",
          fontStyle: "600"
        },
        
      }
    ]
  }
};

export default {
  DEFAULT_OPTIONS
};