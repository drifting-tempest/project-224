const hearts = ['🩷', '🤍', '❤️'];
const heartPool = [];
const maxHearts = 50;
let activeHearts = 0;

const romanticEmojis = ['💕', '🩷', '✨', '💖', '🫂', '💝', '💫', '♥️', '🌸', '🌟'];

const loveQuotes = [
    "You make my heart sparkle forever",
    "Love is in the air around us", 
    "You're my favorite everything",
    "Every moment with you is magic",
    "You make me wanna live forever",
    "I love you more than yesterday",
    "Your love makes me complete",
    "In your eyes, I found my home",
    "Every love story is beautiful, but ours is my favorite",
    "You make my heart smile daily",
    "Loving you never gets routine",
    "You're my sunshine on cloudy days",
    "I'd choose you in every lifetime",
    "Your hugs feel like home",
    "Love is being silly together",
    "You're my favorite place to be",
    "With you, every moment is magic",
    "You + Me = Forever",
    "My heart is yours forever",
    "You make ordinary moments extraordinary",
    "I fall for you more every day",
    "You're my safe place",
    "Love is us against the world",
    "You're my once-in-a-lifetime love",
    "Every heartbeat whispers your name",
    "You make my soul happy",
    "Together is my favorite place",
    "You're my happily ever after",
    "Love looks good on us both",
    "You're worth every risk",
    "My favorite love story is ours",
    "You make my world brighter",
    "Forever isn't long enough with you",
    "You're my heart's favorite song",
    "I choose you, always",
    "You make my heart race",
    "You're my dream come true",
    "With you, I have everything",
    "You're the best part of my life",
    "I love you to the moon and back",
    "You're my forever Valentine",
    "My heart found its home with you",
    "You make love look so good",
    "You're my person",
    "Every love song reminds me of you",
    "You steal my breath away",
    "Love grows where trust is sown",
    "You are my sun, my moon",
    "Love is friendship set on fire",
    "The best thing to hold is each other"
];

function getRandomEmoji() {
    return romanticEmojis[Math.floor(Math.random() * romanticEmojis.length)];
}

function getPooledHeart() {
    return heartPool.pop() || document.createElement('div');
}

function createSparklingHeart() {
    if (activeHearts >= maxHearts) return;
    
    const heart = getPooledHeart();
    heart.className = 'sparkle-heart';
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (Math.random() * 0.5 + 0.5) + 'em';
    heart.style.animationDuration = (Math.random() * 1 + 1.5) + 's';
    heart.style.animationDelay = '0s';
    
    document.body.appendChild(heart);
    activeHearts++;
    
    heart.addEventListener('animationend', () => {
        if (heart.parentNode) {
            heartPool.push(heart);
            heart.parentNode.removeChild(heart);
            activeHearts--;
        }
    }, { once: true });
}

const rainInterval = setInterval(createSparklingHeart, 50);

for(let i = 0; i < 25; i++) {
    setTimeout(createSparklingHeart, i * 30);
}

function updateLoveQuote() {
    const randomQuote = loveQuotes[Math.floor(Math.random() * loveQuotes.length)];
    const emoji = getRandomEmoji();
    
    document.querySelector('#quoteDisplay').textContent = `${emoji} ${randomQuote} ${emoji}`;
}

setInterval(updateLoveQuote, 8000);
updateLoveQuote();
