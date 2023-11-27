const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: [true, 'Silahkan isikan nama']
    },
    kelas: {
        type: String,
        required: [true, 'Silahkan isikan kelas']
    },
    nis: {
        type: String,
        required: [true, 'Silahkan isikan nis'],
        unique: true
    },
    jurusan: {
        type: String,
        required: [true, 'Silahkan isikan jurusan']
    },
    gender: {
        type: String,
        required: [true, 'Silahkan isikan gender']
    },
    
})

module.exports = mongoose.model('Student', StudentSchema)