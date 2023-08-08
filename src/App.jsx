import './App.css'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Asset from './pages/Asset'
import Assetspec from './pages/Assetspec'
import Auth from './Auth'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" Component={ Auth } />
        <Route path = "/home" Component={Home} />
        <Route path="/createasset" Component={Asset} />
        <Route path="/asset" Component={Assetspec} />
      </Routes>
    </div>
  )
}

export default App
