"use strict";
/*
function describeCountry(country, population, capitalCity) {
    return ` ${country} has ${population} million people and it's capital city is ${capitalCity}. `;
};

const countryCroatia = describeCountry("Croatia", 4.4, "Zagreb");
const countrySerbia = describeCountry("Serbia", 6.9, "Beograd");
const countryBosnia = describeCountry("Bosnia", 3.3, "Sarajevo");

console.log(countryCroatia, countrySerbia, countryBosnia);
*/
// function declaration
function percentageOfWorld(population) {
    return (population / 7900) * 100
}
const chinaPercentage = percentageOfWorld(1441);
const croatiaPercentage = percentageOfWorld(4.4);
const russiaPercentage = percentageOfWorld(144.5);
/*
console.log(chinaPercentage, croatiaPercentage, russiaPercentage);

// function expression
const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100
}
const chinaPercentage2 = percentageOfWorld2(1441);
const croatiaPercentage2 = percentageOfWorld2(4.4);
const russiaPercentage2 = percentageOfWorld2(144.5);

console.log(chinaPercentage2, croatiaPercentage2, russiaPercentage2);

// Arrow function
const calcAge3 = birthYear => 2020 - birthYear;
const age3 = calcAge3(1996);
console.log(age3);


const percentageOfWorld3 = population => (population / 7900) * 100

const chinaPercentage3 = percentageOfWorld3(1441);
const croatiaPercentage3 = percentageOfWorld3(4.4);
const russiaPercentage3 = percentageOfWorld3(144.5);

console.log(chinaPercentage3, croatiaPercentage3, russiaPercentage3);

const describePopulation = function (country, population) {
    const percentage = percentageOfWorld(population);
    const description = `${country} has ${population} million people, which is about ${percentage}% of the world.`;
    console.log(description);
}

describePopulation("China", 1441);
describePopulation("Croatia", 4.4);
describePopulation("Russia", 144.5);

// FIRST BIG CHALLENGE

const calcAverage = (a, b, c) => (a + b + c) / 3;
//test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log(`No one wins...`);
    }
}
checkWinner(scoreDolphins, scoreKoalas);

// test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);

const populations = [4.4, 33, 144.5, 1144];
console.log(populations.length === 4);

const percentages = [
    percentageOfWorld(populations[0]),
    percentageOfWorld(populations[1]),
    percentageOfWorld(populations[2]),
    percentageOfWorld(populations[3]),
];
console.log(percentages);

const neighbours = ["Bosnia", "Serbia", "Slovenia"];
neighbours.push("Utopia");
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (neighbours.includes("Germany")) {
    console.log(`Central european country!!!`);
} else {
    console.log(`Probably not a central european country :D`);
}

console.log(neighbours.indexOf("Bosnia"));
neighbours[0] = "Albania";
console.log(neighbours);


// DRUGI VELIKI ZADATAK!!

const calcTip = function (bill) {
    const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
    return tip;
}
const bills = [125, 555, 44];

const tips = [
    calcTip(bills[0]),
    calcTip(bills[1]),
    calcTip(bills[2])
]
console.log(bills, tips);

const total = [
    bills[0] + tips[0],
    bills[1] + tips[1],
    bills[2] + tips[2]
]
console.log(total);


const myCountry = {
    country: "Croatia",
    capital: "Zagreb",
    language: "croatian",
    population: 4.4,
    neighbours: ["Serbia", "Bosnia", "Slovenia", "Hungary", "Crna-gora"],
    isIsland: false,
    describe: function () {
        return (`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}! It ${this.isIsland ? "is" : "is not"} an island.`);
    },
};
console.log(myCountry.describe());

//console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);

// Treći veliki zadatak!!

const mark = {
    firstName: "Mark",
    lastName: "Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    },
};
const john = {
    firstName: "John",
    lastName: "Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    },
};
mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
    console.log(`${mark.firstName}'s BMI (${mark.bmi}) is higher than ${john.firstName}'s BMI (${john.bmi})!!`);
} else if (john.bmi > mark.bmi) {
    console.log(`${john.firstName}'s BMI (${john.bmi}) is higher than ${mark.firstName}'s BMI (${mark.bmi})!!`);
}

for (let vote = 1; vote <= 50; vote++) {
    console.log(`Voter number ${vote} is currently voting. 🤿`);
}
*/
const populations = [4.4, 33, 144.5, 1144];
console.log(populations.length === 4);

const percentages = [
    percentageOfWorld(populations[0]),
    percentageOfWorld(populations[1]),
    percentageOfWorld(populations[2]),
    percentageOfWorld(populations[3]),
];
console.log(percentages);

