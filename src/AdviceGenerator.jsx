import React from "react";
import "./AdviceGenerator.css";
import Button from "./Button";
import { useState } from "react";

function AdviceGenerator(props) {
  const url = "https://api.adviceslip.com/advice";

  const [advice, setAdvice] = useState("");
  const [loading, setLoading] = useState(true);

  const handleClickAsync = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      const json = await response.json();
      console.log(json);
      setAdvice(json);
      setLoading(false);
    } catch (error) {
      console.error(`Could not get products: ${error}`);
    }
  };

  // const adviceID = advice.slip.id;
  // const adviceAdvice = advice.slip.advice;

  return (
    <div className="container">
      {loading ? (
        <div className="advice_container">
          <div className="advice">
            <h3>Press the dice, for advice!</h3>
          </div>
          <Button pressed={handleClickAsync} />
          <div className="split-border">
            <span>▼</span>
          </div>
        </div>
      ) : (
        <div className="advice_container">
          <div className="advice">
            <p>ADVICE #{advice.slip.id}</p>
            <h3>“{advice.slip.advice}”</h3>
          </div>
          <Button pressed={handleClickAsync} />
          <div className="split-border">
            <span>▼</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdviceGenerator;
