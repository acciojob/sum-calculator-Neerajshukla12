import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [sum, setSum] = useState(0);

  function handleInput(e) {
    const digit = Number(e.target.value);
    setSum(prev => prev + digit);
  }

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
