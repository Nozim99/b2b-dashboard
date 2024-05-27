import { DurationIcon, RateIcon, SessionIcon, UsersIcon } from "../../Icons";

const cardsList = [
  {
    Icon: UsersIcon,
    title: "Users",
    value: "72.6k",
    percent: "+25%",
    bgColor: "#3575FF1a"
  },
  {
    Icon: SessionIcon,
    title: "Sessions",
    value: "87.2k",
    percent: "+47%",
    bgColor: "#F366431a"
  },
  {
    Icon: RateIcon,
    title: "Bounce Rate",
    value: "26.3%",
    percent: "-28%",
    bgColor: "#4524F81a"
  },
  {
    Icon: DurationIcon,
    title: "Session Duration",
    value: "2m 18s",
    percent: "+13%",
    bgColor: "#24D6A51a"
  }
];

const Cards = () => {
  return (
    <div className="flex justify-between gap-[30px]"    >
      {
        cardsList.map(item => (
          <div
            key={item.title}
            className="bg-white p-[20px] flex-1 rounded-[10px]"
          >
            <div
              style={{ backgroundColor: item.bgColor }}
              className="w-[50px] h-[50px] rounded-[10px] flex justify-center items-center mb-[30px]"
            >
              <item.Icon />
            </div>
            <p className="text-sm font-bold text-[#5A5881]">{item.title}</p>
            <p className="text-2xl font-medium text-[#15134B] my-[10px]">{item.value}</p>
            <p className="text-sm font-medium text-[#5A5881]">{item.percent}</p>
          </div>
        ))
      }
    </div>
  )
};

export default Cards;