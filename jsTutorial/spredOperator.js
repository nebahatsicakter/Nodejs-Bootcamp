
var cities = ['İstanbul', 'Ankara', 'İzmir', 'Adana', 'Diyarbakır', 'Trabzon', 'Edirne']
var cities2 = ['Kırklareli', 'Tekirdağ']

//spread operator
var newCities = ['Uşak', ...cities, 'Afyon', 'Denizli', ...cities2]


console.log(newCities);



 var webUser = {
     name:'Çağatay',
     surname: 'Yıldız',
     city:'İstanbul'
 }

 //webuser a country adında bir alan ekle ve değeri 'Türkiye' olsun

//  webUser.country = 'Türkiye';
//  console.log(webUser);


 var newWebuser = {...webUser, country:'Turkey'}

 console.log('New Web User', newWebuser);