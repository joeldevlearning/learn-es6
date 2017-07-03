/*
 *
 masher example
 mash a list of words together into nonsense combinations
 *
 */

//literals
let mash = {};
mash.materials = [
    'hydrogen',
    'helium',
    'lithium',
    'beryllium',
    'watermelon',
    'chardonnay',
    'paprika',
    'femur',
    'salt',
    'eggshell'
];

//functions

mash.howManyCharacters = (string) => {
    return string.length;
};

mash.genRandomSet = (charCountSet) => {
    "use strict";
    return charCountSet.map(function (num) {
        if (num <= 0) {
            return 0;
        }
        else {
            return mash.genRandomInt(num - 3, num);
        }
    });
};

mash.genRandomInt = (min, max) => {
    "use strict";
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};

/*
 combine an array of strings into mutated combinations
 random spots within every two strings are chosen, via randomness
 the strings are joined at this point
 */
mash.splice = (pos1, pos2) => {
    "use strict";


    //split string1 at pos1, string2 at pos2
    //concat pieces together

    return spliced;
};


mash.masher = (materials, randomness) => {
    "use strict";
    materials.map(materials, mash.splice());
};


/*
 main function
 */

mash.masher = (materials) => {
    materialCharCount = materials.map(mash.howManyCharacters);
    randomness = mash.genRandomSet(materials);
    splitValues = mash.splitString(materials, randomSet);
    randomOrder(splitValues);
    return concatEachTwo(splitSet);
};