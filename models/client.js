const mongoose = require('mongoose')
const { number } = require('yargs')
const Schema = mongoose.Schema


const clientSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    dateOfBirth: Date(),
    homeless: Enum(["Yes", "No"]),
    address: {type: String, required: true},
    aptNum: {type: String, required: true},
    city: {type: String, required: true},
    state: {type: String, required: true},
    zip: {type: String, required: true, maxLength: 5},
    phone:{type: Number, required: true},
    email:{type: String, required: true}

})