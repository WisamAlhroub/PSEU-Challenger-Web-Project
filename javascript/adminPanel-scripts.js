let questions = [];
let topics = [];
let quizzes = [];
let ctr = 1;

function goTo(value) {

    if(value === "topic")
        document.location="topicPanel.html";
    else if(value === "quiz")
        document.location="quizPanel.html";
    else
        document.location="questionPanel.html";
}

function addToLocalStorage(array, type) {

    array.forEach(element => {

        if (!element['added']) {
            element['added'] = true;
        }

        JSON.stringify(array);
        localStorage.setItem(type, array);
    });
}

function addField() {

    document.getElementById("option"+ctr)
    .insertAdjacentHTML("afterend", 
        '<div id="option'+ ++ctr +'"><input class="inputs-field option" type="text" id="inputs-field option'
        + ctr 
        + '"><button class="img-btn" onclick="deleteField()"><img src="/img/minus-vec.png" alt=""></button>'
        + '<button class="img-btn"><img src="/img/mark-vec.png" alt=""></button></div>');
}

function deleteField() {

    let element = document.getElementById("option"+ ctr--);
    element.remove();
}

function saveTopic() {

    let title = document.getElementById("title-input").value;
    
    let obj = {
        "title": title,
        "added": false
    };

    topics.push(obj);
    addToLocalStorage(topics, 'topics');
    
    document.getElementById('d-option')
    .insertAdjacentHTML("afterend", `<option>${title}</option>`);
}

function saveQuestion() {

    let question = document.getElementById("inputs-field question").value;
    let topic = document.getElementById("topics-select").value;
    let options = [];

    for (let i = 1; i < ctr+1; i++) {
        
        let element = document.getElementById("inputs-field option"+i).value;
        options.push(element);
    }

    let obj = {
        "question": question,
        "topic": topic,
        "options": options,
        "added": false
    };

    questions.push(obj);
    addToLocalStorage(questions, 'questions');
}

function saveQuiz() {

    let question = document.getElementById("inputs-field question").value;
    let topic = document.getElementById("topics-select").value;
    let noOfQuestions = document.getElementById("number").value;

    let obj = {
        "question": question,
        "topic": topic,
        "noOfQuestions": noOfQuestions,
        "added": false
    }
    
    quizzes.push(obj);
    addToLocalStorage(quizzes, 'quizzes');
}

