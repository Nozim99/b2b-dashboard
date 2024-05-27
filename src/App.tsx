import "./styles/main.scss";
import "./styles/component.scss";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MainSection from "./components/MainSection";

function App() {
  return (
    <div className="App">
      <div className="relative mx-auto w-[1470px]">
        <div className="absolute w-full h-full rounded-[20px] rotate-[3deg] bg-[#F7F8FB] opacity-50"></div>
        <div className="flex rounded-[20px] bg-[#F7F8FB] my-[126px] relative overflow-hidden">
          <Sidebar />
          <div className="grow mx-[30px]">
            <Navbar />
            <MainSection />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
