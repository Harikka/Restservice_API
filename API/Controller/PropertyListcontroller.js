'use strict';

var mongoose = require('mongoose');
var User=require('../Model/PropertyListModel');


exports.list_all_users = function (req, res) {
    User.find({}, function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
}

//House risk

exports.list_all_Houserisks = function (req, res) {
    User.find({"Propertytype":"House"}, function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
}

//Automobile risk
exports.list_all_AutoMobilerisks = function (req, res) {
    User.find({"Propertytype":"AutoMobile"}, function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
}

//Medical risk
exports.list_all_Medicalrisks = function (req, res) {
    User.find({"Propertytype":"Medical"}, function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
}


exports.create_a_user = function (req, res) {
    var new_user = new User(req.body);
    new_user.save(function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
}

exports.read_a_user = function (req, res) {
    User.findById(req.params.userId, function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
}