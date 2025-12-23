// Effect 5: Mouse Trail (Sparkles)
document.addEventListener('mousemove', (e) => {
    let sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = e.pageX + 'px';
    sparkle.style.top = e.pageY + 'px';
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 1000);
});

// Effect 6: Floating Balloons Creator
function createBalloons() {
    const container = document.getElementById('balloon-container');
    if (!container) return;
    const colors = ['#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF'];
    for (let i = 0; i < 15; i++) {
        let b = document.createElement('div');
        b.className = 'balloon';
        b.style.left = Math.random() * 100 + 'vw';
        b.style.width = b.style.height = Math.random() * 30 + 20 + 'px';
        b.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        b.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(b);
    }
}

// Effect 7: Typewriter Effect
function typeWriter(id, text, speed) {
    let i = 0;
    const element = document.getElementById(id);
    if (!element) return;
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize all effects on Load
window.onload = () => {
    document.querySelector('.page-content').classList.add('active');
    createBalloons();
    
    // Page-specific triggers
    if (document.getElementById('home-title')) {
        typeWriter('home-title', "Happy Birthday Udit! 🎉", 100);
    }
};
// Effect #12: Simple Internal Confetti (No external library needed)
function launchConfetti() {
    const emojis = ['🎉', '✨', '🎈', '🎂', '❤️'];
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        confetti.style.position = 'fixed';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-50px';
        confetti.style.fontSize = '30px';
        confetti.style.zIndex = '2000';
        confetti.style.pointerEvents = 'none';
        document.body.appendChild(confetti);

        // Falling animation
        const fallTime = Math.random() * 3 + 2;
        confetti.animate([
            { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
            { transform: `translateY(${window.innerHeight + 100}px) rotate(720deg)`, opacity: 0 }
        ], {
            duration: fallTime * 1000,
            easing: 'ease-in'
        });

        setTimeout(() => confetti.remove(), fallTime * 1000);
    }
}

function createParticle() {
    for (let i = 0; i < 10; i++) {
        const p = document.createElement('div');
        p.innerText = '🎉'; // You can use '🌸', '✨', or '⭐' too!
        p.style.position = 'fixed';
        p.style.left = Math.random() * 100 + 'vw';
        p.style.top = '-10px';
        p.style.fontSize = Math.random() * 20 + 10 + 'px';
        p.style.zIndex = '9999';
        p.style.pointerEvents = 'none';
        
        document.body.appendChild(p);

        // Animate the particle falling
        let pos = 0;
        let angle = Math.random() * 5;
        const fall = setInterval(() => {
            pos += 5;
            p.style.top = pos + 'px';
            p.style.transform = `rotate(${pos + angle}deg)`;
            if (pos > window.innerHeight) {
                p.remove();
                clearInterval(fall);
            }
        }, 20);
    }
}

function playMusic() {
    const song = document.getElementById('birthdaySong');
    const box = document.querySelector('.shake-box');

    if (song) {
        // Restart and play
        song.currentTime = 0; 
        song.play().catch(error => {
            console.log("Playback failed. Make sure you interacted with the page first!");
        });
    }

    // Effect #10: Shake the box
    if (box) {
        box.classList.add('shake-anim');
        setTimeout(() => box.classList.remove('shake-anim'), 500);
    }
}