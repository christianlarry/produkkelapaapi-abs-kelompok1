import { useEffect, useState } from "react"
import { getToko, searchToko } from "../../../services/api"
import {isAxiosError} from "axios"
import { Link, useOutletContext } from "react-router-dom"
import Navbar from "../../../components/Navbar"

type UsersRole = 'admin'|'user'

const AdminToko = () => {

  // GET DATA FROM AdminContainer
  const {token} = useOutletContext<{token:string,userRole:UsersRole}>()

  const [toko, setToko] = useState<{ id: number, nama_toko: string, daerah: string }[]>()
  const [pagination, setPagination] = useState<{ size: number, total: number, totalPages: number, current: string | number }>()
  const [isSearch, setIsSearch] = useState<boolean>(false)

  const [page, setPage] = useState<number>(1)

  const getAndSetToko = () => {
    getToko(token, page, 25)
      .then(value => {
        setToko(value.data.data)
        setPagination(value.data.page)
      })
      .catch(err => {
        if (isAxiosError(err)) {
          if (err.response && (err.response.status === 401 || err.response.status === 403)) {

          }
        }
      })
  }

  const searchAndSetToko = (search: string) => {
    searchToko(token, search)
      .then(val => {
        setToko(val.data.data)
        setPagination(undefined)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    if (query.length > 2) {
      searchAndSetToko(query)
      return setIsSearch(true)
    }
    if (query.length === 0) {
      getAndSetToko()
      return setIsSearch(false)
    }
  }

  useEffect(() => {
    if (token && token != '') {
      getAndSetToko()
    }
  }, [page, token])

  return (
    <div className='container mx-auto'>
      <Navbar />
      <div className="py-10">
        <section className="flex flex-col items-center gap-12">
          <h2 className="text-lg font-bold text-center"><span className="text-red-500">[ADMIN]</span> Data Toko Produk Olahan Kelapa</h2>
          <div className="flex gap-5">
            <button className="btn btn-outline btn-success">+ Tambah Toko</button>
            <input type="text" placeholder="Cari Toko" className="input input-bordered w-full max-w-xs" onChange={handleSearchInput} />
          </div>
          <div className="overflow-x-auto self-stretch">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Nama Toko</th>
                  <th>Daerah</th>
                  <th style={{width: 300}}>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {toko && toko.map((data, i) => (
                  <tr key={i}>
                    <th>{(((isSearch ? 1 : page) - 1) * 25 + 1) + i}</th>
                    <td>{data.nama_toko}</td>
                    <td>{data.daerah}</td>
                    <td className="flex gap-2">
                      <button className="btn btn-primary btn-sm">
                        <Link to={`/admin/toko/${data.id}/produk`} state={{ toko: { nama_toko: data.nama_toko, daerah: data.daerah } }}>
                          Lihat Produk
                        </Link>
                      </button>
                      <button className="btn btn-warning btn-sm">
                        <Link to={`/toko/${data.id}/ubah`} state={{ toko: { nama_toko: data.nama_toko, daerah: data.daerah } }}>
                          Ubah
                        </Link>
                      </button>
                      <button className="btn btn-error btn-sm">
                        <span>
                          Hapus
                        </span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {pagination &&
            <div className="join">
              <button className="join-item btn" onClick={() => setPage(page - 1)} disabled={page === 1 ? true : false}>«</button>
              <button className="join-item btn">Halaman {page}</button>
              <button className="join-item btn" onClick={() => setPage(page + 1)} disabled={page === pagination.totalPages ? true : false}>»</button>
            </div>
          }
        </section>
      </div>
    </div>
  )
}

export default AdminToko