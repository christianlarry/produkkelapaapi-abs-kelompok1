import {getDataByUsername,postData as postUser} from '../models/UserModel.js'
import {insertInvalidAccessToken} from '../models/AuthModel.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import response from '../utils/response.js'
import { validationResult } from 'express-validator'

const generateAccessToken = (payload)=>{
    return jwt.sign(payload,process.env.ACCESS_TOKEN_SECRET,{
        expiresIn: '1h'
    })
}

export const validateLoginAndCreateToken = async (req,res)=>{
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            const error = errors.array()

            return response.resFailed(400,{message: 'Invalid input value',input: error},'Login failed',res)
        }

        // CHECK USERNAME
        const [data] = await getDataByUsername(req.body.username)
        if(data.length == 0) return response.resFailed(404,{message: 'Username tidak ditemukkan'},'Login failed',res)

        // CHECK PASSWORD
        const isPasswordMatch = await bcrypt.compare(req.body.password,data[0].password)
        if(!isPasswordMatch) return response.resFailed(400,{message: 'Password salah'},'Login failed',res)

        const accessToken = generateAccessToken({
            id: data[0].id,
            nama_lengkap: data[0].nama_lengkap,
            username: data[0].username,
            picture_url: data[0].picture_url,
            role: data[0].role
        })

        response.resSuccess(200,{accessToken},'Login success',res)

    } catch (err) {
        response.resFailed(500,err.stack,'Login failed',res)
    }
}

export const handleLogout = (req,res)=>{
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if(!token) return response.resFailed(404,{message: 'Sedang tidak login'},'Logout failed',res)

    try {
        insertInvalidAccessToken(token)
        
        res.sendStatus(200)
    } catch (err) {
        response.resFailed(500,err.message,'Logout failed',res)
    }
}

export const handleRegister = async (req,res)=>{
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            const error = errors.array()

            return response.resFailed(400,{message: 'Invalid input value',input: error},'Register failed',res)
        }

        req.body.password = await bcrypt.hash(req.body.password,12)
        req.body.role = 'user'

        const [data] = await postUser(req.body)

        response.resSuccess(201,data,'Register success',res)

    } catch (err) {
        response.resFailed(500,err.message,'Register failed',res)
    }
}