
const button = document.getElementById('button');
const wrapper = document.getElementById('wrapper');

button.addEventListener('click', function() {
        wrapper.style.left = '0';
        wrapper.style.transition = '200ms';

    
});

document.body.addEventListener('click', function(event) {
    if (!wrapper.contains(event.target) && !button.contains(event.target)) {
        wrapper.classList.remove('open');
        wrapper.style.left = '-250px';
    }
});

