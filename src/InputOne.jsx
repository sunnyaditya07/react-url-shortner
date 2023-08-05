import { useState } from "react";

function InputOne({ setInputValue }) {
  const [value, setValue] = useState("");
  function handleClick() {
    setInputValue(value);
  }

  return (
    <>
      <div className="inputContainer">
        <h1>
          URL <span>Shortener</span>
        </h1>
        <div>
          <input
            type="text"
            placeholder="Enter Your Link"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button onClick={handleClick}>Shorten</button>
        </div>
      </div>
    </>
  );
}

export default InputOne;
