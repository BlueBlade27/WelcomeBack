document.querySelector('.title').addEventListener('click', function() {
    document.getElementById('blue-screen').classList.add('visible');
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.great-button').addEventListener('click', function() {
        document.getElementById('blue-screen').classList.remove('visible');
        document.getElementById('green-screen').classList.add('visible');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.awful-button').addEventListener('click', function() {
        document.getElementById('blue-screen').classList.remove('visible');
        document.getElementById('red-screen').classList.add('visible');
    });
});