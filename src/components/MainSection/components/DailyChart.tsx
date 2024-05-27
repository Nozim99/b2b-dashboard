import { getPercent } from "../../../utils/getPercent";
import classes from "../style.module.scss";

const dataList = [
  {
    today: 5461,
    expected: 8085,
    title: "USERS",
    color: "#563BFF",
    bgColor: "#EFECFF"
  },
  {
    today: 140,
    expected: 120,
    title: "GOALS",
    color: "#FF7049",
    bgColor: "#FFF3F0"
  }
]

const DailyChart = () => {

  return (
    <div
      style={{ animationDelay: "1600ms" }}
      className="w-[55%] flex justify-between gap-[30px] slowShow"
    >
      {
        dataList.map((item) => (
          <div
            key={item.title}
            className="px-[20px] py-[40px] flex items-center justify-between grow bg-white rounded-[10px]"
          >
            <div>
              <p className={classes.valueNumber}>{item.today.toLocaleString()}</p>
              <p className={classes.title}>Today</p>
            </div>
            <div className="bg-green-500s relative w-[58px] h-[58px] rounded-full flex justify-center items-center">
              <div
                style={{
                  backgroundColor: item.bgColor,
                  color: item.color
                }}
                className="absolute font-medium text-[10px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50px] h-[50px] rounded-full flex justify-center items-center"
              >
                {item.title}
              </div>
              <svg viewBox="2 2 52 52" className={classes.svg}>
                <circle cx="23" cy="23" r="23"></circle>
                <circle
                  style={{
                    stroke: item.color,
                    strokeDashoffset: getPercent(item.today, item.expected)
                  }}
                  cx="23" cy="23" r="23"
                ></circle>
              </svg>
            </div>
            <div className="text-end">
              <p className={classes.valueNumber}>{item.expected.toLocaleString()}</p>
              <p className={classes.title}>Expected</p>
            </div>
          </div>
        ))
      }
    </div>
  )
};

export default DailyChart;