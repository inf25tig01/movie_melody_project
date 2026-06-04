document.addEventListener("DOMContentLoaded", function () {
    console.log("Home page loaded successfully.");

    const title = document.querySelector("h1");

    title.addEventListener("click", function () {
        title.textContent = "Welcome to Movie Music Finder!";
    });
});