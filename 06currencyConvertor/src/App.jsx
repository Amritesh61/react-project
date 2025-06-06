import { useState } from 'react'
import { InputBox } from './components'
import  useCurrencyInfo  from './hooks/useCurrencyInfo'


function App() {
  const [amount, setAmount] = useState(0)
  const [from,setFrom] = useState("USD")
  const [to,setTo] = useState("INR")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
    //style={{backgroundImage: `url('https://images.pexels.com/photos/28165814/pexels-photo-28165814/free-photo-of-a-close-up-of-a-stock-chart.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`}}
        style={{backgroundImage: `url('https://cdn.pixabay.com/photo/2023/06/03/15/01/finance-8037840_960_720.jpg')`}}

    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5
        backdrop-blur-sm bg-white/30 shadow-lg">
          <form onSubmit={(e) => {
            e.preventDefault();
            convert()
          }}>

            <div className="w-full mb-1">
              <InputBox label="From"
              amount={amount}
              currencyOptions={options}
              //onCurrencyChange={(currency) => setAmount(currency)}
              onCurrencyChange={setFrom}
              selectCurrency={from}
              onAmountChange={(amount) => setAmount(amount)}
              />

            </div>
            <div className="relative w-full h-0.5">
              <button
              type="button"
              className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md 
              bg-blue-600 text-white px-2 py-0.5"
              onClick={swap}
              >Swap</button>
            </div>
            <div 
            className="w-full mt-1 mb-4"
            >
              <InputBox label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
              amountDisable
              />
            </div>
            <button type="submit"
            className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >Convert {from.toUpperCase()} to {to.toUpperCase()}</button>

          </form>
        </div>

      </div>

    </div>
  )
}

export default App
