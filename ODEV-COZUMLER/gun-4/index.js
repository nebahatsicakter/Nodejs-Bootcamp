const http = require("http");
const express= require('express')
const app=express();


// const fs = require("fs");

// const port = 8080;
// const server = http.createServer(function (req, res) {
//   if (req.url == "/") {
//     fs.readFile("./index.html", function (err, data) {
//       if (err == null) {
//         res.writeHead(200);
//         res.end(data);
//       } else {
//         res.writeHead(500);
//         res.end("Sunucuda hata meydana geldi.");
//       }
//     });
//   } else if (req.url == "/about") {
//     fs.readFile("./about.html", function (err, data) {
//       if (err == null) {
//         res.writeHead(200);
//         res.end(data);
//       } else {
//         res.writeHead(500);
//         res.end("Sunucuda hata meydana geldi.");
//       }
//     });
//   } else if (req.url == "/contact") {
//     fs.readFile("./contact.html", function (err, data) {
//       if (err == null) {
//         res.writeHead(200);
//         res.end(data);
//       } else {
//         res.writeHead(500);
//         res.end("Sunucuda hata meydana geldi.");
//       }
//     });
//   } else if (req.url == "/login") {
//     fs.readFile("./login.html", function (err, data) {
//       if (err == null) {
//         res.writeHead(200);
//         res.end(data);
//       } else {
//         res.writeHead(500);
//         res.end("Sunucuda hata meydana geldi.");
//       }
//     });
//   } else if (req.url == "/help") {
//     fs.readFile("./help.html", function (err, data) {
//       if (err == null) {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end(data);
//       } else {
//         res.writeHead(500);
//         res.end("Sunucuda hata meydana geldi.");
//       }
//     });
//   }
// });

// server.listen(port, function () {
//   console.log("Sunucu çalıştı");
// });

app.get('/',(req,res)=>{
  res.send("İndex page")
})
app.get('/about',(req,res)=>{
  res.setHeader('Content-Type', 'text/html')
  res.send("About page")
})

app.listen(8080,function(){
  console.log("Sunucu çalıştı.")
})

