import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counter/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return(
    <div>
      <div>
        <button
          aria-label="Incremente value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decremente value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

export default Counter;