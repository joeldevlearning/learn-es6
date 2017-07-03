"use strict";

/*
 looping practice
 */

console.log("You found the following treasure: ");

//load treasure list
let treasureSet = new Set("hearing aid",
    "crown of rubies",
    "unmarked currency",
    "secret knowledge",
    "emerald",
    "shark tooth",
    "fake gold",
    "silver spoon",
    "smooth grey stone",
    "fishbone",
    "peacock tail",
    "ball point pen",
    "treasury bond",
    "pirate shirt",
    "gold earing",
    "rat meat",
    "lab-grown diamonds",
    "lost poem of Shakespeare",
    "plastic bottle",
    "Mao's Little Red Book",
    "Hot Topic giftcard",
    "agnry lobster",
    "platinum watch",
    "one million krona",
    "English newspaper from 1911",
    "VHS cassette",
    "pearl",
    "steak",
    "dog bone",
    "silly string",
    "triangle hat",
    "AOL trial CD",
    "piece of modern art",
    "wooden plank",
    "loaf of bread",
    "tenderloin",
    "baseball",
    "diamond",
    "phonebook",
    "blood sample",
    "family heirloom",
    "minotaur horn",
    "pie");

/*
 injectable random generator
 */
let random = {
    //need a better generator
    generateList: () => {
        randomArray = (length, max) => [...new Array(length)]
            .map(() => Math.round(Math.random() * max))
    }
};

class TreasureBox {
    constructor(treasure, randomness) {
        this.treasureBox = treasure;
        this.randomList = randomness;
    }

    get count() {
        return this.treasureBox.length;
    }

}

let box = new TreasureBox(treasureSet, random);
console.log(box.count);

/*
 concept:
 we prepopulate a treasure box with a list of nouns
 we also add randomly generated stacks of gold coins to the list
 "randomly" means that the number of insertions of gold coins,
 the number of coins in a stack, and the placement of the stacks is randomized

 after the treasure box is created, we grab into it and get a variable number of items
 plus a random phrase
 */
