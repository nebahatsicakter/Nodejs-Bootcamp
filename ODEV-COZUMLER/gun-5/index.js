
const express = require("express");
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
//const fetch=require('node-fetch')

fetch("suppliers.json").then((res) => {
  return res.json();
}).then(responseJson=>{
    console.log(responseJson)
});
