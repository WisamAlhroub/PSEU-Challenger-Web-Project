let questions = [];
let ctr = 1;

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

function save() {

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
        "options": options
    };

    questions.push(obj);
}