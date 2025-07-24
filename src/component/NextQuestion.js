function NextQuestion({dispatch, answer}) {
  if(answer === null) return;
  return (
    <button className="btn btn-ui" onClick={() =>{dispatch()}}>
      Next
    </button>
  )
}

export default NextQuestion
