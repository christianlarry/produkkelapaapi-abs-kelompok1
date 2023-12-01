import { useEffect, useState } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { getProdukByIdToko } from "../services/api"
import useToken from "../hooks/useToken"
import Navbar from "../components/Navbar"

import formatCurrency from '../utils/formatCurrency'

interface ProdukModel{
  id:number
  id_toko:number
  nama_produk:string
  harga:number
  description?:string | null
  manfaat?:string | null
}

const Produk = ()=>{
  // MENDAPATKAN PARAMETER id YANG DIPASS LEWAT URL
  const {id} = useParams()
  // STATE
  const [produk,setProduk] = useState<ProdukModel[]>()
  // AMBIL TOKEN
  const token = useToken()
  // AMBIL STATE/DATA YANG DIKIRIM DARI HALAMAN SEBELUMNNYA
  const {state} = useLocation()

  const navigate = useNavigate()

  useEffect(()=>{
    if(token && !(isNaN(Number(id)) || !id || Number(id) === 0)){
      getProdukByIdToko(token,Number(id))
        .then(val=>{
          if(val.data){
            setProduk(val.data.data)
          }
        })
        .catch(err=>{console.error(err)})
    }
  },[id,token])

  if(isNaN(Number(id)) || !Number(id) || Number(id) === 0) return (
    <div role="alert" className="alert alert-error">
      <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      <span>ID toko pada url tidak valid!</span>
    </div>
  )

  return (
    <div className="container mx-auto">
      <Navbar/>
      <div className="py-10">
        <section className="flex flex-col items-center gap-12">
          <button className="btn btn-outline btn-error btn-sm" onClick={()=>navigate(-1)}>&lt; Kembali</button>
          <div className="flex flex-col items-center">
            <h2 className="text-lg font-bold text-center">Produk Olahan Kelapa yang dijual di Toko <b>{state.toko.nama_toko}</b></h2>
            <span>{state.toko.daerah}</span>
          </div>
          <div className="overflow-x-auto self-stretch">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Nama Produk</th>
                  <th>Harga</th>
                  <th style={{width: 350}}>Deskripsi</th>
                  <th style={{width: 350}}>Manfaat</th>
                </tr>
              </thead>
              <tbody>
                {produk && produk.map((val,i)=>(
                  <tr key={val.id}>
                    <th>{i+1}</th>
                    <td>{val.nama_produk}</td>
                    <td>{formatCurrency(val.harga)}</td>
                    <td>{val.description ? val.description:'-'}</td>
                    <td>{val.manfaat ? val.manfaat:'-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Produk