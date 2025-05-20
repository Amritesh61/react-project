// import { useState ,useEffect } from "react";


// function useCurrencyInfo(base) {
//     useEffect (() => {
//         const[data, setData] = useState({})
//         fetch(`https://api.exchangerate-api.com/v4/latest/${base}`)
//         .then((response) => response.json())
//         // .then((response) => 
//         //     setData(response[currency]))
//         // console.log(data);
//         .then(json => {
//         // json has a "rates" object containing all currency pairs
//         setData(json.rates);
        
//     })
//     .catch(console.error);
// }, [base]);
    
//     return data
// }
// export default useCurrencyInfo;


// src/hooks/useCurrencyInfo.js
import { useState, useEffect } from 'react';

export default function useCurrencyInfo(currency) {
  // 1) Declare your state at the top level
  const [data, setData] = useState({});

  useEffect(() => {
    // 2) Fetch & set inside useEffect
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
      .then(res => res.json())
      .then(json => {
        // pull out the rates object
        setData(json.rates);
      })
      .catch(err => console.error('Currency fetch failed:', err));
  }, [currency]);

  console.log('Currency data:', data);

  // 3) Now data is defined here
  return data;
}
