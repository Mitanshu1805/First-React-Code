import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputName from './components/InputName'

function App() {
  const [name, setName] = useState("Mitanshu")
  const [age, setAge] = useState(19)
  const [college, setCollege] = useState("Silver Oak")
  function handleChangeName() {
    if (name == "Mitanshu") {
      setName("Sunny Paaji")
    }
    else if(name == "Sunny Paaji"){
      setName("Mitanshu")
    }

  }
  return (
    <>
      <h1>Hello {name}</h1>
      <h1>I'm {age} years Old</h1>
      <h1>I am studying in {college}</h1>
      <button onClick={handleChangeName}>Change Name</button>
      {/* <button onClick={() => setName("Mitanshu")}>Change Name</button> */}
      {/* <InputName></InputName> */}
      <InputName/>
    </>
  )
}

export default App
