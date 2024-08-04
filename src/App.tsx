import { ChangeEvent, useState } from "react";
import "./App.css";

const pattern = /^\/\/(.+)\\n(.+)$/;

function App() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setExpression(e.target.value);
  };

  const onCalculate = () => {
    try {
      let delimeter = ",";
      let strExp = expression;
      if (pattern.test(expression)) {
        const matches = expression.match(pattern);
        if (matches && matches.length > 2) {
          delimeter = matches[1];
          strExp = matches[2];
        }
      }
      const strNumbers = strExp.split(delimeter);
      const result = strNumbers.reduce((total, num) => {
        // console.log("num", num, /^[0-9]+[.]{0,1}[0-9]*$/.test(num))
        if (!/^-?\d*\.?\d+$/.test(num.trim())) return total;

        if (Math.sign(parseInt(num.trim())) === -1) {
          throw new Error(`negative numbers not allowed ${num.trim()}`);
        }

        total += parseInt(num.trim());
        return total;
      }, 0);
      setResult(`Output: ${result}`);
    } catch (e) {
      console.log("e", e);
      setResult((e as Error).message);
    }
  };

  return (
    <div className="p-8 flex flex-1 items-center justify-center flex-col">
      <div className="flex space-x-2 items-center">
        <input
          className="h-10 border border-slate-500 rounded flex flex-1 w-64 px-4"
          type="text"
          data-testid="input-expression"
          onChange={onChange}
          value={expression}
        />
        <button
          onClick={onCalculate}
          className="bg-slate-950 text-white px-4 py-2 rounded hover:bg-slate-700 cursor-pointer disabled:bg-slate-400 disabled:cursor-not-allowed"
          type="button"
          data-testid="btn-calc"
          disabled={!expression}
        >
          Calculate
        </button>
      </div>
      {result && (
        <p className="mt-4" data-testid="text-result">
          {result}
        </p>
      )}
    </div>
  );
}

export default App;
