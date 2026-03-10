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
        const formatted = results.map(q => {
          const correct = q.correctAnswer;
          const incorrect = q.incorrectAnswers || [];
          const all = [...incorrect, correct].sort(() => Math.random() - 0.5);
          return {
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

  useEffect(() => {
    if (loading || questions.length === 0) return;
    setTimer(15);
    timerRef.current = setInterval(() => {
      setTimer(prev => {
        if (prev <= 1) { clearInterval(timerRef.current); return 0; }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [currentIdx, loading, questions.length]);

  useEffect(() => {
    if (timer === 0 && questions.length > 0) goToNext(score);
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
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#959BB5' }}>
      <p style={{ color: 'white', fontWeight: 'bold', fontSize: '1.25rem' }}>Loading Quiz...</p>
    </div>
  );

  if (error) return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#959BB5', padding: '2rem' }}>
      <p style={{ color: 'white', fontWeight: 'bold', fontSize: '1.25rem', textAlign: 'center' }}>{error}</p>
      <button onClick={() => window.location.reload()}
        style={{ marginTop: '1rem', padding: '0.75rem 2rem', backgroundColor: '#3A3E6C', color: 'white', fontWeight: 'bold', borderRadius: '9999px', border: 'none', cursor: 'pointer' }}>
        Try Again
      </button>
    </div>
  );

  if (questions.length === 0) return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#959BB5', color: 'white' }}>
      No questions found for "{category}".
    </div>
  );

  const currentQuestion = questions[currentIdx];

  return (
    <div style={{width: '100vw', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#959BB5', padding: '1rem' }}>
      <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '1.5rem', boxShadow: '0 10px 30px rgba(0,0,0,0.15)', width: '100%', maxWidth: '28rem' }}>

        {/* Progress and Timer */}
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
          <span style={{ color: '#6b7280', fontWeight: '600' }}>Question {currentIdx + 1} / {questions.length}</span>
          <span style={{ fontWeight: 'bold', color: timer <= 5 ? '#ef4444' : '#9ca3af' }}>⏱ {timer}s</span>
        </div>

        {/* Timer Bar */}
        <div style={{ width: '100%', backgroundColor: '#e5e7eb', borderRadius: '9999px', height: '8px', marginBottom: '1.5rem' }}>
          <div style={{ backgroundColor: '#3A3E6C', height: '8px', borderRadius: '9999px', transition: 'width 1s linear', width: `${(timer / 15) * 100}%` }} />
        </div>

        {/* Question */}
        <h2 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#3A3E6C', textAlign: 'center' }}>
          {currentQuestion.question}
        </h2>

        {/* Answer Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {currentQuestion.answers.map((answer, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(answer)}
              style={{
                border: '2px solid #e5e7eb',
                padding: '0.75rem 1rem',
                borderRadius: '0.75rem',
                backgroundColor: 'white',
                color: '#1f2937',
                fontWeight: '500',
                fontSize: '1rem',
                textAlign: 'center',
                cursor: 'pointer',
                width: '100%',
              }}
            >
              {answer}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}