console.log(("123456789").slice(0,3));// обрізання строки
var age = 12 ;
console.log(age);

var secondsInMinute = 60;
var minuteInHour = 60;
var hourInDay = 24;
var dayInYear = 365;
var secondsInYear = secondsInMinute * minuteInHour * hourInDay * dayInYear;
console.log(secondsInYear);
var age = 22;
var secondsInMyLife= age*secondsInYear;
console.log(secondsInMyLife);

var gifts = 0;//збільшуємо та зменшуємо змінну на 1
++gifts;
++gifts;
console.log(gifts);
gifts--;
console.log(gifts);

var score = 100;// збільшення та зменшення на конкретне число
score -=10;
score +=15;
console.log(score);

var ballons = 50;
ballons /=2;
console.log(ballons);
ballons *=4;
console.log(ballons);

var string="string";
console.log(string);

var apple = 10;
apple = ` ранета`;
console.log(apple);

var name = "I'm Anna, ";
var myAge = "I'm 9 mounth";
console.log(name + myAge);  

var secret1 = "moon";
var secret2 = "melon";
var secret3 = "kees";
console.log(secret1[1]+secret2[1]+secret3[1]);

var string = "very long talala";
console.log(string.length);
console.log (string.slice(10, 16));

var string ='hello';
console.log(string.toUpperCase());

var test = "hELlo, HOw arE yoU"; // маленька задачка з якою я впоралась, туду)
var Hello = test[0];
var how = test.slice(1);
console.log(Hello.toUpperCase()+how.toLowerCase());

var age = 12; // задачка ст.47 
var accompanied = true;
var ageChild = 11;
var canWatchMovie = ageChild>=age || accompanied;
console.log(canWatchMovie);

var colors =[];
colors[0]="white"
colors[1]="blue";
colors[2]="yellow";
colors[3]="red";
console.log(colors);

colors.push("orange");
console.log(colors);
console.log(colors[colors.length-2]);
colors.unshift("black");
console.log(colors);

var lastColor = colors.pop();
console.log(colors);
colors.unshift(lastColor);
console.log(colors);

var firstColor= colors.shift();
console.log(colors);

var country = ["Ukraine","China","Spain"];
var sity = ["Lviv","Rome","New York"];
var countryAndSity= country.concat(sity);
console.log(countryAndSity);
console.log(sity);
console.log(country.indexOf("China"));
console.log(country[1]);

var animals = ["dog","monkey","cat"];
console.log(animals.join());
console.log(animals.join(" and "));

var landmarks = [];
landmarks.push('my house');
landmarks.push('dorozka k domy');
landmarks.push('fanar');
landmarks.push('gydrant');
landmarks.push('stansia');
landmarks.push('cat');
landmarks.push('schole');
landmarks.push('house');
landmarks.pop();
landmarks.pop();
console.log(landmarks.pop());

 console.log( Math.random());

 console.log( Math.random() * 10);

 console.log( Math.random() * 100);
 console.log( Math.floor(Math.random() * 100));

 var babyNames = [ 'Anna', 'Nina', 'Dina', 'Tanya', 'Lisa' , 'Mary'];
 var NumberOfNames = babyNames.length;
 var randomNames = Math.floor(Math.random () * NumberOfNames);
 console.log (babyNames[randomNames]);

var phrases =[
    'ky ky',
    're re',
    'be be',
    'ar ar',
    'ta ta'
];
var randomPhrases= Math.floor(Math.random() * (phrases.length));
console.log(phrases[randomPhrases]);
 
// ЗАДАЧКА СТ.69 РАНДОМНИЙ ОПИС ОБЛИЧЧЯ З НОСОМ ТА ОЧИМА
var fase = [
    'oval',
    'strange',
    'beautiful',
    'ugly'
];
var nose = [
    'big',
    'smole',
    'nise'
];
var eyes = [
    'blu',
    'red',
    'nise'
];
var randomFase = fase[Math.floor(Math.random() * fase.length)];
var randomNose = nose[Math.floor(Math.random() * nose.length)];
var randomEyes = eyes[Math.floor(Math.random() * eyes.length)];
var randomDescribe = ['You have', randomFase, 'fase', 'with', randomNose , 'nose', 'and', randomEyes, 'eyes'+'!!!' ].join(' ');
console.log( randomDescribe);

 // задачка , ст 69 . випадкове замовлення , задача така як попередня . роблю її щоб потренуватися.

 var menu = [
     'desert',
     'salad',
     'mein curses',
     'soup'
 ];
 var vegeteble =[
     'onion',
     'potato',
     'tomato',
     'carrot'
 ];
var fruit = [
    'melon',
    'bluberries',
    'cherry',
    'orange'
];
var drink = [
    'water',
    'milk',
    'coca-cola',
    'juise'
];
var menuRandom1 = menu[Math.floor(Math.random()*menu.length)];
var menuRandom2 = menu[Math.floor(Math.random()*menu.length)];
var vegetebleRandom = vegeteble[Math.floor(Math.random()*vegeteble.length)];
var fruitRandom = fruit[Math.floor(Math.random()*fruit.length)];
var drinkRandom = drink[Math.floor(Math.random()*drink.length)];
var order = ['I wont some',menuRandom1,'with',vegetebleRandom,',', menuRandom2, 'with', fruitRandom, 'and glass of', drinkRandom + '!'].join(' ');
console.log(order);



//                                                 ОБЄКТИ


var anna = {
    age : '9 mounth',
    eyes : 'grey',
    nose : 'smole',
    nails : 'big'
};
console.log(anna.age);
console.log(anna.nose);
console.log(Object.keys(anna));

