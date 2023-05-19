import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Controller from './pages/Controller'
import GlobalState from './context/GlobalState'

function App() {

  return (
    <>
    <GlobalState>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/controller" element={<Controller />} />
        </Routes>
      </Router>
      </GlobalState>
    </>
  )
}

export default App
