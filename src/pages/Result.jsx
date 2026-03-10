import { useNavigate, useLocation } from "react-router-dom"

function Result() {
  const navigate = useNavigate();
  // BUG FIXED: Result was receiving score/total as props, but Quiz sends them
  // via navigate('/result', { state: { score, total } }) — must use useLocation
  const { state } = useLocation();
  const score = state?.score ?? 0;
  const total = state?.total ?? 0;

  const percentage = total > 0 ? Math.round((score / total) * 100) : 0;

  const getMessage = () => {
    if (percentage === 100) return "Perfect score! 🎉";
    if (percentage >= 70) return "Great job! 👏";
    if (percentage >= 40) return "Not bad! Keep practicing 💪";
    return "Better luck next time! 📚";
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#959BB5] text-white gap-6 p-8">

      <h1 className="text-4xl font-extrabold text-[#3A3E6C]">
        Quiz Completed!
      </h1>

      <div className="bg-white rounded-3xl shadow-lg p-10 flex flex-col items-center gap-4 w-full max-w-sm">
        <p className="text-6xl font-extrabold text-[#3A3E6C]">{score}/{total}</p>
        <p className="text-xl font-semibold text-gray-500">{percentage}%</p>
        <p className="text-lg font-medium text-gray-600 text-center">{getMessage()}</p>
      </div>

      <div className="flex gap-4 mt-4">
        <button
          onClick={() => navigate('/dashboard')}
          className="px-8 py-3 bg-[#3A3E6C] text-white font-bold rounded-full hover:bg-[#656A9E] hover:scale-105 transition-transform"
        >
          Play Again
        </button>
        <button
          onClick={() => navigate('/')}
          className="px-8 py-3 bg-white text-[#3A3E6C] font-bold rounded-full hover:bg-gray-100 hover:scale-105 transition-transform"
        >
          Home
        </button>
      </div>

    </div>
  )
}

export default Result