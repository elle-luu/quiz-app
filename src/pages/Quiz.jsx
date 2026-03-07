import { useParams } from "react-router-dom"

const { category } = useParams()

function Quiz({ question, answers }) {

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">

      <div className="bg-white p-8 rounded-xl shadow-lg w-96">

        <h2 className="text-xl font-bold mb-6">
          {question}
        </h2>

        <div className="flex flex-col gap-4">

          {answers.map((answer, index) => (
            <button
              key={index}
              className="border p-3 rounded hover:bg-gray-100"
            >
              {answer}
            </button>
          ))}

        </div>

      </div>

    </div>
  )
}

export default Quiz