let quizzesFetched = JSON.parse(localStorage.getItem("quizzes"));
let questionsFetched = JSON.parse(localStorage.getItem("questions"));
let topicsFetched = JSON.parse(localStorage.getItem("topics"));

quizzesFetched.forEach(element => {

    document.getElementById("quizzes-thread")
    .insertAdjacentHTML(
        "afterend", 
        "<tr>" +
        `\n\t<td>${element.question}</td>` +
        `\n\t<td>${element.topic}</td>` +
        `\n\t<td>${element.noOfQuestions}</td>` +
        "\n</tr>\n"
    );
});

questionsFetched.forEach(element => {

    let temp;
    element.options.forEach(e => {
        temp += `\n\t<td>${e}</td>`;
    });

    document.getElementById("questions-thread")
    .insertAdjacentHTML(
        "afterend", 
        "<tr>" +
        `\n\t<td>${element.question}</td>` +
        `\n\t<td>${element.topic}</td>` +
        temp +
        "\n</tr>\n"
    );
});

topicsFetched.forEach(element => {

    document.getElementById("topics-thread")
    .insertAdjacentHTML(
        "afterend", 
        "<tr>" +
        `\n\t<td>${element.title}</td>` +
        "\n</tr>\n"
    );
});
