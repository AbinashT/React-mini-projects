import { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [result, setResult] = useState("");

  const clickHandler = (event) => {
    setResult(result.concat(event.target.value));
  };

  const resultHandler = () => {
    setResult(eval(result));
  };

  const clearHandler = () => {
    setResult("");
  };

  return (
    <>
      <div className="calc">
        <input type="text" id="answer" placeholder="0" value={result} />

        <input
          type="button"
          value="9"
          className="button"
          onClick={clickHandler}
        />
        <input
          type="button"
          value="8"
          className="button"
          onClick={clickHandler}
        />
        <input
          type="button"
          value="7"
          className="button"
          onClick={clickHandler}
        />
        <input
          type="button"
          value="+"
          className="button"
          onClick={clickHandler}
        />
        <input
          type="button"
          value="6"
          className="button"
          onClick={clickHandler}
        />
        <input
          type="button"
          value="5"
          className="button"
          onClick={clickHandler}
        />
        <input
          type="button"
          value="4"
          className="button"
          onClick={clickHandler}
        />
        <input
          type="button"
          value="-"
          className="button"
          onClick={clickHandler}
        />
        <input
          type="button"
          value="3"
          className="button"
          onClick={clickHandler}
        />
        <input
          type="button"
          value="2"
          className="button"
          onClick={clickHandler}
        />
        <input
          type="button"
          value="1"
          className="button"
          onClick={clickHandler}
        />
        <input
          type="button"
          value="/"
          className="button"
          onClick={clickHandler}
        />
        <input
          type="button"
          value="."
          className="button"
          onClick={clickHandler}
        />
        <input
          type="button"
          value="0"
          className="button"
          onClick={clickHandler}
        />
        <input
          type="button"
          value="%"
          className="button"
          onClick={clickHandler}
        />
        <input
          type="button"
          value="*"
          className="button"
          onClick={clickHandler}
        />
        <input
          type="button"
          value="Clear"
          className="button button1"
          onClick={clearHandler}
        />
        <input
          type="button"
          value="="
          className="button button1"
          onClick={resultHandler}
        />
      </div>
    </>
  );
};

export default Calculator;