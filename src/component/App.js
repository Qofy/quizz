// import DateCounter from "./DateCounter";
import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "../StartScreen";
import Questions from "./Questions";
import NextQuestion from "./NextQuestion";

function reducer(state, action){
  switch(action.type){
    case "dataReceived":
      return{...state, questions: action.payload, stat: "Ready"};
    case "dataFailed":
      return{...state, stat: "Error"};
      case "start":
        return{...state, stat: "Active"};
      case"newanswer":
      const question =  state.questions.at(state.index);
      return {...state, answer: action.payload, point: action.payload === question.correctOption ? state.point + question.point : state.point};
    case "nextQuestion":
      return{...state, index: state.index+1, answer:null};
      default:
    throw new Error("Action unknown: ");
  }
}
const initialState={
  questions: [],
  //loading, error, active, finished, ready 
  stat: "Loading",
  index: 0,
  answer: null,
  point: 0
}
export default function App() {
  const [{questions, stat,index, answer}, dispatch] = useReducer(reducer, initialState);

  useEffect(()=>{
    fetch("http://localhost:3001/questions")
    .then(res => res.json())
    .then(data => dispatch({type: "dataReceived", payload: data}))
    .catch(err => dispatch({type: "dataFailed"}));
  }, []);

  const numberQuestions = questions.length;
  console.log("questions", questions);
  return (
    <div className="App"> 
<Header/>
<Main>
  {stat === "Loading" && <Loader/>}
  {stat === "Error" && <Error/>}
  {stat === "Ready" && <StartScreen numberQuestions={numberQuestions} dispatch={dispatch}/>}
  {<>
  stat === "Active" && <Questions question={questions[index]} answer={answer} dispatch={dispatch}/>
<NextQuestion dispatch={dispatch} answer={answer}/>
  </>
  }


</Main>
    </div>
  );
}