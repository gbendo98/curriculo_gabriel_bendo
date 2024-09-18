document.addEventListener('DOMContentLoaded', function() {
    const currentJob = document.querySelector('.current-job');
    const toggleDarkModeButton = document.getElementById('toggle-dark-mode');

    // Alterna o modo escuro
    toggleDarkModeButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        // Altera o texto do botão conforme o modo
        if (document.body.classList.contains('dark-mode')) {
            toggleDarkModeButton.textContent = 'Modo Claro';
        } else {
            toggleDarkModeButton.textContent = 'Modo Escuro';
        }
    });
});