import db from '../config/Database.js'

export const getAllData = (offset = 1, limit = 25) => {
    const sql = `SELECT * FROM toko
                LIMIT ${offset-1},${limit}`

    return db.query(sql)
}

export const getDataById = (id) => {
    const sql = `SELECT * FROM toko WHERE id=${id}`

    return db.query(sql)
}

export const totalData = () => {
    const sql = `SELECT COUNT(*) as total FROM toko`

    return db.query(sql)
}

export const searchData = (query) => {
    const sql = `SELECT * FROM toko WHERE nama_toko LIKE '%${query}%' OR daerah LIKE '%${query}%'`

    return db.query(sql)
}

export const postData = (body)=>{
    const sql = `INSERT INTO toko(nama_toko,daerah) VALUES
                ('${body.namaToko}','${body.daerah}')`
    
    return db.query(sql)
}

export const putData = (id,body)=>{
    const sql = `UPDATE toko 
                SET nama_toko='${body.namaToko}', daerah='${body.daerah}'
                WHERE id=${id}`
    
    return db.query(sql)
}

export const deleteData = (id)=>{
    const sql = `DELETE FROM toko
                WHERE id=${id}`
    
    return db.query(sql)
}

// PENDING TOKO MODEL
export const getAllPendingToko = ()=>{
    const sql = 'SELECT * FROM pending_toko'

    return db.query(sql)
}

export const getPendingTokoById = (id)=>{
    const sql = `SELECT * FROM pending_toko WHERE id=${id}`

    return db.query(sql)
}

export const getPendingTokoByPostById = (postById)=>{
    const sql = `SELECT * FROM pending_toko WHERE post_by=${postById}`

    return db.query(sql)
}

export const postPendingToko = (body)=>{
    const sql = `INSERT INTO pending_toko(post_by,nama_toko,daerah) VALUES
                (${body.postBy},'${body.namaToko}','${body.daerah}')`

    return db.query(sql)
}

export const deletePendingToko = (id)=>{
    const sql = `DELETE FROM pending_toko
                WHERE id=${id}`
    
    return db.query(sql)
}