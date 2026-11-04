/**
 * ============================================================================
 * OUR 4 MONTHS ANNIVERSARY DIGITAL SCRAPBOOK & LOVE STORY
 * ============================================================================
 * Instructions for Customization:
 * - Replace placeholders (AIRAACUU, BEBYYYCUU, SHIVAM, 7 July 2026, etc.) below.
 * - Add your photos inside assets/photos/ named photo01.jpg through photo50.jpg.
 * ============================================================================
 */

const CONFIG = {
    myName: "SHIVAM",
    herName: "AIRAACUU", // (Replace with her nickname or name placeholder)
    anniversaryDate: "7 July 2026",
    startDate: "March 7, 2026"
};

// 150+ Interactive Moments & Data Structure across 14 Sections
const STORY_SECTIONS = [
    // SECTION 1: Intro
    {
        chapter: "Chapter 1: The Beginning",
        type: "intro",
        title: "Hey You… ❤️",
        subtitle: "I made something special just for you.",
        message: "Please don’t rush through this. Take your time, because I made every little part of this for you, BEBYYYCUU.",
        buttonText: "Open Your Surprise ✨"
    },
    // SECTION 2: Our Beginning
    {
        chapter: "Chapter 2: How We Started",
        type: "beginning",
        title: "The Magic of CIYANGGGCUUU",
        cards: [
            { title: "How We Met", text: "Two different worlds colliding in the most unexpected and beautiful way possible." },
            { title: "First Conversations", text: "When talking to you quickly became the highlight of my entire day, DARLINGGGCUUUU." },
            { title: "First Impression", text: "I instantly knew you were someone extraordinarily special who would change my life." },
            { title: "And Somehow...", text: "We went from strangers to 'us', and my heart found its favorite home in ISTRIICUUUUU." }
        ]
    },
    // SECTION 3: Our Timeline (15 Moments)
    {
        chapter: "Chapter 3: Our Journey",
        type: "timeline",
        title: "Our Timeline Moments",
        subtitle: "Every single day with you is a cherished chapter.",
        moments: Array.from({ length: 15 }, (_, i) => ({
            day: `Day ${(i + 1) * 3}`,
            title: i === 0 ? "The Beginning" : i === 7 ? "Month 1 Together" : `Our Beautiful Milestone #${i + 1}`,
            story: `Moment #${i + 1}: When every single conversation with you felt like magic. ${CONFIG.herName} makes ordinary days extraordinary.`,
            quote: "“Some people search their whole lives to find what I found in you.”"
        }))
    },
    // SECTION 4: 30 Things I Love About You
    {
        chapter: "Chapter 4: 30 Reasons",
        type: "thirty_reasons",
        title: "30 Things I Love About You",
        subtitle: "Tap each card to reveal a reason why you mean everything to me.",
        reasons: Array.from({ length: 30 }, (_, i) => ({
            id: i + 1,
            title: `Reason #${i + 1}`,
            text: `Reason #${i + 1}: The way your smile brightens my darkest days, ${CONFIG.herName}. (Easily customizable in script.js)`
        }))
    },
    // SECTION 5: Photo Memories Gallery (30 Photo Moments)
    {
        chapter: "Chapter 5: Photo Memories",
        type: "photo_gallery",
        title: "Our Memory Vault",
        subtitle: "Tap any memory card to view our treasured moments.",
        photos: Array.from({ length: 30 }, (_, i) => ({
            id: i + 1,
            filename: `photo${String(i + 1).padStart(2, '0')}.jpg`,
            date: `Memory Date #${i + 1}`,
            title: `Our Special Memory #${i + 1}`,
            note: `A moment frozen in time with ${CONFIG.herName}. Every picture tells our story.`
        }))
    },
    // SECTION 6: "If You Were A..."
    {
        chapter: "Chapter 6: Comparisons",
        type: "comparisons",
        title: "If You Were A...",
        subtitle: "A poetic glimpse into how I see you in everything beautiful.",
        comparisons: [
            { query: "If you were a song...", answer: "The sweetest melody that loops in my head all day long." },
            { query: "If you were a season...", answer: "Spring—bringing vibrant warmth and new life to my world." },
            { query: "If you were a place...", answer: "A cozy sanctuary where I always feel safe and at peace." },
            { query: "If you were a star...", answer: "The brightest North Star guiding me through every night." },
            { query: "If you were a feeling...", answer: "Pure, unconditional comfort and unstoppable happiness." }
        ]
    },
    // SECTION 7: Mini Games Hub
    {
        chapter: "Chapter 7: Play With Me",
        type: "minigames",
        title: "Our Mini-Games",
        subtitle: "Let's play a few fun interactive games made just for you!",
        games: [
            { id: 1, name: "🧠 Guess Our Memory", desc: "Test your memory of our sweetest moments!" },
            { id: 2, name: "💖 Love Quiz", desc: "How well do you know us? Find out your love score!" },
            { id: 3, name: "✨ Catch Falling Hearts", desc: "Tap falling hearts to collect my love for you!" },
            { id: 4, name: "💌 Unlock Secret Message", desc: "Solve a quick interaction to reveal hidden words." }
        ]
    },
    // SECTION 8: Love Letters
    {
        chapter: "Chapter 8: Love Letters",
        type: "letters",
        title: "Letters From My Heart",
        subtitle: "Words I might not say out loud enough, but feel every single second.",
        letters: [
            { title: "Letter 01: What You Mean To Me", content: "Dear " + CONFIG.herName + ", you are my peace, my joy, and my favorite reason to smile. Having you in my life is the greatest blessing " + CONFIG.myName + " could ever ask for." },
            { title: "Letter 02: Things I Don't Say Enough", content: "Even on my busiest days, you are the first and last thought on my mind. Thank you for loving me just as I am." },
            { title: "Letter 03: When I Miss You", content: "Distance or busy schedules mean nothing when my heart is already right beside you. MUAAAHHHHH MUAAAHHH!" },
            { title: "Letter 04: What These 4 Months Taught Me", content: "These 4 months proved that true connection exists. Here's to a lifetime more of us." }
        ]
    },
    // SECTION 9: "Open When..." Envelopes
    {
        chapter: "Chapter 9: Open When...",
        type: "envelopes",
        title: "Open When Envelopes",
        subtitle: "Whenever you need me, tap the envelope that matches your moment.",
        envelopes: [
            { title: "Open when you're missing me", message: "Close your eyes, take a deep breath. I am always holding your hand in spirit, " + CONFIG.herName + "." },
            { title: "Open when you're sad", message: "Remember how deeply loved and cherished you are by " + CONFIG.myName + ". You light up my world." },
            { title: "Open when you need a smile", message: "Remember our silliest inside jokes and how we laughed until our stomachs hurt!" },
            { title: "Open when you can't sleep", message: "Imagine my arms around you keeping you warm through the quiet night." }
        ]
    },
    // SECTION 10: Our Little Things
    {
        chapter: "Chapter 10: Little Things",
        type: "little_things",
        title: "Our Little Things",
        subtitle: "The tiny details and inside jokes that make us, us.",
        cards: Array.from({ length: 15 }, (_, i) => ({
            title: `Inside Joke / Little Thing #${i + 1}`,
            text: `Our special moment #${i + 1}: LESBICUUU & endless laughter shared between us.`
        }))
    },
    // SECTION 11: Starry Universe
    {
        chapter: "Chapter 11: Starry Universe",
        type: "universe",
        title: "You Make My World...",
        subtitle: "Tap the glowing stars in our night sky to reveal hidden love notes.",
        starsCount: 20
    },
    // SECTION 12: Future
    {
        chapter: "Chapter 12: Our Future",
        type: "future",
        title: "The Road Ahead",
        subtitle: "We have so many adventures, laughs, and memories waiting for us.",
        cards: [
            { title: "More Memories", text: "Countless sunrises, sunsets, and unforgettable adventures together." },
            { title: "More Laughter", text: "Endless inside jokes and goofy moments that keep our bond strong." },
            { title: "More Us", text: "Growing side-by-side, supporting each other's dreams every step of the way." }
        ]
    },
    // SECTION 13: 4 Months Anniversary Reveal
    {
        chapter: "Chapter 13: 4 Months",
        type: "anniversary_reveal",
        title: "4 MONTHS ❤️",
        subtitle: "4 months. Countless conversations. Hundreds of little moments. So many memories. And somehow... I still want more."
    },
    // SECTION 14: Final Surprise & Screen
    {
        chapter: "Chapter 14: Forever",
        type: "final_surprise",
        title: "Happy 4 Months, Love. ❤️",
        message: "Thank you for becoming such a beautiful, irreplaceable part of my life. Chapter 4 is complete, and Chapter 5 starts now. Still choosing you, still loving you, still us."
    }
];

