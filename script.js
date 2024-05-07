var button = document.getElementById('hamburger');
var links = document.getElementById('items');

button.addEventListener('click', () => {
    links.style.display = 'block';
    


});

document.body.addEventListener('click', function(event) {
    if (!links.contains(event.target) && !button.contains(event.target)) {
        links.style.display = 'none';    
    }
});
