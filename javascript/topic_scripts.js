export let topics = [];

function save() {

    let title = document.getElementById("title-input").value;
    
    let obj = {
        "title": title
    };

    topics.push(obj);
}

