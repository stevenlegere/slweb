// // A true or false trivia game that takes questions from the Open Trivia Database API (https://opentdb.com/)
// // The user can determines the category and the difficulty
// // The user is given 10 questions and is scored based on how many they get right
// // Append the api url with the category and difficulty using the categoryString and difficultyString variables
// // Once the user has selected their category and difficulty, the form will disappear and the game will begin
// // using "element.style.display = 'none';" the start of the game will be hidden
// // Once the user has seleted their answer, the buttons will disappear and the next question will appear
// // If the user gets the question right, the score will increase by 1
// // While the number of questions asked is equal to or less than 10, the game continues
// // The user can play again by clicking the play again button that appears under the score

import React, { useState, useEffect } from "react";
import he from "he";
import MyAppBar from "../../MyAppBar/MyAppBar";
import "./Quiz.css";
import CardForQuiz from "./CardForQuiz";

const Quiz = () => {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [showForm, setShowForm] = useState(true);
  const [answered, setAnswered] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const selectedCategory = document.getElementById("category").value;
    const selectedDifficulty = document.getElementById("difficulty").value;
    const apiUrl = `https://opentdb.com/api.php?amount=10&category=${selectedCategory}&difficulty=${selectedDifficulty}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const modifiedData = data.results.map((question) => {
          const options = [...question.incorrect_answers, question.correct_answer];
          const decodedOptions = options.map((option) => he.decode(option));
          return { ...question, options: decodedOptions };
        });
        setScore(0);
        setCurrentQuestion(0);
        setQuestions(modifiedData);
        setShowForm(false);
      });
  };

  const handleAnswerClick = (selectedAnswer) => {
    if (!answered) {
      const question = questions[currentQuestion];
      if (question.correct_answer === selectedAnswer) {
        setScore(score + 1);
        setCorrectAnswer("Correct!");
      } else {
        setCorrectAnswer(
          `Incorrect  ¯\\_(ツ)_/¯ \n
          The correct answer is\n${he.decode(question.correct_answer)}`
          );
      }
      setAnswered(true);
    }
  };

  const handleNextQuestionClick = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setAnswered(false);
      setCorrectAnswer("");
    } else {
      setShowForm(true);
    }
  };

  const handlePlayAgainClick = () => {
    setShowForm(true);
  };

  useEffect(() => {
    if (showForm) {
      setScore(0);
      setCurrentQuestion(0);
    }
  }, [showForm]);

  return (
    <>
      <MyAppBar />
      <div className="quiz-container">
      {showForm ? (
        <>
          <CardForQuiz
            handleFormSubmit={handleFormSubmit}
            category={category}
            setCategory={setCategory}
            difficulty={difficulty}
            setDifficulty={setDifficulty}
          />
          <form className="quiz-form" onSubmit={handleFormSubmit}>
            <label htmlFor="category" className="category-label">
              Choose a category:
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="9">General Knowledge</option>
                <option value="15">Video Games</option>
                <option value="16">Board Games</option>
                <option value="17">Science &amp; Nature</option>
                <option value="18">Computers</option>
                <option value="19">Mathematics</option>
                <option value="20">Mythology</option>
                <option value="21">Sports</option>
                <option value="22">Geography</option>
                <option value="23">History</option>
                <option value="24">Politics</option>
                <option value="25">Art</option>
                <option value="26">Celebrities</option>
                <option value="27">Animals</option>
                <option value="28">Vehicles</option>
                <option value="29">Comics</option>
                <option value="30">Gadgets</option>
                <option value="31">Japanese Anime &amp; Manga</option>
                <option value="32">Cartoon &amp; Animations</option>
              </select>
            </label>
            <br />
            <label htmlFor="difficulty">
              Choose a difficulty:
              <select
                id="difficulty"
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
              >
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </label>
            <br />
            <input type="submit" value="Start Game" />
          </form>
        </>
      ) : (
        <>
          {currentQuestion >= questions.length - 1 ? (
            <div className="quiz-score">
              <div>You scored {score} out of {questions.length}</div>
              <button onClick={handlePlayAgainClick}>Play again</button>
            </div>
          ) : (
            <div className="quiz-question">
              <div>{he.decode(questions[currentQuestion].question)}</div>
              <div className="button-container">
                {questions[currentQuestion].type === "multiple" ? (
                  questions[currentQuestion].options.map((answer, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerClick(answer)}
                      disabled={answered}
                      className="button-text"
                    >
                      {answer}
                    </button>
                  ))
                ) : (
                  <>
                    <button
                      onClick={() => handleAnswerClick("True")}
                      disabled={answered}
                      className="button-text"
                    >
                      True
                    </button>
                    <button
                      onClick={() => handleAnswerClick("False")}
                      disabled={answered}
                      className="button-text"
                    >
                      False
                    </button>
                  </>
                )}
              </div>
              {answered && (
                <div>
                  {correctAnswer.startsWith("Correct") ? (
                    <span style={{ color: "#2497ea" }}>{correctAnswer}</span>
                  ) : (
                    <span style={{ color: "#ff6d80" }}>{correctAnswer}</span>
                  )}

                  {currentQuestion + 1 < questions.length && (
                    <button
                      onClick={handleNextQuestionClick}
                      className="next-question-button-text"
                    >
                      Next question
                    </button>
                  )}
                </div>
              )}
            </div>
          )}
        </>
      )}
      </div>
    </>
  );
};

export default Quiz;