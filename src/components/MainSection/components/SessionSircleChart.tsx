import { useEffect, useState } from "react";
import classes from "../style.module.scss";


const dataList = [
  {
    title: "Desktop",
    value: 8085,
    percent: 80
  },
  {
    title: "Mobile",
    value: 8085,
    percent: 60
  },
  {
    title: "Tablets",
    value: 8085,
    percent: 30
  },
];


const SessionSircleChart = () => {
  const [percents, setPersents] = useState([1, 1, 1]);

  useEffect(() => {
    let currentPercent = 0;

    const values = dataList.map(item => item.percent);

    const incFunc = () => {
      let i = 0;
      const interval = setInterval(() => {
        if (values[currentPercent] > i) {
          setPersents(prev => {
            const newArr = [...prev];
            newArr[currentPercent] += 1;
            i++;
            return newArr;
          })
        } else {
          clearInterval(interval);
          currentPercent++;
          if (currentPercent <= 3) {
            incFunc();
          }
        }
      }, 20);
    };

    setTimeout(() => {
      incFunc();
    }, 1200);



  }, []);



  return (
    <div
      style={{ animationDelay: "700ms" }}
      className="w-[45%] slowShow"
    >
      <h2 className="main-title mb-[15px]">Sessions By Device</h2>
      <div className="h-[294px] rounded-[10px] bg-white px-[50px] py-[55px] flex items-center">
        <div className="mr-[96px]">
          <div className="w-[184px] h-[184px] relative">
            <svg
              className={classes.scFirstSvg}
              viewBox="0 0 210 210"
            >
              <circle cx="100" cy="100" r="100"              ></circle>
              <circle
                // style={{ strokeDashoffset: `calc(625 - (625 * ${dataList[0].percent}) / 100)` }}
                style={{ strokeDashoffset: `calc(625 - (625 * ${percents[0]}) / 100)` }}
                cx="100" cy="100" r="100"
              ></circle>
            </svg>

            <div className={`${classes.scSecondSvg} w-[108px] h-[108px]`}>
              <svg
                viewBox="-2 0 214 214"
              >
                <circle cx="100" cy="100" r="98"></circle>
                <circle
                  style={{ strokeDashoffset: `calc(608 - (608 * ${percents[1]}) / 100)` }}
                  cx="100" cy="100" r="98"
                ></circle>
              </svg>
            </div>

            <div className={`${classes.scThirdSvg} w-[42px] h-[42px]`}>
              <svg
                viewBox="0 0 214 214"
              >
                <circle cx="100" cy="100" r="89"></circle>
                <circle
                  style={{ strokeDashoffset: `calc(550 - (550 * ${percents[2]}) / 100)` }}
                  cx="100" cy="100" r="89"
                ></circle>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[21px]">
          {
            dataList.map(item => (
              <div key={item.title}>
                <p className="text-[#5A5881] font-bold text-sm mb-[3px]">{item.title}</p>
                <div className="text-[#15134B] font-medium text-lg">
                  {item.value.toLocaleString()} <span className="text-[#5A5881] text-[13px]">{item.percent}%</span>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
};

export default SessionSircleChart;