const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors") // Import the cors middleware
const app = express()
const port = 5000

app.use(bodyParser.json())
app.use(cors()) // Use the cors middleware

app.post("/checkAge", (req, res) => {
  const { age } = req.body
  const isAdult = age >= 18
  res.json({ isAdult })
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
