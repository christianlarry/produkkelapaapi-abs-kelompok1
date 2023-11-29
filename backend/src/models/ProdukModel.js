import db from '../config/Database.js'

export const getAllData = (offset = 1, limit = 25) => {
    const sql = `SELECT produk.id,id_toko,nama_produk,description,harga,nama_toko,daerah 
                FROM produk
                INNER JOIN toko ON toko.id = id_toko
                LIMIT ${offset-1},${limit}
                `

    return db.query(sql)
}

export const getDataById = (id) => {
    const sql = `SELECT produk.id,id_toko,nama_produk,description,harga,nama_toko,daerah 
                FROM produk 
                INNER JOIN toko ON toko.id = id_toko
                WHERE produk.id=${id}`

    return db.query(sql)
}

export const searchData = (query) => {
    const sql = `SELECT 
    produk.id,
    id_toko,
    nama_produk,
    description 
    FROM produk WHERE
    nama_produk LIKE '%${query}%' OR 
    description LIKE '%${query}%'`

    return db.query(sql)
}

export const totalData = () => {
    const sql = `SELECT COUNT(*) as total FROM produk`

    return db.query(sql)
}

export const getProdukByTokoId = (id) => {
    const sql = `SELECT produk.id,id_toko,nama_produk,description 
                FROM produk
                WHERE id_toko = ${id}
                ORDER BY nama_produk ASC`

    return db.query(sql)
}

export const postData = (body) => {
    const sql = `INSERT INTO produk(id_toko,nama_produk,harga,description,manfaat) VALUES
                (${body.idToko},'${body.nama_produk}',${body.harga},'${body.description}','${body.manfaat}')`

    return db.query(sql)
}

export const putData = (id, body) => {
    const sql = `UPDATE produk 
                SET
                    id_toko=${body.idToko}, 
                    nama_produk='${body.namaToko}', 
                    harga=${body.harga},
                    description='${body.description}',
                    manfaat='${body.manfaat}'
                WHERE id=${id}`

    return db.query(sql)
}

export const deleteData = (id) => {
    const sql = `DELETE FROM produk
                WHERE id=${id}`

    return db.query(sql)
}