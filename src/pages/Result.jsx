import { useNavigate } from "react-router-dom"


function Result({ score, total }) {

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-500 text-white">

      <h1 className="text-3xl font-bold mb-4">
        Quiz Completed
      </h1>

      <p className="text-xl">
        Score: {score} / {total}
      </p>

      <button className="mt-6 bg-white text-green-600 px-6 py-3 rounded">
        Play Again
      </button>

    </div>
  )
}

export default Result