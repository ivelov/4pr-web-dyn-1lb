"use client"
import { useState } from "react";

export default function Home() {
  const [operation, setOperation] = useState("+");
  const [operand1, setOperand1] = useState(0);
  const [operand2, setOperand2] = useState(0);
  const [result, setResult] = useState("");

  function calculate() {
    switch (operation) {
      case "+":
        setResult((operand1 + operand2).toString());
        break;
      case "-":
        setResult((operand1 - operand2).toString());
        break;
      case "*":
        setResult((operand1 * operand2).toString());
        break;
      case "/":
        setResult((operand1 / operand2).toString());
        break;
    }
  }

  return (
    <main className="p-3">
      <input
        className="bordered w-100"
        type="number"
        value={operand1}
        onChange={(event) => setOperand1(parseFloat(event.target.value))}
      ></input>
      <select
        className="mx-2"
        value={operation}
        onChange={(event) => setOperation(event.target.value)}
      >
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input
        className="bordered w-100"
        type="number"
        value={operand2}
        onChange={(event) => setOperand2(parseFloat(event.target.value))}
      ></input>
      <br />
      <button className="bordered mt-2 p-2" onClick={calculate}>Calculate</button>
      <p>Result: {result}</p>
    </main>
  );
}
