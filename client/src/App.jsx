import React, { useState } from "react"
import axios from "axios"

function App() {
  const [age, setAge] = useState("")
  const [result, setResult] = useState("")

  const handleAgeChange = (e) => {
    setAge(e.target.value)
  }

  const checkAge = async () => {
    try {
      const response = await axios.post("https://host-algg-saiful64.vercel.app/checkAge", {
        age,
      })
      setResult(response.data.isAdult ? "Adult" : "Not Adult")
    } catch (error) {
      console.error("Error checking age:", error)
      console.log(result)
    }
  }

  return (
    <div className="App">
      <h1>Age Checker</h1>
      <label>
        Enter your age:
        <input type="number" value={age} onChange={handleAgeChange} />
      </label>
      <button onClick={checkAge}>Check Age</button>
      {result && <p>You are: {result}</p>}
    </div>
  )
}

export default App
