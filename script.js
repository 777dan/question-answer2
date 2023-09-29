const questions = [
    "What should I take to the skating rink?",
    "What should I put in the fridge?",
    "What should I take to school?",
    "What should I take to the pool?"
];
const answers = ["skates", "apples", "textbooks", "towel"];

document.write(randomArrayValue(questions, answers));

function randomArrayValue(questions, answers) {
    let str = "";
    let rand1 = 0;
    let rand2 = 0;
    for (let i = 0; i < questions.length; i++) {
        rand1 = getRandomInt(questions.length);
        rand2 = getRandomInt(questions.length);
        str += `${questions[rand1]} - ${answers[rand2]}<br>`;
    }
    return str;
}

function getRandomInt(n) {
    return Math.floor(Math.random() * n);
}