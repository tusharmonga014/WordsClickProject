var totalWords = 3;
var wordsUptillNow = 0;
var ans = false;

function addWord(word) {
    var sentenceTillNow = $(".textSentence").text();

    if (wordsUptillNow === totalWords - 1)
        $(".textSentence").text(sentenceTillNow + word);
    else
        $(".textSentence").text(sentenceTillNow + word + " ");

    wordsUptillNow++;
}

function correctAns() {
    ans = true;
    $(".correct").removeClass("hide");
}

function wrongAns() {
    ans = false;
    $(".wrong").removeClass("hide");
}

function checkWord(sentence) {
    if (sentence === "HE IS PLAYING")
        correctAns();
    else
        wrongAns();
}

$(".word").click(function () {

    if (wordsUptillNow < totalWords)
        addWord($(this).text());

    $(this).prop("disabled", true);
})

$(".checkButton").click(function () {

    $(this).prop("disabled", true);

    if (wordsUptillNow == totalWords) {
        var sentence = $(".textSentence").text();
        checkWord(sentence);
    } else {
        wrongAns();
    }

    $(".refresh").removeClass("hide");
})

$(".refresh").click(function () {

    $(".word").prop("disabled", false);
    $(".checkButton").prop("disabled", false);
    $(".refresh").addClass("hide");
    $(".textSentence").text("");

    if (ans)
        $(".correct").addClass("hide");
    else
        $(".wrong").addClass("hide");

    wordsUptillNow = 0;
    ans = false;
})