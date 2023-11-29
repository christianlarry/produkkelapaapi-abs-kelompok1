import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import Beranda from './pages/Beranda'
import Register from './pages/Register'
import Login from './pages/Login'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Beranda/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        
				<Route path='/*' element={<Navigate to={'/'}/>}/>
      </Routes>
    </Router>
  )
}

export default App
