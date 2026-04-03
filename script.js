const app = {
    // Навигация между страницами
    nav: function(id) {
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
        
        const target = document.getElementById(id);
        if(target) target.classList.add('active');
        
        const link = document.getElementById('l-' + id);
        if(link) link.classList.add('active');
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    // Обработка формы
    send: function(e) {
        const type = document.getElementById('joinType').value;
        
        // Если выбрано Сообщество (social), отправляем в Discord
        if(type === 'social') {
            e.preventDefault();
            window.open('https://discord.gg/7pDbzQq9gu', '_blank');
            return;
        }

        // Если выбрано Про-состав, показываем успех (или отправляем на Formspree, если настроишь)
        e.preventDefault();
        document.getElementById('jForm').style.display = 'none';
        document.getElementById('ok').style.display = 'block';
    }
};

// Параллакс эффект для фона
document.addEventListener('mousemove', (e) => {
    const moveX = (e.clientX - window.innerWidth / 2) * 0.015;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.015;
    
    const mrk = document.getElementById('bg-mrk');
    const dot05 = document.getElementById('bg-05');
    
    if(mrk) mrk.style.transform = `translate(${moveX}px, ${moveY}px)`;
    if(dot05) dot05.style.transform = `translate(${-moveX}px, ${-moveY}px)`;
});