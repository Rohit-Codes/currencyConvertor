import React, { useState } from 'react'

const DropDown = ({currencies,from}) => {

const newCurrencies = Object.keys(currencies)

const [optionValue, setOptionValue] = useState("")

const getOptionValue = (e) =>{
  from(e.target.value)

}

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
