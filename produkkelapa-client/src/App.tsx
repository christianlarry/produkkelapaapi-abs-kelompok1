import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import Beranda from './pages/Beranda'
import Register from './pages/Register'
import Login from './pages/Login'
import Produk from './pages/Produk'
import AdminUsers from './pages/Admin/AdminUsers/AdminUsers'
import AdminToko from './pages/Admin/AdminToko/AdminToko'
import AdminProduk from './pages/Admin/AdminProduk/AdminProduk'
import AdminContainer from './pages/Admin/AdminContainer'
import AdminUsersTambah from './pages/Admin/AdminUsers/AdminUsersTambah'
import AdminUsersUbah from './pages/Admin/AdminUsers/AdminUsersUbah'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Beranda/>}/>
        <Route path='/toko/:id/produk' element={<Produk/>}/>
        
        <Route element={<AdminContainer/>}>
          <Route path='/admin/users' element={<AdminUsers/>}/>
          <Route path='/admin/users/tambah' element={<AdminUsersTambah/>}/>
          <Route path='/admin/users/:id/ubah' element={<AdminUsersUbah/>}/>
          <Route path='/admin/toko' element={<AdminToko/>}/>
          <Route path='/admin/produk' element={<AdminProduk/>}/>
        </Route>
        
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        
				<Route path='/*' element={<Navigate to={'/'}/>}/>
      </Routes>
    </Router>
  )
}

export default App
