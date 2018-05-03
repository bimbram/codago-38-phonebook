"use strict"
const mongoose = require('mongoose');

module.exports = mongoose.model('Phonebook', new mongoose.Schema({
  name: String,
  phone: String
}))
