import './App.css'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Asset from './pages/Asset'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/createasset" element={ <Asset/> } />
      </Routes>
    </div>
  )
}

export default App
