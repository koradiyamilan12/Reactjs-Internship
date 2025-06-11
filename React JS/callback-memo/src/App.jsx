import { useCallback, useState } from "react";
import ExpensiveCalculation from "./components/ExpensiveCalculation";
import ChildButton from "./components/ChildButton";

const App = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(5);

  //useCallback: function is avoid re-rendering ChildButton
  const handlerClick = useCallback(() => {
    console.log("Child button clicked!");
  }, []);

  return (
    <div>
      <h1>React UseMemo & useCallback Demo</h1>

      {/* useMemo example inside component */}
      <ExpensiveCalculation number={number} />

      <button onClick={() => setCount(count + 1)}>
        Re-render Parent ({count})
      </button>

      <button onClick={() => setNumber(number + 1)}>
        Increment Number ({number})
      </button>

      {/* useCallback example */}
      <ChildButton onClick={handlerClick} />
    </div>
  );
};

export default App;
