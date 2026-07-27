// --- ACCES CONFIGURATION ---
const USERNAME_BENAR = "naya";
const PASSWORD_BENAR = "sayang";

// --- START DATE TANGGAL JADIAN (YUSUF & NAYA) ---
const startDate = new Date("2026-01-01");

// --- LOGIN LOGIC ---
const loginForm = document.getElementById('login-form');
const loginOverlay = document.getElementById('login-overlay');
const mainContent = document.getElementById('main-content');
const errorMsg = document.getElementById('error-msg');
const bgMusic = document.getElementById('bg-music');

loginForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const userInput = document.getElementById('username').value.toLowerCase();
  const passInput = document.getElementById('password').value.toLowerCase();

  if (userInput === USERNAME_BENAR && passInput === PASSWORD_BENAR) {
    errorMsg.innerText = "";
    loginOverlay.classList.add('fade-out');
    
    setTimeout(() => {
      mainContent.classList.add('show');
      // Otomatis putar lagu saat login berhasil
      bgMusic.play().catch(e => console.log("Autoplay diblokir browser, pengguna bisa putar manual"));
    }, 400);

  } else {
    errorMsg.innerText = "Username/Password salah, coba lagi yaa! 💕";
  }
});

// --- TIMER LAMA HUBUNGAN ---
function updateTime() {
  const now = new Date();
  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("timer").innerHTML =
    `${days} Hari ${hours} Jam ${minutes} Menit ${seconds} Detik ❤️`;
}
setInterval(updateTime, 1000);

// --- EFEK POP-UP GAMBAR (LIGHTBOX) ---
function openLightbox(element) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  lightbox.style.display = 'flex';
  lightboxImg.src = element.src;
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

// --- POPUP PESAN KICK ---
function showLovePopup() {
  alert("Aku sayang banget sama kamu Naya! Makasih udah selalu ada buat aku ❤️✨");
}

// --- EFEK HATI MELAYANG DI BACKGROUND ---
function createHeart() {
  const container = document.getElementById('hearts-container');
  const heart = document.createElement('div');
  heart.classList.add('floating-heart');
  heart.innerHTML = '❤️';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = Math.random() * 3 + 4 + 's';
  container.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}
setInterval(createHeart, 600);