// import DateCounter from "./DateCounter";
import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
function reducer(state, action){
  switch(action.type){
    case "dataReceived":
      return{...state, questions: action.payload, stat: "Ready"};
    case "dataFailed":
      return{...state, stat: "Error"};
      default:
    throw new Error("Action unknown: ");
  }
}
const initialState={
  questions: [],
  //loading, error, active, finished, ready 
  stat: "Loading"
}
export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(()=>{
    fetch("http://localhost:3001/questions")
    .then(res => res.json())
    .then(data => dispatch({type: "dataReceived", payload: data}))
    .catch(err => dispatch({type: "dataFailed"}));
  }, []);
  return (
    <div className="App"> 
<Header/>
<Main>
  <p>1/15</p>
  <p>Question?</p>
</Main>
    </div>
  );
}