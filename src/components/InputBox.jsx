import React, { useId } from 'react'

function InputBox({
    // for 'to' or 'from'
    label,
    // for the displaying amount
    amount,
    // 
    onAmountChange,
    // whenever the currency will change this method will call
    onCurrencyChange,
    // to display all the currency, and as the currency are coming in an array form so by default we are passing an empty array, so if we faced any error while fetching the api then it will not chrashed
    currencyOptions = [],
    // which currency will be select, by default we are giving usd
    selectCurrency = 'usd',
    
    
    customCss = "",
}) {

    
    // it will generate unique ID, which we can use in the label and which can be bind in the input as well
    const amountId = useId();

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${customCss}`}>
            <div className="w-1/2">
                <label
                htmlFor={amountId}
                className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    
                    id={amountId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"


                    disabled = 'false'
                    value={amount}
                    // javascript took the value inside the event in string format that's why we need to wrap it into Number
                    onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    
                    disabled = 'false'
                    value={selectCurrency}
                    onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
                    
                >

                    {/* to loop over the list of all currency options */}
                    
                        {currencyOptions.map((allCurrency)=>{
                            return (
                                <option value={allCurrency} key={allCurrency}>
                                    {allCurrency}
                                </option>
                            )
                        })}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;






