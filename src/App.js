// import logo from './logo.svg';
import './App.css';
import {React, useState} from 'react'
import { unmountComponentAtNode, render } from "react-dom";

import { Wheel } from 'react-custom-roulette'



/**
export default () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length)
    setPrizeNumber(newPrizeNumber)
    setMustSpin(true)
  }
}
 */

function App() {
  const [mustSpin, setMustSpin] = useState(false);
  let [prizeNumber, setPrizeNumber] = useState(0);
  const [option1, setOption1] = useState('すき家')
  const [option2, setOption2] = useState('吉野家')
  const [option3, setOption3] = useState('幸楽苑')
  const [option4, setOption4] = useState('マクドナルド')

  let [data, setData] = useState( [
    { option: option1, style: { backgroundColor: 'green', textColor: 'black' } },
    { option: option2, style: { backgroundColor: 'white' } },
    { option: option3 },
    { option: option4 },
    ]);


  const updateOption = () => {
    setData(
      [
        { option: option1, style: { backgroundColor: 'green', textColor: 'black' } },
        { option: option2, style: { backgroundColor: 'white' } },
        { option: option3 },
        { option: option4 },
        ]
    )
  }

  const handleSpinClick = () => {
    updateOption()
    const newPrizeNumber = Math.floor(Math.random() * data.length)
    setPrizeNumber(newPrizeNumber)
    setMustSpin(true)

  }

  return (
    <>
       <Wheel
      mustStartSpinning={mustSpin}
      prizeNumber={prizeNumber}
      data={data}
      onStopSpinning={() => {
        setMustSpin(false)
      }}
    />
    <button onClick={handleSpinClick}>SPIN</button>
    
    <div >
    <form>
    <div>
      <label>
      Option 1 <input value={option1} onChange={(e) => {setOption1(e.target.value); updateOption();}} id="option1" type="text"/><br/>
      Option 2 <input value={option2} onChange={(e) => {setOption2(e.target.value); updateOption();}} id="option1" type="text"/><br/>
      Option 3 <input value={option3} onChange={(e) => {setOption3(e.target.value); updateOption();}} id="option1" type="text"/><br/>
      Option 4 <input value={option4} onChange={(e) => {setOption4(e.target.value); updateOption();}} id="option1" type="text"/><br/>
      </label>
    </div>
  </form>
    </div>
  </>


  );
}

export default App;
