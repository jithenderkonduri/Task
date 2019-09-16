var _ = require("lodash");
var mongoose = require("mongoose");
var express = require("express");
var router = express.Router();
var models = require("../../models.js");
var User = models.User;

exports.create1 = async function(req, res) {
  try {
    const result = await User.findOne({ email: "demo1@yopmail.com" });
    res.json(result);
    res.end();
  } catch (err) {
    console.log(err.stack);
  }
};
exports.create2 = async function(req, res) {
  try {
    const result = await User.findOne({ email: "jithender@yopmail.com" });
    res.json(result);
    res.end();
  } catch (err) {
    console.log(err.stack);
  }
};
