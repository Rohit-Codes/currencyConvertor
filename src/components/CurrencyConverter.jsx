import React, { useEffect, useState } from 'react'
import DropDown from './DropDown';

function CurrencyConverter() {
    'https://api.frankfurter.app/currencies';
    'https://api.frankfurter.app/latest?amount=1&from=USD&to=INR';



const [currencies , setCurrencies] = useState([])
const [amt , setAmt] = useState(1)
const [from, setFrom ] = useState("USD")
const [to, setTo] = useState("INR")
const [loading , setLoading] = useState(false)
const [amtValue, setAmtValue] = useState(null)

const fetchCurrencies = async() =>{

    try {

const response = await fetch("https://api.frankfurter.app/currencies")
const data = await response.json()
setCurrencies(data)


    } catch (error) {
        console.log(error.message)
    }
}


const swipeCurrencies = () =>{
  setFrom(to)
  setTo(from)
}


const convertCurrnecy = async() =>{

  try {
    setLoading(true)
    const response = await fetch(`https://api.frankfurter.app/latest?amount=${amt}&from=${from}&to=${to}`)
    const data = await response.json()
    setLoading(false)
    setAmtValue(data.rates[to])
    
    
        } catch (error) {
            console.log(error.message)
        }

}

useEffect(()=>{
fetchCurrencies()
},[])



  return (
  <div className='max-w-xl mx-auto my-10 p-5 bg-white rounded-lg shadow-md'>
      <h2>Currency Converter</h2>
      <div>
        <DropDown currencies={currencies} from={setFrom} comValue={from}/>
        <button onClick={swipeCurrencies}>Swipe</button>
        <DropDown currencies={currencies} from={setTo} comValue={to}/>
      </div>
      <hr/>
      <div className='inputDIv'>
        <label htmlFor='ammount'>Ammount:</label>
        <input type='number'

            value={amt}
            onChange={(e)=>{
                setAmt(e.target.value)
            }}
        />
      </div>
      <hr/>
      <button onClick={convertCurrnecy}>{loading ? "loading..." : "Convert"}</button>
     <hr/> 
      <div className='convertedamt'></div>
      <p>{!amtValue ? "" : amtValue}</p>
    </div>
  )
}

export default CurrencyConverter
