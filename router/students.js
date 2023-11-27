const express = require('express')
const router = express.Router()
const studentcontroller = require('../controllers/student')
const student = require('../controllers/student')

router.get('/All/Students', studentcontroller.index)

router.get('/Choose/Student/:id', studentcontroller.show)

router.post('/Add/Student', studentcontroller.store)

router.put('/Edit/Student/:id', studentcontroller.update)

router.delete('/Remove/Student/:id', studentcontroller.delete)

module.exports = router