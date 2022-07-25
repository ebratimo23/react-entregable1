import { useState } from 'react'
import './App.css'
import QueteBox from './components/QuoteBox';
import users from './json/users.json'
import colors from './utils/color'

function App() {

  const getElementRandom = arr =>{
    const ramdon = Math.floor(Math.random() * arr.length)
    return arr[ramdon];
  }

  let prasheRamdon = getElementRandom(users);
  let colorRamdon = getElementRandom(colors);

  const [isRamdom, setIsRamdom] = useState(prasheRamdon);
  const [isColor, setIsColor] = useState(colorRamdon);

  const objectStyle ={
    backgroundColor: isColor,
  }

  const randomAll = () => {
    prasheRamdon = getElementRandom(users);
    colorRamdon = getElementRandom(colors);
  

    setIsRamdom(prasheRamdon)
    setIsColor(colorRamdon)
  }
  
  return (
    <div className="App" style={objectStyle}>

      <QueteBox isRamdom={isRamdom} isColor={isColor} 
        randomAll={randomAll}/>
    </div>
  )
}

export default App
