import { getToko, searchToko } from "../../services/api"
import { useEffect, useState } from "react"
import Cookies from 'js-cookie'
import { Navigate } from "react-router-dom"

const Main = () => {
  const token = Cookies.get('access_token')
  if(!token) return <Navigate to='/login'/>

  const [toko,setToko] = useState<{id:number,nama_toko:string,daerah:string}[]>()
  const [pagination,setPagination] = useState<{size:number,total:number,totalPages:number,current:string | number}>()
  const [isSearch,setIsSearch] = useState<boolean>(false)

  const [page,setPage] = useState<number>(1)

  const getAndSetToko = ()=>{
    getToko(page,25)
      .then(value=>{
        setToko(value.data.data)
        setPagination(value.data.page)
      })
      .catch(err=>{
        console.log(err)
      })
  }

  const searchAndSetToko = (search:string)=>{
    searchToko(search)
      .then(val=>{
        setToko(val.data.data)
        setPagination(undefined)
      })
      .catch(err=>{
        console.log(err)
      })
  }

  const handleSearchInput = (e:React.ChangeEvent<HTMLInputElement>)=>{
    const query = e.target.value
    if(query.length > 2) {
      searchAndSetToko(query)
      return setIsSearch(true)
    }
    if(query.length === 0) {
      getAndSetToko()
      return setIsSearch(false)
    }
  }

  useEffect(()=>{
    getAndSetToko()
  },[page])

  return (
    <div className="py-10">
      <section className="flex flex-col items-center gap-12">
        <h2 className="text-lg font-bold text-center">Toko Produk Olahan Kelapa di Sulawesi Utara</h2>
        <div>
          <input type="text" placeholder="Cari Toko" className="input input-bordered w-full max-w-xs" onChange={handleSearchInput}/>
        </div>
        <div className="overflow-x-auto self-stretch">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Nama Toko</th>
                <th>Daerah</th>
                <th>Lihat Produk</th>
              </tr>
            </thead>
            <tbody>
            {toko && toko.map((data,i)=>(
              <tr key={i}>
                <th>{(((isSearch?1:page)-1)*25+1)+i}</th>
                <td>{data.nama_toko}</td>
                <td>{data.daerah}</td>
                <td>
                  <button className="btn btn-primary btn-sm">Lihat Produk</button>
                </td>
              </tr>
            ))}
          </tbody>
          </table>
        </div>
        {pagination &&
        <div className="join">
          <button className="join-item btn" onClick={()=>setPage(page-1)} disabled={page===1?true:false}>«</button>
          <button className="join-item btn">Halaman {page}</button>
          <button className="join-item btn" onClick={()=>setPage(page+1)} disabled={page===pagination.totalPages?true:false}>»</button>
        </div>
        }
      </section>
    </div>
  )
}

export default Main