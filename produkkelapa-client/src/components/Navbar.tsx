import { Link,useNavigate } from "react-router-dom"
import { jwtDecode } from "jwt-decode"
import { useEffect, useState } from "react"
import Cookies from 'js-cookie'
import { postLogout } from "../services/api"

const Navbar = () => {

  const navigate = useNavigate()

  const [user,setUser] = useState<{username:string,role:string}>()

  useEffect(()=>{
    const token = Cookies.get('access_token')
    if(token){
      const data = jwtDecode(token)
      setUser({username:data.username,role:data.role})
    }
  },[])

  const handleLogout = ()=>{
    postLogout()
      .then(res=>{
        if(res.status === 200){
          Cookies.remove('access_token')
          alert('Berhasil Logout')
          navigate('/login')
        }
      })
      .catch(err=>{
        console.log(err)
      })
  }

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Produk Olahan Kelapa</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><Link to='/'>Beranda</Link></li>
          <li>
            <details>
              <summary>
                Account
              </summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                <li><span>User : {user && user.username}</span></li>
                <li><a onClick={handleLogout}>Logout</a></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar