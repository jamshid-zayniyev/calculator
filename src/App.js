import { useState } from "react";
import Calculator from "./components/Calculator";

function App() {
  const [showCalc,setShowCalc]  =useState(false)
  return <>
  <button className="btn" onClick={()=>setShowCalc(prev=>!prev)}>Show Calc</button>
  {showCalc ?<Calculator/> : null }
  </>
}

export default App;
