import { useEffect, useState } from "react";

const dataList = [
  {
    title: "Direct",
    percent: 60.28,
    bgColor: "#563BFF"
  },
  {
    title: "Direct",
    percent: 80.65,
    bgColor: "#FF7049"
  },
  {
    title: "Direct",
    percent: 45.34,
    bgColor: "#20C997"
  },
];

const SessionLineChart = () => {
  const [percents, setPersents] = useState([0, 0, 0]);

  useEffect(() => {
    let currentPercent = 0;
    const values = dataList.map(item => item.percent);

    const incFunc = () => {
      let i = 0;
      const interval = setInterval(() => {
        if (values[currentPercent] > i) {
          i++;
          setPersents(prev => {
            const newArr = [...prev];
            newArr[currentPercent] = i;
            return newArr;
          });
        } else {
          clearInterval(interval);
          currentPercent++;
          if (currentPercent <= 3) {
            incFunc();
          }
        }
      }, 12)
    };

    setTimeout(() => {
      incFunc();
    }, 2000)
  }, []);

  return (
    <div
      style={{ animationDelay: "1300ms" }}
      className="bg-white rounded-[10px] w-[45%] p-[30px] pb-0 slowShow"
    >
      <h2 className="main-title mb-[25px]">Sessions By Device</h2>
      <table className="w-full">
        <thead className="">
          <tr className="text-[#15134B] text-sm pb-[22px]">
            <th className="pb-[22px] border-b border-[#F6F8FA] text-start w-[115px]">Channel</th>
            <th className="pb-[22px] border-b border-[#F6F8FA] text-start">Traffic (%)</th>
            <th className="pb-[22px] border-b border-[#F6F8FA] text-start">Value</th>
          </tr>
        </thead>
        <tbody >
          {
            dataList.map((item, index) => (
              <tr
                key={item.title}
                className="h-[60px]"
              >
                <td>{item.title}</td>
                <td                  >
                  <div className="w-[234px] h-[6px] rounded-full bg-[#F2F3F9]"                  >
                    <div
                      style={{ backgroundColor: item.bgColor, width: `${percents[index]}%` }}
                      className="h-full rounded-full"
                    ></div>
                  </div>
                </td>
                <td>{item.percent}%</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
};

export default SessionLineChart;