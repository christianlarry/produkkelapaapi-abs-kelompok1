import { useRef, useState } from "react"
import { Link,useNavigate } from "react-router-dom"
import { postLogin } from "../services/api"
import axios from 'axios'
import Cookies from 'js-cookie'

const Login = () => {
  const navigate = useNavigate()
  const [error,setError] = useState<{type:string,msg:string,path:string,location:string}[]>()

  const usernameRef:React.RefObject<HTMLInputElement> = useRef(null)
  const passwordRef:React.RefObject<HTMLInputElement> = useRef(null)

  const handleLogin = ()=>{
    if(usernameRef.current && passwordRef.current){
      const username = usernameRef.current.value?usernameRef.current.value:''
      const password = passwordRef.current.value?passwordRef.current.value:''
  
      postLogin({username,password})
        .then(value=>{
          if(value.status === 200){
            if(value.data.data.accessToken){
              const token = value.data.data.accessToken
              Cookies.set('access_token',token,{expires: 1})
              window.alert('Berhasil login, Lanjut ke halaman beranda')
              navigate('/')
            }
          }
        })
        .catch(err=>{
          if(axios.isAxiosError(err)){
            if(err.response?.status === 400){
              setError(err.response.data.error.input)
            }
          }
        })
    }
  }

  return (
    <div className='container mx-auto'>
      <div className="flex flex-col items-center">
        <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: 300 }} className="p-6 m-auto bg-white rounded-md shadow-md ring-2 ring-gray-800/50 lg:max-w-xl">
            <h1 className="text-3xl font-semibold text-center text-gray-700">Login</h1>
            {error && 
              <ul>
                {error.map((err,i)=>(
                  <li key={i}><span style={{color: 'red'}}>* {err.path + ': ' + err.msg}</span></li>
                ))}
              </ul>
            }
            <form className="space-y-4">
              <div>
                <label className="label">
                  <span className="text-base label-text">Username</span>
                </label>
                <input ref={usernameRef} type="text" placeholder="Username" className="w-full input input-bordered" required/>
              </div>
              <div>
                <label className="label">
                  <span className="text-base label-text">Password</span>
                </label>
                <input ref={passwordRef} type="password" placeholder="Masukkan Password"
                  className="w-full input input-bordered" required/>
              </div>
              <div>
                <button className="btn btn-block" type="button" onClick={handleLogin}>Login</button>
              </div>
              <span>Belum punya akun ?
                <Link to="/register" className="text-blue-600 hover:text-blue-800 hover:underline">Register</Link></span>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login