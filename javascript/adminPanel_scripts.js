function goTo(value) {
    if(value === "topic")
        document.location="topicPanel.html";
    else if(value === "quiz")
        document.location="quizPanel.html";
    else
        document.location="questionPanel.html";
}