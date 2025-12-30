// وصف السنوات - خصصها بذكرياتك بالعامية المصرية
const yearDescriptions = {
    2020: {
        title: "2020 - البداية ✨",
        text: "السنة دي بدأت حكايتنا الحلوة. اتقابلنا لأول مرة، ضحكنا مع بعض، وحسينا بحاجة سحرية. كل قصص الحب حلوة، بس قصتنا بقيت المفضلة عندي."
    },
    2021: {
        title: "2021 - كبرنا سوا 🌸",
        text: "السنة دي اتعلمنا عن بعض حاجات كتير. كل ضحكة وكل كلام وكل لحظة قضيناها مع بعض، رابطتنا بقيت أقوى. بقيت أكتر حد بحبه وصاحبي وسري ومغامرتي."
    },
    2022: {
        title: "2022 - صنعنا ذكريات 💫",
        text: "السنة دي مليانة لحظات مش هتتنسي. عملنا مغامرات عفوية، أمسيات هادية، وكل حاجة حلوة مع بعض. معاك كل يوم عادي بقى مميز."
    },
    2023: {
        title: "2023 - حبنا اتعمق 💖",
        text: "حبنا بقي أعمق بكتير. اتعلمنا نواجه أي حاجة سوا ونفرح بأيامنا أكتر. وريتني يعني إيه شراكة حقيقية، ووقعت في حبك من الأول."
    },
    2024: {
        title: "2024 - رابطتنا ما تتكسرش 💕",
        text: "السنة دي أثبتت إن حبنا ما بيتكسرش. في كل تحدي وفي كل نجاح، وقفنا جنب بعض. كل يوم معاك هدية، وأنا مبسوط بكل اللي عديته معاك. انت كل حاجة عندي."
    },
    2025: {
        title: "2025 - دلوقتي الثمين 🌟",
        text: "لسه بنكتب حكايتنا سوا. السنة دي بتفكرني ليه باختارك كل يوم. حبك أحلى حاجة في حياتي، ومبسوط بكل لحظة معاك."
    },
    2026: {
        title: "2026 - المستقبل مستني ⭐",
        text: "النجمة دي مستنية تلمع... سنة جديدة من المغامرات والأحلام والحب. مش قادر أستنى نخلق ذكريات أكتر سوا. الأفضل لسه ما جهش يا حبي! 💫"
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
