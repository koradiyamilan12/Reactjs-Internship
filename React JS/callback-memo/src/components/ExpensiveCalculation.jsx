import { useMemo } from "react";

const ExpensiveCalculation = ({ number }) => {
  // useMemo: only re-calculates when number changes
  const factorial = useMemo(() => {
    console.log("Calculating factorial...");
    let result = 1;
    for (let i = 1; i <= number; i++) {
      result *= i;
    }
    return result;
  }, [number]);

  return (
    <div>
      <h2>
        Factorial of {number} is {factorial}
      </h2>
    </div>
  );
};

export default ExpensiveCalculation;
