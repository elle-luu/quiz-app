import { useNavigate } from "react-router-dom"
import scienceIcon from '../assets/Science.png'
import mathIcon from '../assets/Maths.png'
import gkIcon from '../assets/gen knowledge.png'
import geoIcon from '../assets/Geography.png' 



function Dashboard({ startQuiz }) {
  const navigate = useNavigate();

  //this func. handles the click
  const handleCategoryClick = (category) => {
    navigate(`/quiz/${category.toLowerCase().replace(' ','-')}`);
  };


  

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-[#959BB5]">

      <h2 className="text-3xl font-bold text-[#3A3E6C] mb-8">
        Select Category
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10 mt-10 items-start max-w-7xl mx-auto">

        <button className="w-full max-w-sm h-32 md:w-80 md:h-40 flex items-center justify-start gap-6 text-2xl bg-[#8A8CAC] text-white p-8 rounded-full transition-transform hover:bg-[#656A9E] hover:scale-105 text-left">
         {/* The Icon */}
          <div className="bg-white/10 p-3 rounded-2xl">
            <img src={scienceIcon} alt="Science" className="w-16 h-16 object-contain" />
          </div>
                    {/* The Text: text-left ensures it stays near the icon */}
          <span className="text-2xl md:text-3xl font-bold text-white text-left">
            Science
          </span> 
        </button>

        <button className="w-full max-w-sm h-32 md:w-80 md:h-40 flex items-center justify-start gap-6 text-2xl bg-[#8A8CAC] text-white p-8 rounded-full transition-transform hover:bg-[#656A9E] hover:scale-105 text-left">
         {/* The Icon */}
          <div className="bg-white/10 p-3 rounded-2xl">
            <img src={mathIcon} alt="Maths" className="w-16 h-16 object-contain" />
          </div>
                    {/* The Text: text-left ensures it stays near the icon */}
          <span className="text-2xl md:text-3xl font-bold text-white text-left">
            Maths
          </span> 
        </button>

        <button className="w-full max-w-sm h-32 md:w-80 md:h-40 flex items-center justify-start gap-6 text-2xl bg-[#8A8CAC] text-white p-8 rounded-full transition-transform hover:bg-[#656A9E] hover:scale-105 text-left">
          {/* The Icon */}
          <div className="bg-white/10 p-3 rounded-2xl">
            <img src={gkIcon} alt="General Knowledge" className="w-16 h-16 object-contain" />
          </div>
                    {/* The Text: text-left ensures it stays near the icon */}
          <span className="text-2xl md:text-3xl font-bold text-white text-left">
            General Knowledge
          </span> 
        </button>

        <button className="w-full max-w-sm h-32 md:w-80 md:h-40 flex items-center justify-start gap-6 text-2xl bg-[#8A8CAC] text-white p-8 rounded-full transition-transform hover:bg-[#656A9E] hover:scale-105 text-left">
          {/* The Icon */}
          <div className="bg-white/10 p-3 rounded-2xl">
            <img src={geoIcon} alt="Geography" className="w-16 h-16 object-contain" />
          </div>
                    {/* The Text: text-left ensures it stays near the icon */}
          <span className="text-2xl md:text-3xl font-bold text-white text-left">
            Geography
          </span> 
        </button>

      </div>

    </div>
  )
}

export default Dashboard


    
        
       
          


    