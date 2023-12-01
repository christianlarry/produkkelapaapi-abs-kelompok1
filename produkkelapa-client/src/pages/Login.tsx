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
          <div style={{ width: 400 }} className="p-6 m-auto bg-white rounded-md shadow-md ring-2 ring-gray-800/50 lg:max-w-xl">
            <h1 className="text-3xl font-semibold text-center text-gray-700">Login</h1>
            {error && 
            <div role="alert" className="alert alert-error flex flex-col items-start my-2">
              {error.map((err, i) => (
                <div key={i} className="flex gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span>{err.path}: {err.msg}</span>
                </div>
              ))}
            </div>
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