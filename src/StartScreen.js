import { type } from "@testing-library/user-event/dist/type";

function StartScreen({ numberQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to the React Quiz App</h2>
      <h3>{numberQuestions} questions to test your React</h3>
      <button className="btn btn-ui" onClick={()=> {dispatch({type:"start"})}}>Start Quiz</button>
    </div>
  );
}
export default StartScreen;