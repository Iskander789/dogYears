// making variable for my age
let myAge = 44;
// making earlyYears = 2
let earlyYears = 2;
earlyYears *= 10.5;
//new variable laterYears created
let laterYears = myAge - 2;
// laterYears now reflects dog years after 2
laterYears *= 4;
console.log(earlyYears , laterYears);
//new variable, my age in dog years
let myAgeInDogYears = (earlyYears + laterYears);
//New variable myName, Sean to lowercase
let myName = 'Sean'.toLowerCase();
//Putting it all together
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)

