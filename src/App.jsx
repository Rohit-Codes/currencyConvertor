import React from 'react'
import "./App.css"
import CurrencyConverter from './components/CurrencyConverter'


function App() {
  return (
    <div className='min-h-screen bg-gray-300 flex flex-col items-center justify-center'>
      <CurrencyConverter/>
    </div>
  )
}

export default App
