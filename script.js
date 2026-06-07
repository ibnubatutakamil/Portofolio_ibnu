document.addEventListener('DOMContentLoaded', () => {
    console.log("Portofolio Ibnu Batuta Kamil berhasil dimuat dengan personal branding optimal!");

    // Efek Transparansi Navbar saat Di-scroll
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('shadow-md', 'bg-white/95');
            navbar.classList.remove('bg-white/80');
        } else {
            navbar.classList.remove('shadow-md', 'bg-white/95');
            navbar.classList.add('bg-white/80');
        }
    });

    // Logika Menu Mobile (Responsive Hamburger)
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        const icon = menuBtn.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
    });

    // Menutup menu mobile otomatis setelah tautan diklik
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            const icon = menuBtn.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-xmark');
        });
    });
});

document.body.style.overflow = 'hidden';

function accessSystem() {
    const gate = document.getElementById('liquid-gate');
    gate.classList.add('unlocked');
    
    setTimeout(() => {
        gate.style.display = 'none';
        document.body.style.overflow = 'auto'; // Aktifkan scroll di portofolio utamamu
    }, 1500);
}

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('realtime-clock').textContent = timeString;
}

// Jalankan setiap detik
setInterval(updateClock, 1000);
updateClock(); // Panggil sekali saat start agar tidak delay

// Fungsi efek pernak-pernik jatuh dinamis berdasarkan hari (Update: Senin & Jumat = Emoji Salju ❄️)
function createDynamicDailyConfetti() {
    const container = document.getElementById('particle-container');
    if (!container) return;

    // 1. Deteksi Hari Ini (0 = Minggu, 1 = Senin, ..., 6 = Sabtu)
    const currentDay = new Date().getDay();
    
    // 2. Konfigurasi Default Efek
    let config = {
        colors: ['#ffffff'],
        shapes: ['circle'],
        maxParticles: 30,
        spawnRate: 400,
        minSize: 6,
        maxSize: 12,
        hasDrift: true,
        isSnow: false
    };

    switch (currentDay) {
        case 1: // SENIN: Efek Emoji Salju Asli ❄️
        case 5: // JUMAT: Efek Emoji Salju Asli ❄️
            config.shapes = ['emoji-snow']; // Flag khusus untuk merender emoji ❄️
            config.maxParticles = 40;       // Jumlah pas agar tidak menutupi teks utama
            config.spawnRate = 250;         // Jeda kemunculan salju
            config.minSize = 12;            // Ukuran font terkecil (12px)
            config.maxSize = 28;            // Ukuran font terbesar (28px) biar kelihatan teksturnya
            config.hasDrift = true;
            config.isSnow = true;           // Jatuh slow motion & smooth
            break;

        case 2: // SELASA: Bentuk Kotak & Segitiga (Cyan-Putih Tech)
            config.colors = ['#06b6d4', '#22d3ee', '#a5f3fc', '#ffffff'];
            config.shapes = ['square', 'triangle'];
            config.maxParticles = 30;
            config.spawnRate = 400;
            config.minSize = 10;
            config.maxSize = 16;
            break;

        case 3: // RABU: Tema Estetik Anak Desain (Campur Merah Kontras & Emas)
            config.colors = ['#f43f5e', '#eab308', '#3b82f6', '#ffffff'];
            config.shapes = ['circle', 'square', 'triangle'];
            config.maxParticles = 40;
            config.spawnRate = 250;
            config.minSize = 10;
            config.maxSize = 18;
            break;

        case 4: // KAMIS: Mode Matrix/Cyberpunk (Kotak Hijau Neon, Lurus, No Goyang)
            config.colors = ['#10b981', '#34d399', '#6ee7b7', '#059669'];
            config.shapes = ['square'];
            config.maxParticles = 45;
            config.spawnRate = 200;
            config.minSize = 6;
            config.maxSize = 12;
            config.hasDrift = false;
            break;

        case 6: // SABTU: Full Party! (Semua Bentuk & Warna, Paling Ramai)
        case 0: // MINGGU: Full Party!
            config.colors = ['#ec4899', '#8b5cf6', '#3b82f6', '#10b981', '#f43f5e', '#eab308', '#ffffff'];
            config.shapes = ['circle', 'square', 'triangle'];
            config.maxParticles = 60;
            config.spawnRate = 150;
            config.minSize = 10;
            config.maxSize = 20;
            break;
    }

    // 3. Logika Utama Generator Partikel
    setInterval(() => {
        if (container.children.length >= config.maxParticles) return;

        const particle = document.createElement('div');
        const size = Math.random() * (config.maxSize - config.minSize) + config.minSize; 
        const startPositionX = Math.random() * 100; 
        
        // Salju dibuat jatuh melayang santai (6-10 detik)
        const duration = config.isSnow ? (Math.random() * 4 + 6) : (Math.random() * 3 + 4);
        
        const randomColor = config.colors[Math.floor(Math.random() * config.colors.length)];
        const randomShape = config.shapes[Math.floor(Math.random() * config.shapes.length)];

        // Base Styling Umum
        particle.style.position = 'absolute';
        particle.style.top = '-40px'; // Beri space lebih tinggi karena ukuran emoji lebih besar
        particle.style.left = `${startPositionX}%`;
        particle.style.pointerEvents = 'none';
        particle.style.userSelect = 'none';

        // Filter Bentuk / Konten Visual
        if (randomShape === 'emoji-snow') {
            particle.innerText = '❄️';
            particle.style.fontSize = `${size}px`;
            // Mengatur transparansi acak khusus emoji biar efek kedalamannya dapet
            particle.style.opacity = Math.random() * 0.4 + 0.4; // Opacity 0.4 - 0.8
        } else {
            // Gaya CSS untuk hari biasa (Confetti Geometris)
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.opacity = Math.random() * 0.4 + 0.5;

            if (randomShape === 'circle') {
                particle.style.backgroundColor = randomColor;
                particle.style.borderRadius = '50%';
            } else if (randomShape === 'square') {
                particle.style.backgroundColor = randomColor;
            } else if (randomShape === 'triangle') {
                particle.style.width = '0';
                particle.style.height = '0';
                particle.style.borderLeft = `${size / 2}px solid transparent`;
                particle.style.borderRight = `${size / 2}px solid transparent`;
                particle.style.borderBottom = `${size}px solid ${randomColor}`;
            }
        }
        
        // Jenis Transmisi Animasi
        const timingFunction = config.isSnow ? 'ease-in-out' : 'cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        particle.style.transition = `transform ${duration}s ${timingFunction}, opacity ${duration}s ease-in-out`;
        container.appendChild(particle);

        // Kalkulasi goyangan kiri-kanan dan rotasi putaran emoji biar estetik pas meluncur
        const driftX = config.hasDrift ? (Math.random() - 0.5) * 140 : 0; 
        const spin = Math.random() * 360 - 180; // Berputar pelan setengah lingkaran

        setTimeout(() => {
            particle.style.transform = `translate(${driftX}px, ${window.innerHeight + 60}px) rotate(${spin}deg)`;
        }, 50);

        // Hapus elemen dari DOM setelah sampai tujuan bawah layar
        setTimeout(() => {
            particle.remove();
        }, duration * 1000);

    }, config.spawnRate);
}

// Jalankan fungsi
document.addEventListener('DOMContentLoaded', () => {
    createDynamicDailyConfetti();
});
