function toggleDarkMode() {
    var icon = document.getElementById('dark-mode-icon');
    var body = document.body;

    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
    } else {
        body.classList.add('dark-mode');
        icon.classList.remove('fa-circle-half-stroke');
    }
}

var icon = document.getElementById('dark-mode-icon');
icon.addEventListener('click', toggleDarkMode);