let currentSectionIndex = 0;
let progress = 0;

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    loadProgress();
    renderCurrentSection();
    setupEventListeners();
});

function setupEventListeners() {
    document.getElementById('music-toggle-btn').addEventListener('click', toggleMusic);
    document.getElementById('restart-btn').addEventListener('click', restartStory);
    document.getElementById('modal-close-btn').addEventListener('click', closeModal);
    document.getElementById('global-modal').addEventListener('click', (e) => {
        if (e.target.id === 'global-modal') closeModal();
    });
}

// Background Floating Particles
function initParticles() {
    const container = document.getElementById('ambient-particles');
    const symbols = ['❤️', '✨', '⭐', '💖', '💫'];
    for (let i = 0; i < 25; i++) {
        const el = document.createElement('div');
        el.className = Math.random() > 0.5 ? 'floating-heart' : 'floating-star';
        el.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        el.style.left = `${Math.random() * 100}%`;
        el.style.animationDuration = `${6 + Math.random() * 6}s`;
        el.style.animationDelay = `${Math.random() * 5}s`;
        el.style.fontSize = `${0.8 + Math.random() * 1}rem`;
        container.appendChild(el);
    }
}

// Render Section Based on State
function renderCurrentSection() {
    const section = STORY_SECTIONS[currentSectionIndex];
    document.getElementById('story-chapter-title').textContent = section.chapter;
    updateProgressIndicator();

    const mainContainer = document.getElementById('app-main-container');
    mainContainer.innerHTML = '';

    const screenDiv = document.createElement('div');
    screenDiv.className = 'screen';

    switch (section.type) {
        case 'intro':
            screenDiv.innerHTML = `
                <div class="glass-panel">
                    <span class="script-text">AIRAACUU</span>
                    <h1>${section.title}</h1>
                    <p>${section.subtitle}</p>
                    <p style="font-size: 0.95rem; opacity: 0.8; margin-top: 10px;">${section.message}</p>
                    <button class="romantic-btn" onclick="nextSection()">${section.buttonText}</button>
                </div>
            `;
            break;

        case 'beginning':
            screenDiv.innerHTML = `
                <div class="glass-panel">
                    <h2>${section.title}</h2>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-top: 20px;">
                        ${section.cards.map(c => `
                            <div style="background: rgba(255,255,255,0.04); padding: 15px; border-radius: 12px; border: 1px solid var(--card-border);">
                                <h3 style="font-size: 1.1rem; color: var(--accent-pink); margin-bottom: 6px;">${c.title}</h3>
                                <p style="font-size: 0.9rem; margin-bottom: 0;">${c.text}</p>
                            </div>
                        `).join('')}
                    </div>
                    <button class="romantic-btn mt-20" onclick="nextSection()">Continue Our Story ✨</button>
                </div>
            `;
            break;

        case 'timeline':
            screenDiv.innerHTML = `
                <div class="glass-panel">
                    <h2>${section.title}</h2>
                    <p>${section.subtitle}</p>
                    <div class="timeline-container">
                        ${section.moments.map(m => `
                            <div class="timeline-item">
                                <span style="font-size: 0.8rem; color: var(--accent-gold); font-weight: 600;">${m.day}</span>
                                <h3 style="font-size: 1.1rem; margin: 4px 0;">${m.title}</h3>
                                <p style="font-size: 0.9rem; margin-bottom: 5px;">${m.story}</p>
                                <em style="font-size: 0.8rem; color: var(--accent-pink);">${m.quote}</em>
                            </div>
                        `).join('')}
                    </div>
                    <button class="romantic-btn mt-20" onclick="nextSection()">Next Chapter ❤️</button>
                </div>
            `;
            break;

        case 'thirty_reasons':
            screenDiv.innerHTML = `
                <div class="glass-panel">
                    <h2>${section.title}</h2>
                    <p>${section.subtitle}</p>
                    <div class="grid-30">
                        ${section.reasons.map(r => `
                            <div class="reason-card" onclick="openReasonModal(${r.id})">
                                <span style="font-size: 1.2rem;">❤️</span>
                                <strong style="font-size: 0.9rem; margin-top: 8px;">${r.title}</strong>
                            </div>
                        `).join('')}
                    </div>
                    <button class="romantic-btn mt-20" onclick="nextSection()">Continue Journey ✨</button>
                </div>
            `;
            break;

        case 'photo_gallery':
            screenDiv.innerHTML = `
                <div class="glass-panel">
                    <h2>${section.title}</h2>
                    <p>${section.subtitle}</p>
                    <div class="grid-30">
                        ${section.photos.map(p => `
                            <div class="moment-card" onclick="openPhotoModal(${p.id})">
                                <div style="font-size: 1.5rem; margin-bottom: 5px;">🖼️</div>
                                <span style="font-size: 0.85rem; font-weight: 600;">Photo #${p.id}</span>
                                <span style="font-size: 0.75krem; opacity: 0.7;">Tap to view</span>
                            </div>
                        `).join('')}
                    </div>
                    <button class="romantic-btn mt-20" onclick="nextSection()">Next Surprise 🚀</button>
                </div>
            `;
            break;

        case 'comparisons':
            screenDiv.innerHTML = `
                <div class="glass-panel">
                    <h2>${section.title}</h2>
                    <p>${section.subtitle}</p>
                    <div style="display: flex; flex-direction: column; gap: 12px; margin: 20px 0; max-height: 55vh; overflow-y: auto;">
                        ${section.comparisons.map(comp => `
                            <div style="background: rgba(255,255,255,0.04); padding: 15px; border-radius: 12px; border: 1px solid var(--card-border); text-align: left;">
                                <strong style="color: var(--accent-pink);">${comp.query}</strong>
                                <p style="margin: 5px 0 0 0; font-size: 0.95rem;">${comp.answer}</p>
                            </div>
                        `).join('')}
                    </div>
                    <button class="romantic-btn" onclick="nextSection()">Keep Going ❤️</button>
                </div>
            `;
            break;

        case 'minigames':
            screenDiv.innerHTML = `
                <div class="glass-panel">
                    <h2>${section.title}</h2>
                    <p>${section.subtitle}</p>
                    <div style="display: flex; flex-direction: column; gap: 12px; margin: 20px 0;">
                        ${section.games.map(g => `
                            <div class="reason-card" style="flex-direction: row; justify-content: space-between; text-align: left; padding: 15px 20px;" onclick="playMiniGame(${g.id})">
                                <div>
                                    <h3 style="font-size: 1rem; color: var(--accent-gold);">${g.name}</h3>
                                    <p style="font-size: 0.85rem; margin: 0; opacity: 0.8;">${g.desc}</p>
                                </div>
                                <span style="font-size: 1.2rem;">Play ▶</span>
                            </div>
                        `).join('')}
                    </div>
                    <button class="romantic-btn mt-20" onclick="nextSection()">Continue Story ✨</button>
                </div>
            `;
            break;

        case 'letters':
            screenDiv.innerHTML = `
                <div class="glass-panel">
                    <h2>${section.title}</h2>
                    <p>${section.subtitle}</p>
                    <div style="display: flex; flex-direction: column; gap: 15px; max-height: 55vh; overflow-y: auto; text-align: left; padding: 10px;">
                        ${section.letters.map((l, idx) => `
                            <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 16px; border: 1px solid var(--card-border);">
                                <h3 style="font-size: 1.1rem; color: var(--accent-pink); margin-bottom: 8px;">${l.title}</h3>
                                <p style="font-size: 0.95rem; line-height: 1.6; margin: 0;">${l.content}</p>
                            </div>
                        `).join('')}
                    </div>
                    <button class="romantic-btn mt-20" onclick="nextSection()">Next Chapter ❤️</button>
                </div>
            `;
            break;

        case 'envelopes':
            screenDiv.innerHTML = `
                <div class="glass-panel">
                    <h2>${section.title}</h2>
                    <p>${section.subtitle}</p>
                    <div class="envelope-grid">
                        ${section.envelopes.map((env, idx) => `
                            <div class="envelope" onclick="openEnvelopeModal(${idx})">
                                <div style="font-size: 2rem; margin-bottom: 8px;">💌</div>
                                <span style="font-size: 0.85rem; font-weight: 600;">${env.title}</span>
                            </div>
                        `).join('')}
                    </div>
                    <button class="romantic-btn mt-20" onclick="nextSection()">Continue ✨</button>
                </div>
            `;
            break;

        case 'little_things':
            screenDiv.innerHTML = `
                <div class="glass-panel">
                    <h2>${section.title}</h2>
                    <p>${section.subtitle}</p>
                    <div class="grid-30">
                        ${section.cards.map((card, i) => `
                            <div class="reason-card" onclick="alert('${card.text}')">
                                <span style="font-size: 1.2rem;">💫</span>
                                <strong style="font-size: 0.85rem; margin-top: 8px;">Item #${i + 1}</strong>
                            </div>
                        `).join('')}
                    </div>
                    <button class="romantic-btn mt-20" onclick="nextSection()">Next Chapter 🚀</button>
                </div>
            `;
            break;

        case 'universe':
            screenDiv.innerHTML = `
                <div class="glass-panel">
                    <h2>${section.title}</h2>
                    <p>${section.subtitle}</p>
                    <div class="starry-sky" id="starry-sky-container"></div>
                    <button class="romantic-btn mt-20" onclick="nextSection()">Continue Journey ❤️</button>
                </div>
            `;
            setTimeout(populateStars, 100);
            break;

        case 'future':
            screenDiv.innerHTML = `
                <div class="glass-panel">
                    <h2>${section.title}</h2>
                    <p>${section.subtitle}</p>
                    <div style="display: flex; flex-direction: column; gap: 15px; margin: 20px 0;">
                        ${section.cards.map(c => `
                            <div style="background: rgba(255,255,255,0.04); padding: 16px; border-radius: 12px; border: 1px solid var(--card-border); text-align: left;">
                                <h3 style="font-size: 1.1rem; color: var(--accent-gold);">${c.title}</h3>
                                <p style="font-size: 0.9rem; margin: 5px 0 0 0;">${c.text}</p>
                            </div>
                        `).join('')}
                    </div>
                    <button class="romantic-btn" onclick="nextSection()">Ready for the Anniversary? ✨</button>
                </div>
            `;
            break;

        case 'anniversary_reveal':
            screenDiv.innerHTML = `
                <div class="glass-panel">
                    <span class="script-text">4 Months of Us</span>
                    <h1>${section.title}</h1>
                    <p style="font-size: 1.1rem; line-height: 1.8; margin: 20px 0;">${section.subtitle}</p>
                    <div class="photo-frame">
                        <div class="placeholder-img">
                            <span>🖼️ photo01.jpg</span>
                            <small>Replace with your best couple photo in assets/photos/</small>
                        </div>
                    </div>
                    <button class="romantic-btn" onclick="nextSection(); triggerConfetti();">Open Final Surprise ❤️</button>
                </div>
            `;
            break;

        case 'final_surprise':
            screenDiv.innerHTML = `
                <div class="glass-panel">
                    <span class="script-text">Chapter 4 Completed</span>
                    <h1>${section.title}</h1>
                    <p style="font-size: 1.1rem; line-height: 1.8; margin: 20px 0;">${section.message}</p>
                    <div class="photo-frame" style="max-width: 260px;">
                        <div class="placeholder-img">
                            <span>🖼️ photo50.jpg</span>
                            <small>Our final cherished photo</small>
                        </div>
                    </div>
                    <h3 class="text-gold" style="margin-top: 15px;">Chapter 5 starts now...</h3>
                    <p style="font-size: 0.95rem; margin-top: 10px;">Still choosing you. Still loving you. Still us. ❤️</p>
                    <button class="secondary-btn mt-20" onclick="restartStory()">Replay Our Story ↻</button>
                </div>
            `;
            break;
    }

    mainContainer.appendChild(screenDiv);
    saveProgress();
}

