function showResult() {
    const quizTable = document.querySelector('.quiz-table');
    const resultTable = document.querySelector('.result-table');
    quizTable.style.display = "none";
    resultTable.style.display = "block";
}

function checkAnswer(element) {
    const variants = document.querySelectorAll('.variants');
    for (const variant of variants) {
        variant.style.backgroundColor = "";
    }

    if (element.textContent.trim() === "Dubai") {
       element.style.backgroundColor = "green";
        setTimeout(showResult,3000);
    } else {
        element.style.backgroundColor = "red";
        for (const variant of variants) {
            if (variant.textContent.trim() === "Dubai") {
                variant.style.backgroundColor = "green";
            }
        }
        setTimeout(showResult,3000);
    }
}

function backToTopic(){
    setTimeout(window.location.href ="../topic-page/index.html");
}
