import Option from "./Option";
function Questions({question, answer, dispatch}) {
  return (
    <div className="start">
      <h4>{question.question}</h4>
    <Option question={question} answer={answer} dispatch={dispatch}/>
    </div>
  )
}

export default Questions
