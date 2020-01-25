var devourEl = document.querySelector(".eaten");

document.addEventListener("click", function (event) {
    if (event.target === devourEl) {
        wrapperElement.style.display = "none";
        setupTimer()
        displayQuestions();
    }

})