import * as Produk from '../models/ProdukModel.js'
import response from '../utils/response.js'
import {
	validationResult
} from 'express-validator'

export const getAllData = async (req, res) => {
	try {
		const query = req.query

		query.limit = (
			query.limit&&
			!isNaN(query.limit)&&
			query.limit>0) ? query.limit : 25
			
		query.page = (
			query.page&&
			!isNaN(query.page)&&
			query.page>0) ? query.page : 1

		if (query.search) return (async ()=>{
			const [data] = await Produk.searchData(query.search)

			response.resSuccess(200, data, "GET searched produk success", res)
		})()

		const [data] = await Produk.getAllData((query.page-1)*query.limit+1,query.limit)
		const [[{total:totalData}]] = await Produk.totalData()

		const page = {
			size: data.length,
			total: totalData,
			totalPages: Math.ceil(totalData/data.length),
			current: query.page ? query.page : 1
		}

		response.resSuccess(200, data, 'GET produk success', res,page)
	} catch (err) {
		response.resFailed(500, err, "GET produk failed", res)
	}
}

export const getDataById = async (req, res) => {
	try {
		const [data] = await Produk.getDataById(req.params.id)

		response.resSuccess(200, data, 'GET produk success', res)
	} catch (err) {
		console.log(err)
		response.resFailed(500, err, "GET produk failed", res)
	}
}

export const postData = async (req, res) => {
	try {
		const result = validationResult(req)
		if (!result.isEmpty()) {
			const error = result.array();

			return response.resFailed(400, {
				message: 'Invalid input value',
				input: error
			}, 'POST produk failed', res)
		}

		const [data] = await Produk.postData(req.body)
		response.resSuccess(201,data,'POST produk success',res)
	} catch (err) {
		console.log(err)
		response.resFailed(500, err, 'POST produk failed', res)
	}
}

export const putData = async (req, res) => {
	try {
		const result = validationResult(req)
		if (!result.isEmpty()) {
			const error = result.array();

			return response.resFailed(400, {
				message: 'Invalid input value',
				input: error
			}, 'PUT produk failed', res)
		}

		const [data] = await Produk.putData(req.params.id,req.body)
		if(data.affectedRows == 0) return response.resFailed(404,{message: 'Data not found'},'PUT produk failed',res)

		response.resSuccess(200,data,'PUT produk success',res)
	} catch (err) {
		console.log(err)
		response.resFailed(500, err, 'PUT produk failed', res)
	}
}

export const deleteData = async (req, res) => {
	try {
		const [data] = await Produk.getDataById(req.params.id)
		if(data.length <= 0) return response.resFailed(404,{message: 'Data not found'},'DELETE produk failed',res)
		
		const [result] = await Berita.deleteData(req.params.id)

		response.resSuccess(200,result,'DELETE produk success',res)
	} catch (err) {
		console.log(err)
		response.resFailed(500, err, 'DELETE produk failed', res)
	}
}