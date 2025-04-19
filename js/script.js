// Анимация появления секций
document.querySelectorAll('.cyber-nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        document.querySelectorAll('section').forEach(section => {
            section.classList.add('hidden');
        });
        document.querySelector(targetId).classList.remove('hidden');
    });
});

// Glitch-эффект для проектов
document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('mouseenter', () => {
        const originalText = project.textContent;
        const glitchText = project.getAttribute('data-glitch');
        project.textContent = glitchText;
        
        setTimeout(() => {
            project.textContent = originalText;
        }, 500);
    });
});

// Случайные помехи в фоне (опционально)
setInterval(() => {
    const glitch = document.createElement('div');
    glitch.style.position = 'fixed';
    glitch.style.top = Math.random() * 100 + 'vh';
    glitch.style.left = Math.random() * 100 + 'vw';
    glitch.style.width = '10px';
    glitch.style.height = '10px';
    glitch.style.background = '#0f0';
    glitch.style.opacity = '0.5';
    glitch.style.zIndex = '1000';
    document.body.appendChild(glitch);
    
    setTimeout(() => {
        glitch.remove();
    }, 100);
}, 300);