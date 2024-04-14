import React, { useState } from 'react'

const DropDown = ({currencies,from,comValue}) => {

const newCurrencies = Object.keys(currencies)




const getOptionValue = (e) =>{
  from(e.target.value)

}

  return (
    <div>
    <select name='currencies' value={comValue}  onChange={getOptionValue}>currencies
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
