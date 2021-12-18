const mongoose = require("mongoose");
const { Schema } = mongoose;

mongoose
  .connect(
    "mongodb+srv://user_database:149169ns@cluster0.ushl3.mongodb.net/myDatabase"
  )
  .catch((err) => {
    //Bağlantı sırasında bir hata meydana gelirse buraya düşüyor
    console.log("Connection Error: ", err);
  });


const productSchema = new Schema({
  name: String,
  unitPrice: Number,
  endDate: Date,
  company: String,
  country: String,
});


const companySchema = new Schema({
  companyName: String,
  phoneNumber: Number,
  emailAddress: String,
});

const campaignSchema = new Schema({
  campaignName: String,
  startDate: Date,
  endDate: Date,
  discountQuantity: {type: Number, required:true},
  detail: {},
});


const products = mongoose.model("Products", productSchema);
const campaign=mongoose.model("Campaign",campaignSchema);
const company=mongoose.model("Company",companySchema);

var product=new products({
    name:"Butter",
    unitPrice:20,
    company: "ABC company",
    country:"USA"
})

product.save(function (err,result) {
    if(err){
        console.log(err);
    }
    else{
        console.log("Ürün eklendi.",result)
    }
})

var company1=new company({
    companyName:"ABC company",
    phoneNumber:5515562365,
    emailAddress:"abcCompany@mail.com"
})


company1.save(function (err,result) {
    if(err){
        console.log(err);
    }
    else{
        console.log("Şirket eklendi.",result)
    }
})


var campaign1=new campaign({
  campaignName:"10% DİSCOUNT ON ALL PRODUCT"
})


campaign1.save(function (err,result) {
    if(err){
        console.log(err);
    }
    else{
        console.log("Kampanya eklendi.",result)
    }
})