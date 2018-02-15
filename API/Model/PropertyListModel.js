'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    _id: { type: Schema.ObjectId, auto: true },
    RiskName: {
        type: String,
        Required: 'Please enter'
    },
    Description: {
        type: String,
        Required: 'Please enter'
    },
    Propertytype: {
        type: String,
        Required: 'Please enter'
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    MedicalExpenses:{
        type: String,
        Required: 'Please enter'
    },
    ExpenseType:{
        type: String,
        Required: 'Please enter'
    }
})

module.exports = mongoose.model('User', UserSchema);