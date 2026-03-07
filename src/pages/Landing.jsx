import { useNavigate } from "react-router-dom"

function Landing() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-purple-600 text-white">

      <h1 className="text-4xl font-bold mb-6">
        Quiz App
      </h1>

      <button
        onClick={() => navigate("/dashboard")}
        className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold"
      >
        Start Quiz
      </button>

    </div>
  )
}

export default Landing