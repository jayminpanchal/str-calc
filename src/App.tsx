import { ChangeEvent, useState } from "react";
import "./App.css";

function App() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setExpression(e.target.value);
  };

  const onCalculate = () => {};

  return (
    <div className="p-8 flex flex-1 items-center justify-center">
      <div className="flex space-x-2 items-center">
        <input
          className="h-10 border border-slate-500 rounded flex flex-1 w-64 px-4"
          type="text"
          data-testid="input-expression"
          onChange={onChange}
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
      {result && <p data-testid="text-result">{result}</p>}
    </div>
  );
}

export default App;
