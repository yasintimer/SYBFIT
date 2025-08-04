document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    const moonIcon = themeToggle.querySelector('.fa-moon');
    const sunIcon = themeToggle.querySelector('.fa-sun');
  
    // بررسی تم ذخیره‌شده هنگام بارگذاری صفحه
    if (localStorage.getItem('theme') === 'dark') {
      html.classList.add('dark');
      moonIcon.classList.add('hidden');
      sunIcon.classList.remove('hidden');
    } else {
      html.classList.remove('dark');
      moonIcon.classList.remove('hidden');
      sunIcon.classList.add('hidden');
    }
  
    // مدیریت کلیک روی دکمه تغییر تم
    themeToggle.addEventListener('click', () => {
      html.classList.toggle('dark');
  
      if (html.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
        moonIcon.classList.add('hidden');
        sunIcon.classList.remove('hidden');
      } else {
        localStorage.setItem('theme', 'light');
        moonIcon.classList.remove('hidden');
        sunIcon.classList.add('hidden');
      }
    });
  });