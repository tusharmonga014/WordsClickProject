var words = document.querySelectorAll(".word");
var wordsUptillNow = 0;
var Ans = false;

document.getElementsByClassName("checkButton")[0].addEventListener("click", function () {
    document.getElementsByClassName("checkButton")[0].disabled = true;
    if (wordsUptillNow == words.length) {
        var sentence = document.getElementsByClassName("textSentence")[0].textContent;
        checkWord(sentence);
    } else {
        wrongAns();
    }

    document.getElementsByClassName("refresh")[0].classList.remove("hide");
})

document.getElementsByClassName("refresh")[0].addEventListener("click", refresh);

for (var i = 0; i < words.length; i++) {
    words[i].addEventListener("click", function () {
        if (wordsUptillNow < words.length)
            addWord(this.textContent);
    })
}

function addWord(word) {
    var sentenceTillNow = document.getElementsByClassName("textSentence")[0].textContent;
    document.getElementsByClassName("textSentence")[0].textContent = sentenceTillNow + word + " ";
    wordsUptillNow++;
}

function correctAns() {
    console.log("yes");
    Ans = true;
    document.getElementsByClassName("correct")[0].classList.remove("hide");
}

function wrongAns() {
    Ans = false;
    console.log("no");
    document.getElementsByClassName("wrong")[0].classList.remove("hide");

}

function refresh() {

    document.getElementsByClassName("checkButton")[0].disabled = false;
    
    document.getElementsByClassName("refresh")[0].classList.add("hide");
    document.getElementsByClassName("textSentence")[0].textContent = "";

    if (Ans)
        document.getElementsByClassName("correct")[0].classList.add("hide");
    else
        document.getElementsByClassName("wrong")[0].classList.add("hide");

    wordsUptillNow = 0;
    Ans = false;
}

function checkWord(sentence) {
    if (sentence === "HE IS PLAYING ")
        correctAns();
    else
        wrongAns();
}