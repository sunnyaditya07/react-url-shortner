import "./style.css";
import InputOne from "./InputOne";
import BackgroundAnimate from "./BackgroundAnimate";
import LinkResult from "./LinkResult";
import { useState } from "react";
function App() {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="container">
      <InputOne setInputValue={setInputValue} />
      <BackgroundAnimate />
      <LinkResult inputValue={inputValue} setInputValue={setInputValue} />
    </div>
  );
}

export default App;
