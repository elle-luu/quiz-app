import { useNavigate } from "react-router-dom"
import scienceIcon from '../assets/Science.png'
import mathIcon from '../assets/Maths.png'
import gkIcon from '../assets/gen knowledge.png'
import geoIcon from '../assets/Geography.png' 



function Dashboard({ startQuiz }) {


  const Dashboard = () => {
  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <h2 className="text-4xl font-black text-indigo-900 mb-12 text-center">
        Select Category
      </h2>

      {/* 2. The Grid: items-start keeps them from stretching vertically */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-start">
        
        {/* Example Card: Repeat this for each category */}
        <button className="flex items-center justify-start gap-6 bg-[#3A3E6C] p-6 rounded-3xl shadow-xl hover:scale-105 transition-all w-full h-32 md:h-40">
          
          {/* The Icon */}
          <div className="bg-white/10 p-3 rounded-2xl">
            <img src={scienceIcon} alt="Science" className="w-16 h-16 object-contain" />
          </div>

          {/* The Text: text-left ensures it stays near the icon */}
          <span className="text-2xl md:text-3xl font-bold text-white text-left">
            Science
          </span>
          
        </button>

        {/* Add Maths, GK, and Geography buttons below using the same pattern... */}
        
      </div>
    </div>
  );
};

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-[#959BB5]">

      <h2 className="text-3xl font-bold text-[#3A3E6C] mb-8">
        Select Category
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10 mt-10 items-start max-w-7xl mx-auto">

        <button className="w-full max-w-sm h-32 md:w-80 md:h-40 flex items-center justify-start gap-6 text-2xl bg-[#8A8CAC] text-white p-8 rounded-full transition-transform hover:bg-[#656A9E] hover:scale-105 text-left">
          Science
        </button>

        <button className="w-full max-w-sm h-32 md:w-80 md:h-40 flex items-center justify-start gap-6 text-2xl bg-[#8A8CAC] text-white p-8 rounded-full transition-transform hover:bg-[#656A9E] hover:scale-105 text-left">
          Maths
        </button>

        <button className="w-full max-w-sm h-32 md:w-80 md:h-40 flex items-center justify-start gap-6 text-2xl bg-[#8A8CAC] text-white p-8 rounded-full transition-transform hover:bg-[#656A9E] hover:scale-105 text-left">
          General Knowledge
        </button>

        <button className="w-full max-w-sm h-32 md:w-80 md:h-40 flex items-center justify-start gap-6 text-2xl bg-[#8A8CAC] text-white p-8 rounded-full transition-transform hover:bg-[#656A9E] hover:scale-105 text-left">
          Geography
        </button>

      </div>

    </div>
  )
}

export default Dashboard