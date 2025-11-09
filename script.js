// theme toggle and remember preference
const toggle = document.getElementById('theme-toggle');
const stored = localStorage.getItem('theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
document.documentElement.setAttribute('data-theme', stored);
toggle.textContent = stored === 'dark' ? '☀' : '☾';

toggle.addEventListener('click', () => {
  const cur = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', cur);
  localStorage.setItem('theme', cur);
  toggle.textContent = cur === 'dark' ? '☀' : '☾';
});

// smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    e.preventDefault();
    const id = a.getAttribute('href');
    if(id === '#') return;
    const el = document.querySelector(id);
    if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
  });
});