const express=require('express')
const { taskReadAll, taskCreate, taskUpdate, taskDelete, taskRead } = require('../controllers/taskHandler')
const router=express.Router()


router.get('/',taskReadAll)
router.post('/',taskCreate)
router.patch('/:id',taskUpdate)
router.delete('/:id',taskDelete)


module.exports=router