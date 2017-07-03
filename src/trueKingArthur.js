"use strict";

/*
 experiment with object literals, arrow functions, for of, etc.
 */

let trueKingArthur = {
    name: "Arthur",
    isArthur: true,
    isKing: true
};

let normalGuyArthur = {
    name: "Arthur",
    isArthur: true,
    isKing: false
};

let people = new Set();
people.add(trueKingArthur);
people.add(normalGuyArthur);

let swordCheck = {
    person: {},
    weapon: {},
    init: (person) => {
        console.log("Object literal example...");
        console.log("Checking person named " + person.name);
        swordCheck.person = person;
        console.log("Checking swords now...")
    },
    assignWeapon: () => {
        swordCheck.person.isArthur && swordCheck.person.isKing ? swordCheck.weapon = "Excal" : swordCheck.weapon = "Normal";
        console.log("weapon assigned...");
    },
    reportWeapon: () => console.log("Current sword is: " + swordCheck.weapon),
    end: () => console.log("...")
};

//main loop
for (let person of people) {
    swordCheck.init(person);
    swordCheck.assignWeapon();
    swordCheck.reportWeapon();
    swordCheck.end();
}

