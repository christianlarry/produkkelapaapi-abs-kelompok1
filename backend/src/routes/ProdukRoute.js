import express from 'express'
import { body } from 'express-validator'
import valMsg from '../utils/validationMessage.js'
import checkRole from '../middlewares/checkRole.js'

import * as ProdukController from '../controllers/ProdukController.js'

// VALIDATION RULES
const validation = [
  body('idToko')
    .exists().withMessage(valMsg.existsMsg)
    .notEmpty().withMessage(valMsg.emptyMsg)
    .isNumeric().withMessage(valMsg.numericMsg),
  body('namaProduk')
    .exists().withMessage(valMsg.existsMsg)
    .notEmpty().withMessage(valMsg.emptyMsg)
    .isLength({max: 100}).withMessage('Maximal 100 karakter'),
  body('harga')
    .exists().withMessage(valMsg.existsMsg)
    .notEmpty().withMessage(valMsg.emptyMsg),
  body('description')
    .exists().withMessage(valMsg.existsMsg)
    .notEmpty().withMessage(valMsg.emptyMsg)
    .isLength({max: 500}).withMessage('Maximal 500 karakter'),
  body('manfaat')
    .exists().withMessage(valMsg.existsMsg)
    .notEmpty().withMessage(valMsg.emptyMsg)
    .isLength({max: 500}).withMessage('Maximal 500 karakter')
]

const router = express.Router()

router.get('/produk',ProdukController.getAllData)
router.get('/produk/:id',ProdukController.getDataById)

router.post('/produk',checkRole('admin'),validation,ProdukController.postData)
router.put('/produk/:id',checkRole('admin'),validation,ProdukController.putData)
router.delete('/produk/:id',checkRole('admin'),ProdukController.deleteData)

export default router