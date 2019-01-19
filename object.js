 console.log("hi 1");
 var kate = {name : 'kate', age : 11, favouriteColor : ['black', 'yellow']};
 var mary = {name : 'mary', age : 13, favouriteColor : ['green' , 'broun', 'white']};
 var nina = {name : 'nina', age : 10, favouriteColor : ['yellow' , 'red', 'purple']};
 
 var friends = [kate, mary, nina];
 console.log(friends[1]);
 console.log(friends[0].favouriteColor[1]);
 console.log(friends);

 
var orange = {};
orange['anna']=1;
orange['kate']=5;
orange['suzi']=3;
console.log(orange['suzi']);
orange['anna']+=6;
console.log(orange['anna']);
console.log(orange);

var rating ={
    geometry: {
        anna: 76,
        robert:56,
        elza:88,
        bob:45
    },
    history: {
        anna: 66,
        robert:89,
        elza:81,
        bob:77
    },
    language: {
        anna: 79,
        robert:47,
        elza:90,
        bob:69
    }
};
var historyRating = rating['history'];
console.log(historyRating.anna);
console.log(historyRating);

//ЗАДАЧКА СТ.82
 
var scores= {
    david: 6,
    emma: 7,
    robert:8,
};
scores['emma']+=5;
scores['robert']-=1;
console.log(scores);

//задачка ст.82
 var myCrazyObject = {
     'name':'kala',
     'some array': [7,9,{purpose:'rere',number:123},3.3],
     'random animal':'gggg'
 };
 var tmp = myCrazyObject['some array'];
 console.log(tmp);
 var tmp1 = tmp[2];
 console.log(tmp1)
 var tmp2 = tmp1.number;