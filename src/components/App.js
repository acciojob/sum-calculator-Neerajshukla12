
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const [sum,setSum]=useState(0);

  function handleinput(e) {
    let digit = +e.target.value;
    setSum(pre=>pre+ digit)
  }


  return (
    <div>
      {/* Do not remove the main div */}
      <h2>Sum Calculater</h2>
      <input type="Number" onChange={handleinput} />
      <p>{sum}</p>
    </div>
  )
}

export default App
