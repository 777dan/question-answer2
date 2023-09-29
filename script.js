const questions = [
    "What should I take to the skating rink?",
    "What should I put in the fridge?",
    "What should I take to school?",
    "What should I take to the pool?"
];
const answers = ["skates", "apples", "textbooks", "towel"];
document.write(randomArrayValue(answers, 4));
// document.write(generateResult(questions, answers));

// function generateResult(questions, answers) {
//     let str = "";
//     for (let i = 0; i < questions.length; i++) {
//         str += `${randomArrayValue(questions)} - `;
//         let rand = getRandomInt(4);
//         for (let j = 0; j <= rand; j++) {
//             str += `${randomArrayValue(answers)}`;
//             if (rand !== j) {
//                 str += ", ";
//             } else {
//                 str += "<br>";
//             }
//         }
//     }
//     return str;
// }

function getRandomInt(n) {
    return Math.floor(Math.random() * n);
}

function randomArrayValue(array, num = 1) {
    let str = "";
    let rand = 0;
    for (let i = 0; i < num; i++) {
        rand = getRandomInt(array.length);
        str += `${array[rand]} `;
    }

    return str;
}