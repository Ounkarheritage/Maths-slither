let score = 0;
let time = 60;
let interval;
let currentEquation;

window.onload = function() {
    generateEquation();
    startTimer();
};

function generateEquation() {
    let a = Math.floor(Math.random() * 10) + 1;
    let b = Math.floor(Math.random() * 10);
    let c = Math.floor(Math.random() * 10) + b;
    currentEquation = { a, b, c };
    
    document.getElementById('equation').innerText = `${a}x + ${b} = ${c}`;
    document.getElementById('answer').value = '';
    document.getElementById('feedback').innerText = '';
}

function checkAnswer() {
    let userAnswer = parseFloat(document.getElementById('answer').value);
    let correctAnswer = (currentEquation.c - currentEquation.b) / currentEquation.a;

    if (userAnswer === correctAnswer) {
        score++;
        document.getElementById('feedback').innerText = "Correct!";
    } else {
        document.getElementById('feedback').innerText = "Incorrect, try again!";
    }

    document.getElementById('score').innerText = `Score: ${score}`;
    generateEquation();
}

function startTimer() {
    interval = setInterval(() => {
        time--;
        document.getElementById('timer').innerText = `Time: ${time}s`;

        if (time === 0) {
            clearInterval(interval);
            document.getElementById('feedback').innerText = "Time's up!";
            document.querySelector('button').disabled = true;
        }
    }, 1000);
}