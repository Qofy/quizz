function StartScreen({ numberQuestions }) {
  return (
    <div className="start">
      <h2>Welcome to the React Quiz App</h2>
      <h3>{numberQuestions} questions to test your React</h3>
      <button className="btn btn-ui">Start Quiz</button>
    </div>
  );
}
export default StartScreen;