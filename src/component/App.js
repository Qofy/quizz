// import DateCounter from "./DateCounter";
import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "../StartScreen";
import Questions from "./Questions";
function reducer(state, action){
  switch(action.type){
    case "dataReceived":
      return{...state, questions: action.payload, stat: "Ready"};
    case "dataFailed":
      return{...state, stat: "Error"};
      case "start":
        return{...state, stat: "Active"};
      default:
    throw new Error("Action unknown: ");
  }
}
const initialState={
  questions: [],
  //loading, error, active, finished, ready 
  stat: "Loading",
  index: 0
}
export default function App() {
  const [{questions, stat,index}, dispatch] = useReducer(reducer, initialState);

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
  {stat === "Active" && <Questions question={questions[index]}/>}


</Main>
    </div>
  );
}