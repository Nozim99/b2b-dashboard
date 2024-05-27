import Chart from 'react-apexcharts';

const chartData = {
  options: {
    stroke: {
      curve: 'smooth',
      colors: ['#563BFF']
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    },
    chart: {
      toolbar: {
        show: false
      }
    },
  },
  series: [
    {
      name: 'Series 1',
      data: [20, 55, 16, 50, 22, 48, 20]
    },
  ],
};

const PerformanceChart = () => {
  return (
    <div
      style={{animationDelay: "400ms"}}
      className="w-[55%] slowShow"
    >
      <h2 className="main-title mb-[15px]">Performance</h2>
      <div className="h-[294px] rounded-[10px] bg-white">
        <Chart
          // @ts-ignore
          options={chartData.options}
          series={chartData.series}
          type="line"
          width="650"
          height="280"
        />
      </div>
    </div>
  )
};

export default PerformanceChart;