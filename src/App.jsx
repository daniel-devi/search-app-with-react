import { useState } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import JSONDATA from './MOCK_DATA.json'

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
    <input type="text" name="" id="" 
      placeholder='Search...' 
        onChange={(event) => {setSearchTerm(event.target.value)}} />

    {JSONDATA.filter((val) => {
      if (searchTerm == "") {
        return val
      }
      else if (val.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ) {
       return val
      }
    }).map((val, key) =>{
      return <div className='user' key={key}>
        <p>{val.first_name}</p>
      </div>
    })}
    </>
  )
}

export default App
