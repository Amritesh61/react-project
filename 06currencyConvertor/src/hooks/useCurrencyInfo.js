import { useEffect,useState } from "react";


function useCurrencyInfo(currency) {
    useEffect (() => {
        const[data, setData] = useState({})
        fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
        .then((response) => response.json())
        .then((response) => 
            setData(response[currency]))
        console.log(data);
        
    }, [currency])
    console.log(data);
    return data
}
export default useCurrencyInfo;