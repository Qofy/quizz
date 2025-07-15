import { useReducer, useState } from "react";

  const initialState = {count: 0, step: 1};

function DateCounter() {
  // const [count, setCount] = useState(0);
  const [state, dispatch] =useReducer(reducer, initialState);

  const{step, count} = state;

  function reducer(state, action) {
    switch (action.type) {
      case "inc":
        return {...state, count: state.count + state.step};
        case "dec":
        return {...state, count: state.count - state.step};
      case "setcount":
        return {...state, count: action.payload};
      case "setstep":
        return {...state, step: action.payload};
        case "reset":
        return {count: 0, step: 1};
      default:
        return state;
    }
  }


  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + state.count);

  const dec = function () {
    // setCount((count) => count - 1);
    // setCount((count) => count - step);
    dispatch({ type: "dec" });
  };

  const inc = function () {
    dispatch({ type: "inc" });
  };

  const defineCount = function (e) {
    dispatch({ type: "set", payload: Number(e.target.value) });
  };

  const defineStep = function (e) {
    dispatch({ type: "setstep", payload: Number(e.target.value) });
  };

  const reset = function () {
    dispatch({ type: "reset" });
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
