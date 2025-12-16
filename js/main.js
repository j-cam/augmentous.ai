const stars1 = document.getElementById('stars');
const stars2 = document.getElementById('stars2');
const stars3 = document.getElementById('stars3');

function handleParallax(e) {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const x = e.clientX - centerX;
    const y = e.clientY - centerY;

    const speed1 = 0.005;
    const speed2 = 0.010;
    const speed3 = 0.015;

    stars1.style.transform = `translate(${-x * speed1}px, ${-y * speed1}px)`;
    stars2.style.transform = `translate(${-x * speed2}px, ${-y * speed2}px)`;
    stars3.style.transform = `translate(${-x * speed3}px, ${-y * speed3}px)`;
}
document.addEventListener('mousemove', handleParallax);