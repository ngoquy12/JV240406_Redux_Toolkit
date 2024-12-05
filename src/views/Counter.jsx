import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../redux/slices/counterSlice";

export default function Counter() {
  const { counter } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  return (
    <div>
      <h3>Counter: {counter}</h3>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}
