import { useDispatch } from "react-redux";
import { decrement, increment } from "./redux/features/counter/counterSlice";
import { useAppSelector } from "./redux/hook";

function App() {
  const dispatch = useDispatch();
  const { count } = useAppSelector((state) => state.counter);
  const handelIncrement = (value: number) => {
    dispatch(increment(value));
  };
  const handelDecrement = (value: number) => {
    dispatch(decrement(value));
  };

  return (
    <div>
      <h1>Counter with Redux</h1>
      <button onClick={() => handelIncrement(10)}>Increment</button>
      <div>{count}</div>
      <button onClick={() => handelDecrement(1)}>decrement</button>
    </div>
  );
}

export default App;
