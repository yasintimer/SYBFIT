// Create floating particles
document.addEventListener('DOMContentLoaded', function() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random properties
        const size = Math.random() * 5 + 1;
        const posX = Math.random() * window.innerWidth;
        const posY = Math.random() * window.innerHeight;
        const delay = Math.random() * 5;
        const duration = 5 + Math.random() * 10;
        const opacity = 0.2 + Math.random() * 0.3;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}px`;
        particle.style.top = `${posY}px`;
        particle.style.opacity = opacity;
        particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
        
        particlesContainer.appendChild(particle);
    }
    
    // Add 3D tilt effect to cards on mouse move
    const cards = document.querySelectorAll('.rule-card');
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        cards.forEach((card, index) => {
            const delayFactor = index * 0.1;
            const tiltX = (y - 0.5) * 10;
            const tiltY = (x - 0.5) * -10;
            
            card.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateZ(10px)`;
        });
    });
});