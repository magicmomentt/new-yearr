// Year descriptions - customize these with your own memories!
const yearDescriptions = {
    2020: {
        title: "2020 - The Beginning ✨",
        text: "This is where our beautiful story began. The year we first met, first smiled at each other, and first realized that something magical was happening between us. Every love story is beautiful, but ours became my favorite."
    },
    2021: {
        title: "2021 - Growing Together 🌸",
        text: "We learned so much about each other this year. Through every laugh, every conversation, every moment shared, our bond grew stronger. You became my best friend, my confidant, and my greatest adventure."
    },
    2022: {
        title: "2022 - Building Memories 💫",
        text: "This year was filled with unforgettable moments. We created memories that will last a lifetime - spontaneous adventures, quiet evenings, and everything in between. With you, every ordinary day became extraordinary."
    },
    2023: {
        title: "2023 - Deeper Love 💖",
        text: "Our love deepened in ways I never knew possible. We learned to weather storms together and celebrate sunshine even brighter. You showed me what true partnership means, and I fell in love with you all over again."
    },
    2024: {
        title: "2024 - Unbreakable Bond 💕",
        text: "This year proved that our love is unbreakable. Through challenges and triumphs, we stood together. Every day with you is a gift, and I cherish how far we've come. You are my home, my heart, my everything."
    },
    2025: {
        title: "2025 - Present & Precious 🌟",
        text: "Here we are, still writing our story together. This year reminds me why I choose you every single day. Your love is the greatest blessing in my life, and I'm grateful for every moment we share. Here's to the beautiful present!"
    },
    2026: {
        title: "2026 - Our Future Awaits ⭐",
        text: "This star is waiting to be lit... A new year of adventures, dreams, and love is on the horizon. I can't wait to create more beautiful memories with you. The best is yet to come, my love! 💫"
    }
};

// DOM Elements
const yearDescription = document.getElementById('yearDescription');
const descriptionYear = document.getElementById('descriptionYear');
const descriptionText = document.getElementById('descriptionText');
const closeBtn = document.getElementById('closeBtn');
const starsBackground = document.getElementById('starsBackground');

// Create background stars
function createBackgroundStars() {
    const starCount = 100;
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'bg-star';
        star.innerHTML = '✦';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.fontSize = Math.random() * 10 + 5 + 'px';
        star.style.animationDelay = Math.random() * 3 + 's';
        star.style.animationDuration = (Math.random() * 2 + 1) + 's';
        starsBackground.appendChild(star);
    }
}

// Create floating heart effect
function createFloatingHeart(x, y) {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.innerHTML = ['❤️', '💕', '💖', '💗', '✨'][Math.floor(Math.random() * 5)];
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 4000);
}

// Handle star click
document.querySelectorAll('.star-item').forEach(star => {
    star.addEventListener('click', (e) => {
        const year = star.dataset.year;
        const data = yearDescriptions[year];
        
        if (data) {
            descriptionYear.textContent = data.title;
            descriptionText.textContent = data.text;
            yearDescription.classList.add('active');
            
            // Create floating hearts
            for (let i = 0; i < 5; i++) {
                setTimeout(() => {
                    createFloatingHeart(
                        e.clientX + (Math.random() - 0.5) * 100,
                        e.clientY
                    );
                }, i * 100);
            }
        }
    });
});

// Close modal
closeBtn.addEventListener('click', () => {
    yearDescription.classList.remove('active');
});

yearDescription.addEventListener('click', (e) => {
    if (e.target === yearDescription) {
        yearDescription.classList.remove('active');
    }
});

// Keyboard support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        yearDescription.classList.remove('active');
    }
});

// Random floating hearts periodically
function randomFloatingHearts() {
    setInterval(() => {
        if (Math.random() > 0.7) {
            createFloatingHeart(
                Math.random() * window.innerWidth,
                window.innerHeight
            );
        }
    }, 2000);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    createBackgroundStars();
    randomFloatingHearts();
    
    // Add entrance animation delay to stars
    document.querySelectorAll('.star-item').forEach((star, index) => {
        star.style.opacity = '0';
        star.style.transform = 'translateY(30px)';
        setTimeout(() => {
            star.style.transition = 'all 0.6s ease-out';
            star.style.opacity = '1';
            star.style.transform = 'translateY(0)';
        }, 300 + index * 150);
    });
});
