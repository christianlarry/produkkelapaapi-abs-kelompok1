import express from 'express'
import { body } from 'express-validator'
import valMsg from '../utils/validationMessage.js'

import * as TokoController from '../controllers/TokoController.js'

const router = express.Router()

// POST VALIDATION RULES
const validation = [
  body('namaToko')
    .exists().withMessage(valMsg.existsMsg)
    .notEmpty().withMessage(valMsg.emptyMsg)
    .isLength({max: 200}).withMessage('Maximal 200 karakter'),
  body('daerah')
    .exists().withMessage(valMsg.existsMsg)
    .notEmpty().withMessage(valMsg.emptyMsg)
    .isLength({max: 200}).withMessage('Maximal 200 karakter')
]

router.get('/toko',TokoController.getAllData)
router.get('/toko/:id',TokoController.getDataById)
router.get('/toko/:id/produk',TokoController.getProdukByTokoId)

router.post('/toko',validation,TokoController.postData)
router.put('/toko/:id',validation,TokoController.putData)
router.delete('/toko/:id',TokoController.deleteData)

export default router