var async = require("async");
var express = require("express");
var router = express.Router();
var models = require("../models.js");

var DashboardCtrl = require("../Api/controllers/dashboard.controller.js");

router.get("/create1", DashboardCtrl.create1);
router.get("/create2", DashboardCtrl.create2);

module.exports = router;
