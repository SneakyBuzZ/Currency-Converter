import { useState } from "react";
import InputBox from "./components/InputBox"
import UseCurrencyInfo from "./hooks/UseCurrencyInfo";

function App() {

  const [input, setInput] = useState(0);
  const [output, setOutput] = useState(0);
  const [to, setTo] = useState("inr");
  const [from, setFrom] = useState("usd");

  const currencyInfo = UseCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setInput(output);
    setOutput(10);
    console.log("input", output);
    console.log("output", input);
  }

  const convert = () => {
    setOutput(input * currencyInfo[to])
  }

  return (
    <>
      <div className="converter bg-slate-300 mt-40">

        <form className="form"
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}>

          <InputBox label="From"
            amount={input}
            onAmountChange={(amount) => setInput(amount)}
            onCurrencyChange={(currency) => setFrom(currency)}
            currencyOptions={options}
            selectedCurrency={from} />

          <div className="swap">
            <button className="bg-purple-600 w-16 h-7 rounded-md text-slate-200 my-2 font-semibold text-xs active:scale-95"
              onClick={swap}>
              Swap
            </button>
          </div>

          <InputBox label="To"
            amount={output}
            onCurrencyChange={(currency) => setTo(currency)}
            onAmountChange={(amount) => setOutput(amount)}
            selectedCurrency={to}
            currencyOptions={options}
            amountDisabled />

          <div className="submit">

            <button type="submit" className="container bg-purple-600 w-96 h-14 rounded-xl text-slate-200 my-5 font-bold active:scale-95">
              Convert{from.toUpperCase()} to {to.toUpperCase()}
            </button>

          </div>

        </form>

      </div>
    </>
  );
}

export default App;
