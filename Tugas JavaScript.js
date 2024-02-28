document.getElementById('Clicked').addEventListener('click', function() {
    createGUI();
});

function createGUI() {
    var newElement = document.createElement('div');
    newElement.textContent = 'Ini adalah GUI yang dibuat dengan JavaScript!';
    
    document.body.appendChild(newElement);
}