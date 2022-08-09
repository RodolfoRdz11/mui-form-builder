import React from "react"
import { useState } from 'react'
import { TextInput } from "mui-form-builder"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id="app">
      <TextInput variant="outlined" />
    </div>
  )
}

export default App
