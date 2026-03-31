// Real-time UTC and Local Time display
function showTime() {
  const now = new Date();
  document.getElementById('currentTimeUTC').textContent = now.toUTCString();
  document.getElementById('currentTimeLocal').textContent = now.toLocaleString();
}
showTime();
setInterval(showTime, 1000);

// Dark mode toggle with saved preference
const toggleBtn = document.getElementById('darkModeToggle');
toggleBtn?.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if(document.body.classList.contains('dark-mode')){
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

window.addEventListener('load', () => {
  if(localStorage.getItem('theme') === 'dark'){
    document.body.classList.add('dark-mode');
  }
});

// Smooth scroll for anchor links (#)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target){
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Back-to-top button
const backTopBtn = document.createElement('button');
backTopBtn.id = 'backToTop';
backTopBtn.textContent = '⬆️ Top';
backTopBtn.style.position = 'fixed';
backTopBtn.style.bottom = '20px';
backTopBtn.style.right = '20px';
backTopBtn.style.padding = '10px 15px';
backTopBtn.style.display = 'none';
backTopBtn.style.fontSize = '16px';
backTopBtn.style.cursor = 'pointer';
document.body.appendChild(backTopBtn);

window.addEventListener('scroll', () => {
  if(window.scrollY > 300){
    backTopBtn.style.display = 'block';
  } else {
    backTopBtn.style.display = 'none';
  }
});

backTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

