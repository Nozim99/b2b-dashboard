import { MailIcon, NotificationIcon, SearchIcon } from "../Icons";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center mt-[26px]">
      <div className="w-[334px] h-[50px] bg-white rounded-[10px] relative overflow-hidden show">
        <div className="absolute pointer-events-none top-1/2 -translate-y-1/2 left-[18px]">
          <SearchIcon />
        </div>
        <input
          type="text"
          className="outline-none text-sm text-[#5A5881] w-full h-full pl-[40px]"
          placeholder="search anything"
        />
      </div>
      <div className="flex items-center gap-x-[20px]">
        <button
          style={{ animationDelay: "400ms" }}
          className="show"
        >
          <MailIcon fill="#4E4E4E" />
        </button>
        <button
          style={{ animationDelay: "550ms" }}
          className="relative show"
        >
          <span className="w-[10px] h-[10px] bg-[#563BFF] rounded-full flex justify-center items-center text-white text-[6px] font-bold absolute bottom-1/2 left-[6px]">
            5
          </span>
          <NotificationIcon />
        </button>
        <button
          style={{
             backgroundImage: "url(https://futureoflife.org/wp-content/uploads/2020/08/elon_musk_royal_society.jpg)" ,
             animationDelay: "700ms"
            }}
          className="show w-[24px] h-[24px] rounded-full bg-cover bg-center"
        >
        </button>
      </div>
    </nav>
  )
};

export default Navbar;