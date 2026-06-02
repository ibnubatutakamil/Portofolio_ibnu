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
