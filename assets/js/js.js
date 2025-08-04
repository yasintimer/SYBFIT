   // Mobile Menu Toggle
   const mobileMenuButton = document.getElementById('mobile-menu-button');
   const mobileMenu = document.getElementById('mobile-menu');
   
   mobileMenuButton.addEventListener('click', () => {
       mobileMenu.classList.toggle('hidden');
   });
   
   // Smooth Scrolling for Navigation Links
   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
       anchor.addEventListener('click', function (e) {
           e.preventDefault();
           
           const targetId = this.getAttribute('href');
           const targetElement = document.querySelector(targetId);
           
           if (targetElement) {
               window.scrollTo({
                   top: targetElement.offsetTop - 80,
                   behavior: 'smooth'
               });
               
               // Close mobile menu if open
               if (!mobileMenu.classList.contains('hidden')) {
                   mobileMenu.classList.add('hidden');
               }
           }
       });
   });
   
   // Back to Top Button
   const backToTopButton = document.getElementById('back-to-top');
   
   window.addEventListener('scroll', () => {
       if (window.pageYOffset > 300) {
           backToTopButton.classList.remove('opacity-0', 'invisible');
           backToTopButton.classList.add('opacity-100', 'visible');
       } else {
           backToTopButton.classList.remove('opacity-100', 'visible');
           backToTopButton.classList.add('opacity-0', 'invisible');
       }
   });
   
   backToTopButton.addEventListener('click', () => {
       window.scrollTo({
           top: 0,
           behavior: 'smooth'
       });
   });
   
   // Exercise Card Hover Effect
   const exerciseCards = document.querySelectorAll('.exercise-card');
   
   exerciseCards.forEach(card => {
       card.addEventListener('mouseenter', () => {
           const img = card.querySelector('.exercise-img');
           img.style.transform = 'scale(1.1)';
       });
       
       card.addEventListener('mouseleave', () => {
           const img = card.querySelector('.exercise-img');
           img.style.transform = 'scale(1)';
       });
   });
   
   // Nav Link Active State
   const sections = document.querySelectorAll('section');
   const navLinks = document.querySelectorAll('.nav-link');
   
   window.addEventListener('scroll', () => {
       let current = '';
       
       sections.forEach(section => {
           const sectionTop = section.offsetTop;
           const sectionHeight = section.clientHeight;
           
           if (pageYOffset >= sectionTop - 100) {
               current = section.getAttribute('id');
           }
       });
       
       navLinks.forEach(link => {
           link.classList.remove('text-blue-500');
           if (link.getAttribute('href') === `#${current}`) {
               link.classList.add('text-blue-500');
           }
       });
   });

   const toggleBtn = document.getElementById('theme-toggle');
const root = document.documentElement;

toggleBtn.addEventListener('click', () => {
  root.classList.toggle('dark');

  // آیکن هم تغییر کنه (ماه <-> خورشید)
  const icon = toggleBtn.querySelector('i');
  if (root.classList.contains('dark')) {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }


