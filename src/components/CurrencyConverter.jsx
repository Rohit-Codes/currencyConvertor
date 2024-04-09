import React, { useEffect, useState } from 'react'
import DropDown from './DropDown';

function CurrencyConverter() {
    'https://api.frankfurter.app/currencies';
    'https://api.frankfurter.app/latest?amount=1&from=USD&to=INR';



const [currencies , setCurrencies] = useState([])
const [amt , setAmt] = useState(1)
const [from, setFrom ] = useState("USD")
const [to, setTo] = useState("INR")


const fetchCurrencies = async() =>{

    try {

const response = await fetch("https://api.frankfurter.app/currencies")
const data = await response.json()
setCurrencies(data)


    } catch (error) {
        console.log(error.message)
    }
}


console.log(from,to)

const convertCurrnecy = async() =>{

  try {

    const response = await fetch(`https://api.frankfurter.app/latest?amount=${amt}&from=${from}&to=${to}`)
    const data = await response.json()
    console.log(data.rates[to])
    
    
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
        <DropDown currencies={currencies} from={setFrom}/>
        <button>Swipe</button>
        <DropDown currencies={currencies} to={setTo}/>
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
      <button onClick={convertCurrnecy}>Convert</button>
     <hr/> 
      <div className='convertedamt'></div>
    </div>
  )
}

export default CurrencyConverter
