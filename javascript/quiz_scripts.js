let quizzes = [];

function save() {

    let question = document.getElementById("inputs-field question").value;
    let topic = document.getElementById("topics-select").value;
    let noOfQuestions = document.getElementById("number").value;

    let obj = {
        "question": question,
        "topic": topic,
        "noOfQuestions": noOfQuestions
    }

    quizzes.push(obj);
}