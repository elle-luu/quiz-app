import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { fetchQuestions } from "../services/api";

export default function Quiz() {
  const { category } = useParams();
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [timer, setTimer] = useState(15);
  const timerRef = useRef(null);

useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      setError(null);
      try {
        const results = await fetchQuestions(category);
        
        // v2 API specific mapping
        const formatted = results.map(q => {
          // The Trivia API v2 uses these exact keys:
          const correct = q.correctAnswer; 
          const incorrect = q.incorrectAnswers || [];
          
          // Combine and shuffle
          const all = [...incorrect, correct].sort(() => Math.random() - 0.5);

          return {
            // v2 nests question text inside a 'question' object
            question: q.question?.text || "Question text missing",
            answers: all,
            correct: correct,
          };
        });

        setQuestions(formatted);
      } catch (err) {
        console.error("Failed to fetch questions:", err);
        setError("Couldn't load questions. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [category]);
  // Timer Logic
  useEffect(() => {
    if (loading || questions.length === 0) return;

    setTimer(15);
    timerRef.current = setInterval(() => {
      setTimer(prev => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [currentIdx, loading, questions.length]);

  // Auto-advance when timer hits 0
  useEffect(() => {
    if (timer === 0 && questions.length > 0) {
      goToNext(score);
    }
  }, [timer]);

  const goToNext = (currentScore) => {
    clearInterval(timerRef.current);
    const nextIdx = currentIdx + 1;
    if (nextIdx < questions.length) {
      setCurrentIdx(nextIdx);
    } else {
      navigate('/result', { state: { score: currentScore, total: questions.length } });
    }
  };

  const handleAnswer = (selectedAnswer) => {
    clearInterval(timerRef.current);
    const isCorrect = selectedAnswer === questions[currentIdx].correct;
    const newScore = isCorrect ? score + 1 : score;
    
    if (isCorrect) setScore(newScore);
    goToNext(newScore);
  };

  if (loading) return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-[#959BB5]">
      <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin" />
      <p className="text-white font-bold text-xl">Loading Quiz...</p>
    </div>
  );

  if (error) return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-[#959BB5] p-8">
      <p className="text-white font-bold text-xl text-center">{error}</p>
      <button onClick={() => window.location.reload()}
        className="px-8 py-3 bg-[#3A3E6C] text-white font-bold rounded-full hover:bg-[#656A9E]">
        Try Again
      </button>
    </div>
  );

  if (questions.length === 0) return (
    <div className="min-h-screen flex items-center justify-center bg-[#959BB5] text-white font-bold text-xl">
      No questions found for "{category}".
    </div>
  );

  const currentQuestion = questions[currentIdx];

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#959BB5] p-4">
      <div className="bg-white p-8 rounded-3xl shadow-lg w-full max-w-md">

        {/* Progress and Timer */}
        <div className="flex justify-between text-sm mb-2">
          <span className="font-semibold text-gray-500">Question {currentIdx + 1} / {questions.length}</span>
          <span className={`font-bold ${timer <= 5 ? 'text-red-500' : 'text-gray-400'}`}>⏱ {timer}s</span>
        </div>

        {/* Visual Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
          <div 
            className="bg-[#3A3E6C] h-2 rounded-full transition-all duration-1000"
            style={{ width: `${(timer / 15) * 100}%` }} 
          />
        </div>

        <h2 className="text-lg font-bold mb-6 text-[#3A3E6C] text-center">
          {currentQuestion.question}
        </h2>

        {/* Answer Options */}
        <div className="flex flex-col gap-3">
          {currentQuestion.answers.map((answer, index) => (
            <button 
              key={index}
              className="border-2 border-gray-100 p-3 rounded-xl hover:bg-[#959BB5]/20 hover:border-[#3A3E6C] transition-all text-center font-medium"
              onClick={() => handleAnswer(answer)}
            >
              {answer}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}