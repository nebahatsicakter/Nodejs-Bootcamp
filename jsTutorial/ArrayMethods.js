
var cities = ['İstanbul', 'Ankara', 'İzmir', 'Adana', 'Diyarbakır', 'Trabzon', 'Edirne']
var cities2 = ['Kırklareli', 'Tekirdağ']

//spread operator
var newCities = ['Uşak', ...cities, 'Afyon', 'Denizli', ...cities2]


console.log(newCities);



//dizinin ilk elemanı
// console.log('İlk eleman', cities[0]);

// console.log('Eleman sayısı', cities.length);


//delete komutu dizideki arkadaşı siler ama diziden UÇURMAZ. onun yerine undefined yazar
// delete cities[1]

// console.log(cities[1]);


//splice metodu ile bir başlangıç indexi belirtiyorum. Daha sonra o indexten kaç adet arkadaşı sileceğimi söylüyorum

// cities.splice(2,2)
// console.log(cities);


// var newCities = cities.slice(0,4)

// console.log(cities);
// console.log(newCities);

//Diziye yeni bir  veya daha fazla eleman ekleme

cities.push('Muğla')
cities.push("Çanakkale", 'Aydın', 'Manisa')

//console.log(cities);