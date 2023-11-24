import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Banner from './Banner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <div className="w-7/12">
        <Navbar />
        <Banner />
      </div>
    </div>
  )
}

export default App
