import { useState } from 'react'
import QuoteBox from './components/QuoteBox '
import './styles/App.css'
import quotes from './db/quotes.json'
import CahangeColor from './components/CahangeColor'
import niceColors from './db/nicecolors.jsx'


function App() {

const [value, setValue] = useState(0)

const [color, setColor] = useState(0) 

// Returns a random integer from 0 to quotes.length:
const numRamdom = () => Math.floor(Math.random() * quotes.length)

const colorRamdom = () => Math.floor(Math.random() * niceColors.length)

let change = () => {
  setValue(numRamdom)
  setColor(colorRamdom)
} 

  return (
    <div className="App">
      <div className='container'>
        <div className="quoteBox-container">

          <QuoteBox phrase={quotes[value].quote}
            author={quotes[value].author}
            color={niceColors[color]}
          />
          <div className='arrow-button'>
            <button onClick={change} className="button">
              <i className="fa-solid fa-arrow-right-to-bracket arrow-icon"></i></button>
          </div>
        </div>
      </div>
      <CahangeColor color={niceColors[color]}  />
    </div>
  )
}

export default App
