

var cities = ['İzmir', 'İstanbul', 'Ankara', 'Trabzon', 'Diyarbakır']


//Şehirleri tek tek console a yaz.

for (i = 0; i < cities.length; i++) {

    //console.log(cities[i]);
}


cities.forEach(getCity)

function getCity(item, index) {
    //console.log("şehir: " + item + " " + index);
}

cities.forEach(function(item,index){
    //console.log("şehir: " + item + " " + index);
})



cities.map(function(item,index){
    console.log("şehir: " + item + " " + index);
})




function calcData(x, y, callBack) {
    var result = (x * y) + 20.5;
    callBack(result);
}



calcData(20, 2, myCallBackFunc)

function myCallBackFunc(data) {
    //console.log("result: ", data);
}