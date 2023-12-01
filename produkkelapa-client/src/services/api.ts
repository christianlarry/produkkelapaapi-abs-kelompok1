import axios from "axios";

const baseUrl = 'http://localhost:5000/'

export const getToko = (token:string,page:number=1,limit:number=25)=>{
  return axios.get(`${baseUrl}api/toko?page=${page}&limit=${limit}`,{
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

export const getAllProduk = (token:string,page:number=1,limit:number=25)=>{
  return axios.get(`${baseUrl}api/produk?page=${page}&limit=${limit}`,{
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

export const searchProduk = (token:string,search:string)=>{
  return axios.get(`${baseUrl}api/produk?search=${search}`,{
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

export const getProdukByIdToko = (token:string,id:number)=>{
  return axios.get(`${baseUrl}api/toko/${id}/produk`,{
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

export const searchToko = (token:string,search:string)=>{
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

export const postLogout = (token:string)=>{
  return axios.post(`${baseUrl}logout`,{},{headers:{
    Authorization: `Bearer ${token}`
  }})
}

export const checkToken = (token:string)=>{
  return axios.get(`${baseUrl}check-token`,{headers:{
    Authorization: `Bearer ${token}`
  }})
}

export const getUsers = (token:string)=>{
  return axios.get(`${baseUrl}api/user`,{headers:{
    Authorization: `Bearer ${token}`
  }})
}

export const postUser = (token:string,data:{username:string,password:string,role:'admin'|'user'})=>{
  return axios.post(`${baseUrl}api/user`,data,{headers:{
    Authorization: `Bearer ${token}`
  }})
}

export const putUser = (token:string,id:number,data:{username:string,role:'admin'|'user'})=>{
  return axios.put(`${baseUrl}api/user/${id}`,data,{headers:{
    Authorization: `Bearer ${token}`
  }})
}

export const patchUserPassword = (token:string,id:number,data:{newPassword:string})=>{
  return axios.patch(`${baseUrl}api/user/password/${id}`,data,{headers:{
    Authorization: `Bearer ${token}`
  }})
}

export const deleteUser = (token:string,id:number)=>{
  return axios.delete(`${baseUrl}api/user/${id}`,{headers:{
    Authorization: `Bearer ${token}`
  }})
}