import React, { useEffect, useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [numbers, setNumbers] = useState(0);
  const [sum, setSum] = useState(0);

  function handleInput(e) {
    const digit = Number(e.target.value);
    if (!isNaN(digit)) {
      setNumbers(prev => [...prev, digit]);
    }
  }

  useEffect(() => {
    const calculateSum=() => {
      const total = numbers.reduce((acc, val) => acc + val, 0);
      setSum(total);
    };

    calculateSum();
  }, [numbers]);

  return (
    <div>
      {/* Do not remove the main div */}
      <h2>Sum Calculator</h2>
      <input type="number" onChange={handleInput} />
      <p>{sum}</p>
    </div>
  );
};

export default App;
