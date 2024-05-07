function openForm() {
    document.getElementById("popup-form").style.display = "block";
}

function closeForm() {
    document.getElementById("popup-form").style.display = "none";
}

document.querySelector('.course-link').addEventListener('click', openForm);
