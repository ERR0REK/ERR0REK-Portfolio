// birthday.js
// Animacja urodzinowa i wyświetlanie wieku

(function() {
    const BIRTHDAY = { day: 5, month: 7, year: 2008 }; // 5 lipca 2008
    const today = new Date();
    const isBirthday = today.getDate() === BIRTHDAY.day && (today.getMonth() + 1) === BIRTHDAY.month;
    const age = today.getFullYear() - BIRTHDAY.year - (today.getMonth() + 1 < BIRTHDAY.month || (today.getMonth() + 1 === BIRTHDAY.month && today.getDate() < BIRTHDAY.day) ? 1 : 0);

    if (!isBirthday) return;

    // Dodaj kontener na animację i wiek
    const container = document.createElement('div');
    container.id = 'birthday-animation';
    container.innerHTML = `
        <div class="birthday-banner">
            <span>🎉 ERR0REK/Macio (oraz Lider NEO) ma dzisiaj urodziny i ma <b>${age}</b> lat! 🎂</span>
        </div>
        <div class="confetti"></div>
    `;
    document.body.appendChild(container);

    // Prosta animacja konfetti
    for (let i = 0; i < 60; i++) {
        const conf = document.createElement('div');
        conf.className = 'confetti-piece';
        conf.style.left = Math.random() * 100 + 'vw';
        conf.style.animationDelay = (Math.random() * 2) + 's';
        conf.style.background = `hsl(${Math.random()*360},90%,60%)`;
        document.querySelector('.confetti').appendChild(conf);
    }
})();
