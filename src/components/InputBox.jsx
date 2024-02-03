import { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  selectedCurrency,
  currencyOptions = [],
  onCurrencyChange,
  amountDisabled = false,
  currencyDisabled = false
}) {

  const amountId = useId();

  return (
    <>
      <div className="container bg-slate-200 w-96 h-24 flex flex-row rounded-xl">

        <div className="left flex flex-col w-1/2 ">

          <div className="tittle h-2/4">

            <label htmlFor={amountId} className=" m-2 mx-4 text-purple-700 font-medium ">{label}</label>

          </div>

          <input
            id={amountId}
            className="mx-4 my-4 w-1/3 bg-slate-100 h-1/4 focus:border-0 rounded-md px-1 text-xs"
            type="number"
            placeholder="amt"
            value={amount}
            onChange={(e) => onAmountChange && onAmountChange(e.target.value)}
            disabled={amountDisabled} />
        </div>

        <div className="right w-1/2 flex flex-col">

          <div className="tittle h-2/4 flex justify-end">

            <h1 className="mx-4 m-2 text-purple-700 font-medium">Currency Type</h1>

          </div>

          <select className="text-xs mx-4 my-4 w-1/3 bg-slate-100 h-1/4 focus:border-0 self-end rounded-md text-gray-500"
            name="currency"
            id="currency"
            value={selectedCurrency}
            onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
            disabled={currencyDisabled}>

            {
              currencyOptions.map((option) => {
                return (
                  <option value={option} key={option}>
                    {option}
                  </option>
                )
              })
            }

          </select>

        </div>

      </div>
    </>
  );
}

export default InputBox;