// Navigation & Progress Control
function nextSection() {
    if (currentSectionIndex < STORY_SECTIONS.length - 1) {
        currentSectionIndex++;
        renderCurrentSection();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function updateProgressIndicator() {
    progress = ((currentSectionIndex + 1) / STORY_SECTIONS.length) * 100;
    document.getElementById('progress-bar').style.width = `${progress}%`;
}

function restartStory() {
    currentSectionIndex = 0;
    renderCurrentSection();
    localStorage.removeItem('anniversary_progress');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function saveProgress() {
    localStorage.setItem('anniversary_progress', currentSectionIndex);
}

function loadProgress() {
    const saved = localStorage.getItem('anniversary_progress');
    if (saved !== null) {
        currentSectionIndex = parseInt(saved, 10);
        if (isNaN(currentSectionIndex) || currentSectionIndex >= STORY_SECTIONS.length) {
            currentSectionIndex = 0;
        }
    }
}

// Interactive Modals & Features
function openReasonModal(id) {
    showModal(`
        <div style="text-align: center; padding: 20px;">
            <span style="font-size: 2.5rem;">💖</span>
            <h2 style="color: var(--accent-pink); margin-top: 10px;">Reason #${id} of 30</h2>
            <p style="font-size: 1.1rem; margin-top: 15px;">You make ordinary moments feel like magic, ${CONFIG.herName}. Your kindness, your laugh, and your pure heart mean the world to ${CONFIG.myName}.</p>
            <button class="romantic-btn mt-20" onclick="closeModal()">Got it ❤️</button>
        </div>
    `);
}

function openPhotoModal(id) {
    const filename = `photo${String(id).padStart(2, '0')}.jpg`;
    showModal(`
        <div style="text-align: center;">
            <div class="photo-frame" style="max-height: 350px;">
                <div class="placeholder-img">
                    <span>🖼️ ${filename}</span>
                    <small>Place your photo in /assets/photos/${filename}</small>
                </div>
            </div>
            <h3 style="color: var(--accent-gold); margin-top: 10px;">Our Memory #${id}</h3>
            <p style="font-size: 0.95rem; margin-top: 8px;">A treasured moment shared with ${CONFIG.herName}. Every second with you is precious.</p>
            <button class="secondary-btn mt-20" onclick="closeModal()">Close</button>
        </div>
    `);
}

function openEnvelopeModal(idx) {
    const envs = STORY_SECTIONS.find(s => s.type === 'envelopes').envelopes;
    const env = envs[idx];
    showModal(`
        <div style="text-align: center; padding: 10px;">
            <span style="font-size: 2.5rem;">💌</span>
            <h3 style="color: var(--accent-pink); margin-top: 10px;">${env.title}</h3>
            <p style="font-size: 1.05rem; margin-top: 15px; line-height: 1.6;">${env.message}</p>
            <button class="romantic-btn mt-20" onclick="closeModal()">Close Envelope</button>
        </div>
    `);
}

function playMiniGame(gameId) {
    if (gameId === 1) {
        showModal(`
            <div style="text-align: center; padding: 10px;">
                <h3 style="color: var(--accent-gold);">🧠 Guess Our Memory</h3>
                <p style="margin-top: 10px;">What was the very first thing we talked about on our memorable call?</p>
                <div style="display: flex; flex-direction: column; gap: 10px; margin-top: 15px;">
                    <button class="secondary-btn" onclick="alert('Correct! That was such a special moment! ❤️'); closeModal();">Option A: Our favorite dreams & goals</button>
                    <button class="secondary-btn" onclick="alert('Close, but check another option!');">Option B: Random weather talk</button>
                </div>
                <button class="secondary-btn mt-20" onclick="closeModal()">Close</button>
            </div>
        `);
    } else if (gameId === 2) {
        showModal(`
            <div style="text-align: center; padding: 10px;">
                <h3 style="color: var(--accent-pink);">💖 Love Quiz Score</h3>
                <p style="margin-top: 10px;">Calculating how well ${CONFIG.herName} and ${CONFIG.myName} match...</p>
                <div style="font-size: 2rem; margin: 15px 0; color: var(--accent-gold);">100% Match! ❤️</div>
                <p>You two are destined for each other!</p>
                <button class="romantic-btn mt-20" onclick="closeModal()"> Yay! ✨</button>
            </div>
        `);
    } else {
        showModal(`
            <div style="text-align: center; padding: 10px;">
                <h3 style="color: var(--accent-pink);">✨ Mini-Game</h3>
                <p style="margin-top: 10px;">You collected all my love! MUAAAHHHHH MUAAAHHH!</p>
                <button class="romantic-btn mt-20" onclick="closeModal()">Awesome ❤️</button>
            </div>
        `);
    }
}

function populateStars() {
    const container = document.getElementById('starry-sky-container');
    if (!container) return;
    container.innerHTML = '';
    
    const notes = [
        "You make ordinary days feel special.",
        "You are my favorite part of life.",
        "You make me smile without trying.",
        "Your laugh is my favorite sound.",
        "I am so lucky to have you."
    ];

    for (let i = 0; i < 20; i++) {
        const star = document.createElement('div');
        star.className = 'star-node';
        star.style.left = `${Math.random() * 90 + 5}%`;
        star.style.top = `${Math.random() * 80 + 10}%`;
        star.style.animationDelay = `${Math.random() * 2}s`;
        
        star.addEventListener('click', () => {
            const note = notes[Math.floor(Math.random() * notes.length)];
            showModal(`
                <div style="text-align: center;">
                    <span style="font-size: 2rem;">⭐</span>
                    <h3 style="color: var(--accent-gold); margin-top: 10px;">Star Note</h3>
                    <p style="font-size: 1.1rem; margin-top: 10px;">"${note}"</p>
                    <button class="secondary-btn mt-20" onclick="closeModal()">Close</button>
                </div>
            `);
        });
        container.appendChild(star);
    }
}

function showModal(htmlContent) {
    document.getElementById('modal-content-area').innerHTML = htmlContent;
    document.getElementById('global-modal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('global-modal').classList.add('hidden');
}

function toggleMusic() {
    const audio = document.getElementById('bg-audio');
    const status = document.getElementById('music-status');
    if (audio.paused) {
        audio.play().catch(() => {});
        status.textContent = "On";
    } else {
        audio.pause();
        status.textContent = "Off";
    }
}

function triggerConfetti() {
    // Simple canvas confetti effect or celebratory alert
    const canvas = document.getElementById('celebration-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    let particles = [];
    for(let i = 0; i < 100; i++) {
        particles.push({
            x: canvas.width / 2,
            y: canvas.height / 2,
            vx: (Math.random() - 0.5) * 10,
            vy: (Math.random() - 0.5) * 10,
            color: ['#ff6b8b', '#ffd700', '#ffffff', '#ff477e'][Math.floor(Math.random()*4)],
            size: Math.random() * 8 + 4
        });
    }

    function animateConfetti() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((p, index) => {
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.2; // gravity
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
        });
        requestAnimationFrame(animateConfetti);
    }
    animateConfetti();
}
