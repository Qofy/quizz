function Option({question, answer, dispatch}) {
  const isAnswered = answer !== null;
  return (
    <div className="options">
      {question.options.map((option, index)=>{
        return (
          <button className={`btn btn-option ${index === answer ? "answer" : ""} ${isAnswered ? index === question.correctOption ? "correct" : "wrong" :""}`} key={option} disabled={isAnswered} onClick={()=>{dispatch({type: "newanswer", payload: index})}}>
            {option}
          </button>
        );
      })}
    </div>
  )
}
export default Option;
