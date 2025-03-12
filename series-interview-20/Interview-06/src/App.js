import React, { useState } from "react";

const QUESTIONS = [
  {
    question: "2*(4+4) sonucu nedir?",
    answers: ["2", "4", "8", "16"],
    correct: 3,
  },
  {
    question: "9*9 sonucu nedir?",
    answers: ["18", "81", "80", "79"],
    correct: 1,
  },
  {
    question: "Formula 1'in 2022 şampiyonu kimdir?",
    answers: [
      "Max Verstappen",
      "Charles Leclerd",
      "Lewis Hamilton",
      "Lando Norris",
    ],
    correct: 0,
  },
  {
    question: "Formula 1 takviminde ilk sırada hangi grand prix vardır?",
    answers: [
      "Bahreyn Grand Prix",
      "Suudi Arabistan Grand Prix",
      "Avustralya Grand Prix",
      "Emilia Romagna Grand Prix",
    ],
    correct: 0,
  },
  {
    question: "Hangisi Formula 1 takımlarından değildir?",
    answers: [
      "Ford-AMG F1 Team",
      "Alfa Romeo F1 Team Orlen",
      "BWT Alpine F1 Team",
      "Oracle Red Bull Racing",
    ],
    correct: 0,
  },
];

function App() {
  return <Quiz questions={QUESTIONS} />;
}

const Quiz = ({ questions }) => {
  // KODUNUZ BURAYA GELECEK
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(null);

  const handleAnswerClick = (index) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = index;
    setAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      calculateScore(newAnswers);
    }
  };

  const calculateScore = (finalAnswers) => {
    let correctAnswersCount = 0;
    finalAnswers.forEach((answer, i) => {
      if (answer === questions[i].correct) {
        correctAnswersCount++;
      }
    });
    setScore((correctAnswersCount / questions.length) * 100);
  };

  const handlePreviousClick = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleResetClick = () => {
    setAnswers([]);
    setScore(null);
    setCurrentQuestionIndex(0);
  };

  if (score !== null) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h3 className="text-2xl font-bold mb-4">Quiz Completed.</h3>
        <p className="text-xl mb-6">Your Score: %{score}</p>
        <button
          onClick={handleResetClick}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Restart Quiz
        </button>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const selectedAnswer = answers[currentQuestionIndex];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h3 className="text-xl font-semibold mb-6 text-center">
        {currentQuestion.question}
      </h3>
      <ul className="space-y-4">
        {currentQuestion.answers.map((answer, index) => (
          <li key={index} className="flex flex-col items-center justify-center">
            <button
              onClick={() => handleAnswerClick(index)}
              className={`px-4 py-2 rounded border border-gray-200 ${
                /*answers[currentQuestionIndex] === index ? "bg-blue-200" : ""*/
                selectedAnswer === index ? "bg-blue-500 text-white" : "bg-white text-black"
              }`}
              /*style={{backgroundColor: 
            answers[currentQuestionIndex] === index ? "lightblue" : "white"}}*/
            >
              {answer}
            </button>
          </li>
        ))}
      </ul>
      {currentQuestionIndex > 0 && (
        <button
          onClick={handlePreviousClick}
          className="mt-6 bg-gray-400 text-white px-4 py-2 rounded"
        >
          Previous
        </button>
      )}
    </div>
  );
};

export default App;
