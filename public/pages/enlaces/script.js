const buttons = document.querySelectorAll('.disabled');
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
    });
});