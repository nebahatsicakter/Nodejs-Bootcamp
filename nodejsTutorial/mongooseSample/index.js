const express = require("express");
const { webUserController } = require("./controllers/userController");
const { connectionHelper } = require('./dbconnect/connectionHelper');
var bodyParser = require('body-parser');

const app=express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

connectionHelper.connect();


app.get('/api/webusers', (req, res) => {
  webUserController.getAll(req, res)
})

app.get("/api/webusers/:id",(req,res)=>{
  webUserController.getById(req,res);
})

app.post("/api/webusers",(req,res)=>{
  webUserController.add(req,res);
})


app.listen(8080, () => {
  console.log("Sunucum çalışıyor...");
})