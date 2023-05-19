import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Controller from './pages/Controller'
import GlobalState from './context/GlobalState'
import LastIPage from './pages/LastIPage'

function App() {

  return (
    <>
    <GlobalState>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/controller" element={<Controller />} />
          <Route exact path="/lastinvestments" element={<LastIPage />} />
        </Routes>
      </Router>
      </GlobalState>
    </>
  )
}

export default App
