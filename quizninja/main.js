// // Code for chapter 1
// alert('Welcome to Quiz Ninja!');
// // Code from chapter 2
// const question = "What is Superman's real name?"
// const answer = prompt(question);
// alert(`You answered ${answer}`);
// // Code from chapter 3
// const quiz = [
//     ["What is Superman's real name?","Clark Kent"],
//     ["What is Wonder Woman's real name?","Diana Prince"],
//     ["What is Batman's real name?","Bruce Wayne"]
// ];
// let score = 0; 

// for(const [question,answer] of quiz) {
//     const response = prompt(question);
//     if(response === answer) {
//         alert('Correct');
//         score++;
//     } else {
//         alert(`Wrong! The correct answer was ${answer}`);
//     }
// }
// alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ''}`);

// Code from chapter 4

const quiz = [
    // This is a map of all the questions and thier answers 
    ["What is Superman's real name?","Clark Kent"],
    ["What is Wonder Woman's real name?","Diana Prince"],
    ["What is Batman's real name?","Bruce Wayne"]
];
function start(quiz){
    let score = 0;
    // main game loop
    for(const [question,answer] of quiz){
        const response = ask(question);
        check(response,answer);
    }
    // end of main game loop
    gameOver();
    // function declarations
    function ask(question){
        return prompt(question);
    }
    function check(response,answer){
        // added .toLowerCase() method to ensure you are not marked wrong by forgetting to capitolize the fist letter.
        if(response.toLowerCase() === answer.toLowerCase()){
        alert('Correct!');
        score++;
        } else {
        alert(`Wrong! The correct answer was ${answer}`);
        }
    }
    function gameOver(){
        alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ''}`);
    }
}
start(quiz);