import React, { useState } from 'react'

const DropDown = ({currencies,from,to}) => {

const newCurrencies = Object.keys(currencies)

const [optionValue, setOptionValue] = useState("")

const getOptionValue = (e) =>{
  setOptionValue(e.target.value)

}

from(optionValue)

console.log(optionValue)
  return (
    <div>
    <select name='currencies' onChange={getOptionValue}>currencies
     {
      newCurrencies.map((val, index)=>{
        return <option value={val}  key={index}>{val}</option>
      })
    } 
    </select>
  </div>
  )
}

export default DropDown
