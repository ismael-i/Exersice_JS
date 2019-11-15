function is_question(Array) {
    if (Array[Array.length - 1] != "?") {
        return false;
    }
    return true;
};

function is_angry(Array) {

    if (Array.length == 0) {
        return false;
    } else {
        for (let index in Array) {
            if (Array[index] == Array[index].toLowerCase()) {
                return false;
            };
        };
        return true;
    }
};

function is_fortnite_there(Array) {
    for (let index in Array) {
        if (Array[index] == "Fortnite") {
            return true;
        };
    };
    return false;
};

function is_empty(Array) {
    if (Array.length > 0) {
        return false;
    };
    return true;
};

function AcneBOT_answer(Array1, Array2) {

    if (is_question(Array1) == true) {
        console.log("Ouais ouais...");
    } else if (is_angry(Array1) == true) {
        console.log("Pwah, calme-toi...");
    } else if (is_fortnite_there(Array2) == true) {
        console.log("On s'fait une partie soum-soum?");
    } else if (is_empty(Array1) == true) {
        console.log("T'es en PLS");
    } else { console.log("balek.") }
};



function AcneBOT(sentence) {
    //scinder la phrase en mots et lettres.

    let lettersArray = [];
    let wordsArray = [];
    lettersArray = (sentence.split(""));
    wordsArray = (sentence.split(" "));

    //Action du Bot face à la phrase
    AcneBOT_answer(lettersArray, wordsArray);
};

var sentence = prompt("What do you want?");
AcneBOT(sentence);