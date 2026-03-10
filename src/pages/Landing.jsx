import { useNavigate } from "react-router-dom"
import logo from "../assets/start_logo.png"

// BUG FIXED: removed dead second `return` block that was unreachable code
const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-between font-poppins bg-[#959BB5] py-16 px-4 overflow-hidden">

      <div className="flex flex-col items-center gap-10">
        <h1 className="text-6xl font-extrabold text-[#3A3E6C] tracking-tight">
          QuizLab
        </h1>
        <img
          src={logo}
          alt="Quiz Brain Icon"
          className="w-80 h-auto aspect-auto drop-shadow-[0_35px_60px_-15px_rgba(0,0,0,0.8)]"
        />
      </div>

      <div className="h-28" />

      <button
        onClick={() => navigate('/dashboard')}
        className="px-12 py-5 text-2xl font-bold text-white bg-[#3A3E6C] rounded-full transition-transform hover:bg-[#656A9E] hover:scale-105"
      >
        Start Quiz
      </button>

    </div>
  );
}

export default Landing