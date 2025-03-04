document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('dashboard').style.display = 'block';
    } else {
        alert('Por favor, ingrese usuario y contraseña válidos');
    }
});

document.getElementById('logout-btn').addEventListener('click', function() {
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('login-container').style.display = 'flex';
    document.getElementById('login-form').reset();
    hideAllSections();
});

function showSection(sectionId) {
    hideAllSections();
    document.getElementById(sectionId).style.display = 'block';
}

function hideAllSections() {
    const sections = document.getElementsByClassName('section');
    for (let section of sections) {
        section.style.display = 'none';
    }
}

document.getElementById('compromiso-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Carta de compromiso enviada con éxito');
    this.reset();
});

document.getElementById('futbol-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Inscripción al equipo de fútbol enviada con éxito');
    this.reset();
});

document.getElementById('horas-sociales-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Solicitud de horas sociales enviada con éxito');
    this.reset();
});

function changeTheme() {
    const theme = document.getElementById('theme-selector').value;
    const sections = document.getElementsByClassName('section');
    const historyBoxes = document.getElementsByClassName('history-box');

    if (theme === 'light') {
        document.getElementById('dashboard').style.backgroundColor = '#f4f4f4';
        for (let section of sections) {
            section.classList.add('light');
        }
        for (let box of historyBoxes) {
            box.classList.add('light');
        }
    } else {
        document.getElementById('dashboard').style.backgroundColor = '#1a1a1a';
        for (let section of sections) {
            section.classList.remove('light');
        }
        for (let box of historyBoxes) {
            box.classList.remove('light');
        }
    }
}

// Nuevas funciones para manejar el campo adicional de cursos anteriores
function showCursoField() {
    document.getElementById('curso-field').style.display = 'block';
    document.getElementById('curso-anterior').setAttribute('required', 'required');
}

function hideCursoField() {
    document.getElementById('curso-field').style.display = 'none';
    document.getElementById('curso-anterior').removeAttribute('required');
}