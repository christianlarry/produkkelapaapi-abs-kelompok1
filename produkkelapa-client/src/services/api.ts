import axios from "axios";
import Cookies from "js-cookie";

const baseUrl = 'http://localhost:5000/'
const token = Cookies.get('access_token')

export const getToko = (page:number=1,limit:number=25)=>{
  return axios.get(`${baseUrl}api/toko?page=${page}&limit=${limit}`,{
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

export const searchToko = (search:string)=>{
  return axios.get(`${baseUrl}api/toko?search=${search}`,{
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

export const postLogin = (data:{username:string,password:string})=>{
  return axios.post(`${baseUrl}login`,data)
}

export const postRegister = (data:{username:string,password:string})=>{
  return axios.post(`${baseUrl}register`,data)
}

export const postLogout = ()=>{
  return axios.post(`${baseUrl}logout`,{},{headers:{
    Authorization: `Bearer ${token}`
  }})
}