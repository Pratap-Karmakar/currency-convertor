import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`

    // this useState is provided by the custom hook itself
    // in this useState we are passing an empty array so that if incase there is no data is coming after fetching the api then atleast the loops can be work over this empty array and not get crass
    const [data, setData] = useState({})

    useEffect(()=>{
        fetch(url).then((res)=>{
            return res.json()
        })
        // if we hold the data in to a normal variable then the UI will never get updated
        // so for that reason we can use useState which is provided by the custom hook itself\
        .then((res)=>{
            // whatever currency we are passing the same key we are getting
            return(setData(res[currency]))
        })
        console.log(data);
    },
    // whenever there is some changes in the  currency at that time we want the useEffect function to get called so 'currency' is going to our dependency array
    [currency])
    console.log( data);
    // here we just need to return the data only
    return(data)
}


// for setting the data we need the setData from the useState from the upper function and we have just returned data only so we do not have the access of the setData from the upper function so we are going to use one methode from the custom hook and will return the whole function

export default useCurrencyInfo;