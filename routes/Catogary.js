const {specific,alldata} = require("../controller/Controller")
const catogary=require("express").Router()

catogary.get("/api/:catogary",specific)
catogary.get("/api",alldata)
module.exports=catogary