const { webUser } = require("../models/userModel");

var CryptoJS = require("crypto-js");
const { userLoginKey } = require('../env/shaKey');

const webUserController = {
  getById: async (req, res) => {

    var id = req.params.id;
    
    // var result = await webUser.findById(id).exec()
    // res.json(result);

    //aşağıdaki tanımlama eski tip tanımlama

    webUser.findById(id, (err, doc) => {
      if (!err && doc != null) {
        res.json(doc);
      } else if (doc == null) {
        res.status(404).json("kullanıcı bulunamadı");
      } else {
        res.status(500).json(err);
      }
    });
  },
  getAll: (req, res) => {
    var query = {};
    var fields = req.query.fields;

    var fieldResult = "";

    if (fields != undefined) {
      var fieldArray = fields.split(",");
      fieldArray.forEach((item) => {
        fieldResult = item + " " + fieldResult;
      });
    }

    if (req.query.name !== undefined) {
      query.name = req.query.name;
    }
    if (req.query.surname !== undefined) {
      query.surname = req.query.surname;
    }
    if (req.query.address !== undefined) {
      query.address = req.query.address;
    }

    webUser.find(query, fieldResult, (err, docs) => {
      if (!err) {
        res.json(docs);
      } else {
        res.json(err);
      }
    });
  },
  add:(req,res)=>{
    var encryptPassword = CryptoJS.AES.encrypt(req.body.password, userLoginKey).toString();

    var newWebUser = new webUser({
        name: req.body.name,
        surname: req.body.surname,
        address: req.body.address,
        password: encryptPassword,
        email: req.body.email
    })

    newWebUser.save((err, doc) => {

        if (!err) {
            res.status(201).json(doc)
        }
        else {
            res.status(500).json(err);
        }
    })
  }
};
module.exports = {
  webUserController,
};
