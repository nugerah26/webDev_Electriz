const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');

  // Toggle class "active" saat hamburger diklik
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });