document.addEventListener('DOMContentLoaded', function() {
    // Навигация по секциям
    document.querySelectorAll('.cyber-nav a').forEach(link => {
        if (link.tagName === 'A') { // Проверяем, что это ссылка, а не кнопка
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                document.querySelectorAll('section').forEach(section => {
                    section.classList.add('hidden');
                });
                document.querySelector(targetId).classList.remove('hidden');
            });
        }
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

    // Управление командной строкой
    const cmdWindow = document.getElementById('cmd-window');
    const win98 = document.getElementById('win98');
    
    // Открытие командной строки
    document.getElementById('open-cmd-btn').addEventListener('click', function() {
        cmdWindow.classList.remove('hidden');
        document.getElementById('cmd-input').focus();
    });

    // Закрытие командной строки
    document.getElementById('close-cmd-btn').addEventListener('click', function() {
        cmdWindow.classList.add('hidden');
    });

    // Обработка команд
    document.getElementById('cmd-input').addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            const command = this.value.trim().toLowerCase();
            const cmdHistory = document.querySelector('.cmd-history');
            
            // Добавляем ввод команды в историю
            cmdHistory.innerHTML += `<p><span>C:\>${command}</span></p>`;
            
            // Обработка команд
            if (command === 'win.bat') {
                cmdHistory.innerHTML += '<p>Starting Windows 98...</p>';
                setTimeout(() => {
                    cmdWindow.classList.add('hidden');
                    win98.classList.remove('hidden');
                }, 1000);
            } 
            else if (command === 'help') {
                cmdHistory.innerHTML += '<p>Available commands:<br>- win.bat : Start Windows 98<br>- help : Show this help<br>- clear : Clear terminal</p>';
            }
            else if (command === 'clear') {
                cmdHistory.innerHTML = '<p>C:\></p>';
            }
            else if (command) {
                cmdHistory.innerHTML += '<p>Bad command or file name</p>';
            }
            
            this.value = '';
            cmdHistory.scrollTop = cmdHistory.scrollHeight;
        }
    });

    // Закрытие Windows 98
    document.getElementById('close-win98-btn').addEventListener('click', function() {
        win98.classList.add('hidden');
    });

    // Обработка кликов по иконкам Windows 98
    document.querySelectorAll('.win98-icon').forEach(icon => {
        icon.addEventListener('dblclick', function() {
            const url = this.getAttribute('data-url');
            window.open(url, '_blank');
        });
        
        // Добавляем эффект выделения
        icon.addEventListener('mousedown', function() {
            this.style.backgroundColor = 'rgba(0,0,128,0.7)';
        });
        
        icon.addEventListener('mouseup', function() {
            this.style.backgroundColor = '';
        });
    });

    // Случайные помехи в фоне
    setInterval(() => {
        if (Math.random() > 0.9) {
            const glitch = document.createElement('div');
            glitch.style.position = 'fixed';
            glitch.style.top = Math.random() * 100 + 'vh';
            glitch.style.left = Math.random() * 100 + 'vw';
            glitch.style.width = Math.random() * 50 + 'px';
            glitch.style.height = '1px';
            glitch.style.background = '#0f0';
            glitch.style.opacity = Math.random() * 0.5;
            glitch.style.zIndex = '9998';
            document.body.appendChild(glitch);
            
            setTimeout(() => {
                glitch.remove();
            }, 100);
        }
    }, 300);
});