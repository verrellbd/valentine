// Get name from URL parameter
const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get('name');

if (name) {
    document.getElementById('greeting').textContent = `Hi ${name},`;
}

// Create floating hearts
function createHearts() {
    const heartBg = document.getElementById('heartBg');
    const hearts = ['❤️', '💕', '💖', '💗', '💝', '💘'];
    
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 15 + 's';
        heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
        heartBg.appendChild(heart);
    }
}

createHearts();

// Page navigation
function nextPage(pageNumber) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById('page' + pageNumber).classList.add('active');
}

// Handle "No" button
let noClickCount = 0;
function handleNo() {
    noClickCount++;
    const noBtn = document.getElementById('noBtn');
    
    // Make button smaller each time
    const newSize = Math.max(30, 100 - (noClickCount * 15));
    noBtn.style.padding = `${Math.max(5, 15 - noClickCount * 2)}px ${Math.max(10, 40 - noClickCount * 5)}px`;
    noBtn.style.fontSize = `${Math.max(10, 20 - noClickCount * 2)}px`;
    
    // Move button randomly
    const x = Math.random() * 100 - 50;
    const y = Math.random() * 50 - 25;
    noBtn.style.transform = `translate(${x}px, ${y}px) scale(${newSize/100})`;
    
    // Optional: Add some encouraging text
    if (noClickCount >= 3) {
        noBtn.textContent = '🥺';
    }
    
    if (noClickCount >= 5) {
        noBtn.style.display = 'none';
    }
}
