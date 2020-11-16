export let topics = [];

function save() {

    let title = document.getElementById("title-input").value;
    
    let obj = {
        "title": title
    };

    obj = JSON.stringify(obj);

    topics.push(obj);

    localStorage.setItem(obj);
}

