var button = document.getElementById('hamburger');
var links = document.getElementById('items');

button.addEventListener('click', function(event) {
    event.stopPropagation();
    if (links.style.display === 'block') {
        links.style.display = 'none';
    } else {
        links.style.display = 'block';
    }
});

document.body.addEventListener('click', function(event) {
    if (window.innerWidth <= 768 && !links.contains(event.target)){ if (!links.contains(event.target) && event.target !== button) {
        links.style.display = 'none';
    }}
    else {
        links.style.display = 'block';
    }
});
