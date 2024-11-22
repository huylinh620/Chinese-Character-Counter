
const chineseUnicode = /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uff66-\uff9f]/g;

// Prints Character and Word length on textarea input
function callFunction() {

    let characters = getCharLength()

    //var countChinese = (getUserInput().match(chineseUnicode) || []).length;
    document.getElementById('typed').innerHTML = countChinese();

    document.getElementById("div5").innerHTML = characters;
    //document.getElementById("typed").innerHTML = characters;

    document.getElementById("truncation").innerHTML = getSpaceCount();
    document.getElementById("words").innerHTML = wordEstimate();
    document.getElementById("about").innerHTML = getLetterCount();
    document.getElementById("numbers").innerHTML = getNumberCount();
}

function countChinese() {
    let countChinese = (getUserInput().match(chineseUnicode) || []);
    if (countChinese.length > 0) {
        countChinese = countChinese.join('');
    }
    return countChinese;
}

function wordEstimate() {

    if (countChinese() <= 0) {
        return 0;
    }

    let words = Math.round(countChinese() * .7);

    return words;
}

// Get user input from textarea
function getUserInput() {

    // Assign user input to variable
    var userInput = document.getElementById("userWord").value;
    return userInput;
}

// Get length of characters in textarea
function getCharLength() {
    /*
    if (getUserInput().length <= 3000){
        document.getElementById("typed").style.color = "black";
        document.getElementById("div5").style.color = "black";
        return getUserInput().length;
    }
    else {
        document.getElementById("typed").style.color = "red";
        document.getElementById("div5").style.color = "red";
        return getUserInput().length;
    }
    */
    return getUserInput().length;
}


// Get count of whitespace characters
function getSpaceCount() {
    if (!getUserInput().match(/\s/g)) {
        return 0;
    }
    else {
        return getUserInput().match(/\s/g).length;
    }
}


// Get count of letters
function getLetterCount() {
    if (!getUserInput().match(/[a-z]/gi)) {
        return 0;
    }
    else {
        return getUserInput().match(/[a-z]/gi).length;
    }
}

// Get count of numbers
function getNumberCount() {
    if (!getUserInput().match(/[0-9]/g)) {
        return 0;
    }
    else {
        return getUserInput().match(/[0-9]/g).length;
    }
}

// Copy text in textarea with button click
function copy() {

    if (getUserInput().length > 0) {

        var copyText = document.getElementById("userWord");
        copyText.select();
        copyText.setSelectionRange(0, 99999)
        document.execCommand("copy");

        var x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
    }
    else {
        var x = document.getElementById("snackbarFail");
        x.className = "show";
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
    }
}

// Clear text in textarea with button click
function clearContent() {
    document.getElementById("userWord").value = '';
    callFunction();
}

