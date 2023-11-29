import * as Toko from '../models/TokoModel.js'
import {
	getProdukByTokoId as getProdukByToko
} from '../models/ProdukModel.js'
import response from '../utils/response.js'

import {
	validationResult
} from 'express-validator'

export const getAllData = async (req, res) => {
	try {
		const query = req.query

		query.limit = (
			query.limit &&
			!isNaN(query.limit) &&
			query.limit > 0) ? query.limit : 25

		query.page = (
			query.page &&
			!isNaN(query.page) &&
			query.page > 0) ? query.page : 1

		// CEK JIKA ADA REQUEST QUERY PADA URL
		if (query.search) return (async () => {
			const [data] = await Toko.searchData(query.search)

			response.resSuccess(200, data, "GET searched toko success", res)
		})()

		const [data] = await Toko.getAllData((query.page - 1) * query.limit + 1, query.limit)
		const [
			[{
				total: totalData
			}]
		] = await Toko.totalData()

		const page = {
			size: data.length,
			total: totalData,
			totalPages: Math.ceil(totalData / data.length),
			current: query.page ? query.page : 1
		}

		response.resSuccess(200, data, "GET toko success", res, page)
	} catch (err) {
		console.log(err.stack)
		response.resFailed(500, err, 'GET toko failed', res)
	}
}

export const getDataById = async (req, res) => {
	try {
		const [data] = await Toko.getDataById(req.params.id)
		if(data.length <= 0) return response.resFailed(404,{message: 'Data not found'},'GET toko failed',res)

		response.resSuccess(200, data, "GET toko by id success", res)
	} catch (err) {
		console.log(err)
		response.resFailed(500, error, 'GET toko failed', res)
	}
}

export const getProdukByTokoId = async (req, res) => {
	try {
		const [data] = await getProdukByToko(req.params.id)

		response.resSuccess(200, data, "GET produk by toko id success", res)
	} catch (err) {
		console.log(err)
		response.resFailed(500, err, 'GET produk by toko id failed', res)
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
			}, 'POST toko failed', res)
		}

		const [data] = await Toko.postData(req.body)
		response.resSuccess(201,data,'POST toko success',res)
	} catch (err) {
		console.log(err)
		response.resFailed(500, err, 'POST toko failed', res)
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
			}, 'PUT toko failed', res)
		}

		const [data] = await Toko.putData(req.params.id,req.body)
		if(data.affectedRows == 0) return response.resFailed(404,{message: 'Data not found'},'PUT toko failed',res)

		response.resSuccess(200,data,'PUT toko success',res)
	} catch (err) {
		console.log(err)
		response.resFailed(500, err, 'PUT toko failed', res)
	}
}

export const deleteData = async (req, res) => {
	try {
		const [data] = await Toko.getDataById(req.params.id)
		if(data.length <= 0) return response.resFailed(404,{message: 'Data not found'},'DELETE toko failed',res)
		
		const [result] = await Berita.deleteData(req.params.id)

		response.resSuccess(200,result,'DELETE toko success',res)
	} catch (err) {
		console.log(err)
		response.resFailed(500, err, 'DELETE toko failed', res)
	}
}