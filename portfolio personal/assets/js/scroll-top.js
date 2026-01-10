document.addEventListener('DOMContentLoaded', function() {
  // Create scroll to top button
  const scrollBtn = document.createElement('div');
  scrollBtn.className = 'scroll-to-top';
  scrollBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 4.5l8 8-1.5 1.5-5.5-5.5V22h-2V8.5L5.5 14 4 12.5l8-8z"/></svg>';
  document.body.appendChild(scrollBtn);

  // Show/hide button based on scroll position
  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      scrollBtn.classList.add('active');
    } else {
      scrollBtn.classList.remove('active');
    }
  });

  // Scroll to top when button is clicked
  scrollBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Add smooth scrolling to all internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});