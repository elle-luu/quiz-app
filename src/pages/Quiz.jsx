import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { API_URLS } from "../services/api";


export default function Quiz() {
  const { category } = useParams();
  const navigate = useNavigate(); // For redirecting to results
  
  const [questions, setQuestions] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0); // Track correct answers
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1)
    }, 1000)

    if (timer === 0) {
      nextQuestion() // automatically go to next question
    }

    return () => clearInterval(interval)
  }, [timer])

  const nextQuestion = () => {
    setTimer(15) // reset timer
    setCurrentQuestion(currentQuestion + 1)
  }

  const question = questions[currentQuestion]

  return (
    <div>
      <h2>Time left: {timer}s</h2>
      <h2>{question.question}</h2>
      {/* render answers here */}
      <button onClick={nextQuestion}>Next</button>
    </div>
  )

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch(API_URLS[category]);
        const data = await response.json();
        
        const formatted = data.results.map(q => ({
          question: q.question,
          // Shuffle answers
          answers: [...q.incorrect_answers, q.correct_answer].sort(() => Math.random() - 0.5),
          correct: q.correct_answer
        }));

        setQuestions(formatted);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch questions", err);
      }
    };
    loadData();
  }, [category]);

  const handleAnswer = (selectedAnswer) => {
    // 1. Check if correct
    if (selectedAnswer === questions[currentIdx].correct) {
      setScore(prev => prev + 1);
    }

    // 2. Go to next question or Finish
    const nextIdx = currentIdx + 1;
    if (nextIdx < questions.length) {
      setCurrentIdx(nextIdx);
    } else {
      // Send the score to your Result page via state
      navigate('/result', { state: { score: score + (selectedAnswer === questions[currentIdx].correct ? 1 : 0), total: questions.length } });
    }
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center font-bold">Loading Quiz...</div>;
  if (questions.length === 0) return <div className="text-center mt-20">No questions found for {category}.</div>;

  const currentQuestion = questions[currentIdx];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        {/* Progress bar */}
        <div className="text-sm text-gray-500 mb-2">Question {currentIdx + 1} / {questions.length}</div>
        
        <h2 className="text-xl font-bold mb-6" 
            dangerouslySetInnerHTML={{ __html: currentQuestion.question }} />
        
        <div className="flex flex-col gap-4">
          {currentQuestion.answers.map((answer, index) => (
            <button
              key={index}
              className="border-2 border-gray-100 p-3 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-all text-left"
              onClick={() => handleAnswer(answer)}
              dangerouslySetInnerHTML={{ __html: answer }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};