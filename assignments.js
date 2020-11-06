/*
// FUNDAMENTALS PART 1

const country = "Croatia";
const continent = "Europe";
let population = 4.5;

console.log(country);
console.log(continent);
console.log(population);

const isIsland = true;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

language = "Croatian";
//ostavila sam language pod let jer mu inace nebi mogla pridodati vrijednost iako je inace const varijabla
//let continent = "Europe";
//varijabla vrste const ne moze mjenjati vrijednost

const description = `${country} is in ${continent}, and it's ${population} million people speak ${language}!`;
console.log(description);

console.log(population / 2);
population++;
console.log(population);
let finPop = 6;
console.log(population > finPop);
let avgPop = 33;
console.log(population < avgPop);

// PRVI VEĆI ZADATAK
const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;
const markWeight2 = 95;
const markHeight2 = 1.88;
const johnWeight2 = 85;
const johnHeight2 = 1.76;

const bmiMark = markWeight / markHeight ** 2;
const bmiMark2 = markWeight2 / markHeight2 ** 2;

const bmiJohn = johnWeight / johnHeight ** 2;
const bmiJohn2 = johnWeight2 / johnHeight2 ** 2;

console.log(bmiMark, bmiJohn);
console.log(bmiMark2, bmiJohn2);

const markHigherBmi = bmiMark > bmiJohn;
const markHigherBmi2 = bmiMark2 > bmiJohn2;

console.log(markHigherBmi, markHigherBmi2);

population = 4.4;
averagePop = 33;
if (population > averagePop) {
    console.log(`Croatia's population is above average!`);
} else {
    console.log(`Croatia's population is ${averagePop - population} million below average!`);
};

// DRUGI VEĆI ZADATAK

const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;

const bmiMark = markWeight / markHeight ** 2;
const bmiJohn = johnWeight / johnHeight ** 2;

console.log(bmiMark, bmiJohn);

const markHigherBmi = bmiMark > bmiJohn;
console.log(markHigherBmi);

if (markHigherBmi) {
    console.log(`Mark's BMI (${bmiMark}) is higher than John's BMI (${bmiJohn})!!!🎉`)
} else {
    console.log(`John's BMI (${bmiJohn}) is higher than Mark's BMI (${bmiMark})!!!🎉`)
};

console.log("9" - "5"); // 4 👌
console.log("19" - "13" + "17"); // 617 👌
console.log("19" - "13" + 17); // 23 👌
console.log("123" < 57); // false 👌
console.log(5 + 6 + "4" + 9 - 4 - 2); // 117 netočno, 1143 😒

const numNeighbours = Number(prompt(`How many neighbour countries does your country have? 🌏`));

if (numNeighbours === 1) {
    console.log(`Only 1 border!! :O`);
} else if (numNeighbours > 1) {
    console.log(`More than 1 border!!`);
} else {
    console.log(`No borders!! 😢😢`);
};

const speaksEnglish = true;
const lessPeople = true;
const notIsland = true;

if (speaksEnglish && lessPeople && notIsland) {
    console.log(`YAY Sarah can live here`);
} else {
    console.log(`OH NO!!! Not a country for Sarah!!`);
};

// TREĆI VEĆI ZADATAK

const dolphinsAverage = (96 + 108 + 89) / 3;
const koalasAverage = (88 + 91 + 110) / 3;
console.log(dolphinsAverage, koalasAverage);

if (dolphinsAverage > koalasAverage) {
    console.log(`Dolphins win!!! 🎁💖`);
} else if (dolphinsAverage < koalasAverage) {
    console.log(`Koalas win!!! hehe ✔🌹😎`);
} else if (dolphinsAverage === koalasAverage) {
    console.log(`Both win the trophyy!!!💋💕`);
};

// Bonus 1 i 2
const dolphinsAverage = (97 + 112 + 101) / 3;
const koalasAverage = (109 + 95 + 106) / 3;
console.log(dolphinsAverage, koalasAverage);

if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
    console.log(`Dolphins win!!! 🎁💖`);
} else if (dolphinsAverage < koalasAverage && koalasAverage >= 100) {
    console.log(`Koalas win!!! hehe ✔🌹😎`);
} else if (dolphinsAverage === koalasAverage && dolphinsAverage >= 100 && koalasAverage >= 100) {
    console.log(`Both win the trophyy!!!💋💕`);
} else {
    console.log(`NO ONE WINS THE TROPHY!!! 😢😢😢😢`);
};

const language = "chinese";

switch (language) {
    case "chinese":
    case "mandarin":
        console.log(`'MOST number of native speakers!`);
        break;

    case "spanish":
        console.log(`2nd place in number of native speakers`);
        break;

    case "english":
        console.log(`3rd place`);
        break;

    case "hindi":
        console.log(`Number 4`);
        break;

    case "arabic":
        console.log(`5th most spoken language`);
        break;

    default:
        console.log(`Great language too! :D`);
};

const population = 4.4;
console.log(`Croatia's population is ${population > 33 ? "above" : "below"} average`);

// ČETVRTI VEĆI ZADATAK
// MOJA VERZIJA
const bill = 275;
let tip = (bill / 100) * 15;
let tip2 = (bill / 100) * 20;

console.log(`The bill was ${bill}, the tip was ${bill >= 50 && bill <= 300 ? tip : tip2} and the total value ${(bill >= 50 && bill <= 300 ? tip : tip2) + bill}`);

// NJEGOVA VERZIJA
const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip} and the total value ${bill + tip}`);
*/
// FUNADMENTALS PART 2

