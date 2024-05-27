import Cards from "./components/Cards";
import DailyChart from "./components/DailyChart";
import PerformanceChart from "./components/PerformanceChart";
import SessionLineChart from "./components/SessionLineChart";
import SessionSircleChart from "./components/SessionSircleChart";

const MainSection = () => {
  return (
    <section className="mt-[38px] mb-[30px]">

      <div className="flex justify-between gap-x-[40px]">
        <PerformanceChart />
        <SessionSircleChart />
      </div>

      <div
      style={{animationDelay: "1000ms"}}
       className="flex justify-between gap-x-[40px] mt-[30px] slowShow"
      >
        <div className="w-[55%]">
          <Cards />
          <div className="flex justify-between items-center mt-[30px]">
            <h2 className="main-title">Daily Overview</h2>
            <button className="text-sm text-[#15134B] px-[45px] py-[13px] rounded-[10px] bg-white">Export</button>
          </div>
        </div>
        <SessionLineChart />
      </div>

      <div className="flex justify-between gap-x-[40px] mt-[40px]">
        <DailyChart />
        <div
        style={{animationDelay: "1900ms"}}
         className="w-[45%] px-[30px] py-[46px] bg-white rounded-[10px] flex justify-between items-center slowShow"
        >
          <div>
            <p className="text-[#15134B] font-bold text-xl mb-[10px]">Session By Device</p>
            <p className="text-[#A3ABBD] font-medium text-[13px]">Top Region & Session</p>
          </div>
          <button className="bg-[#563BFF] px-[47px] py-[15px] font-bold rounded-[10px] text-white">
            View
          </button>
        </div>
      </div>

    </section>
  )
};

export default MainSection;