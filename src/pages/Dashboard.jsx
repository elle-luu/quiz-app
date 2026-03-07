import { useNavigate } from "react-router-dom"

function Dashboard({ startQuiz }) {

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">

      <h2 className="text-3xl font-bold mb-8">
        Choose Category
      </h2>

      <div className="grid grid-cols-2 gap-6">

        <button className="bg-blue-500 text-white p-4 rounded">
          Science
        </button>

        <button className="bg-green-500 text-white p-4 rounded">
          Maths
        </button>

        <button className="bg-purple-500 text-white p-4 rounded">
        Genral Knowledge
        </button>

        <button className="bg-red-500 text-white p-4 rounded">
          Geography
        </button>

      </div>

    </div>
  )
}

export default Dashboard