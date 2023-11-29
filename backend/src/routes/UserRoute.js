const express = require('express')
const {body} = require('express-validator')
const {getAllData,getDataById,postData,updateData,updatePassword,updateUsername,deleteData} = require('../controllers/UserController')
const valMsg = require('../utils/validationMessage')
const checkRole = require('../middlewares/checkRole')

const router = express.Router()

router.get('/user',checkRole('admin'),getAllData)
router.get('/user/:id',checkRole('admin'),getDataById)

const dataValidation = [
    body('username')
        .exists().withMessage(valMsg.existsMsg)
        .notEmpty().withMessage(valMsg.emptyMsg)
        .isLength({min: 4,max: 32}).withMessage('Minimal 4 sampai 32 karakter')
        .toLowerCase().customSanitizer(value=>{
            if(value){
                return value.replace(' ','')
            }
        })
        .escape(),
    body('password')
        .exists().withMessage(valMsg.existsMsg)
        .notEmpty().withMessage(valMsg.emptyMsg)
        .isStrongPassword({minSymbols: 0}).withMessage(valMsg.strongPassMsg),
    body('role')
        .exists().withMessage(valMsg.existsMsg)
        .notEmpty().withMessage(valMsg.emptyMsg)
        .custom(value=>{
            if(['admin','user'].includes(value)) return true
            return false
        }).withMessage(valMsg.invalidOptionMsg)
        .escape()
]

router.post('/user',checkRole('admin'),dataValidation,postData)

router.put('/user/:id',checkRole('admin'),dataValidation,updateData)

router.patch('/user/username/:id',[
    body('username')
        .exists().withMessage(valMsg.existsMsg)
        .notEmpty().withMessage(valMsg.emptyMsg)
        .isLength({min: 4,max: 32}).withMessage('Minimal 4 sampai 32 karakter')
        .toLowerCase().customSanitizer(value=>{
            if(value){
                return value.replace(' ','')
            }
        })
],updateUsername)

router.patch('/user/password/:id',[
    body('newPassword')
        .exists().withMessage(valMsg.existsMsg)
        .notEmpty().withMessage(valMsg.emptyMsg)
        .isStrongPassword({minSymbols: 0}).withMessage(valMsg.strongPassMsg)
        .optional({checkFalsy: true})
],updatePassword)

router.delete('/user/:id',checkRole('admin'),deleteData)

module.exports = router;