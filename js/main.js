/* Departure Bay Automotive — site interactions */

document.addEventListener('DOMContentLoaded', function () {
  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      toggle.classList.toggle('active');
      nav.classList.toggle('open');
    });
  }

  // Close mobile nav on link click
  document.querySelectorAll('.main-nav a').forEach(link => {
    link.addEventListener('click', function () {
      if (nav && nav.classList.contains('open')) {
        nav.classList.remove('open');
        if (toggle) toggle.classList.remove('active');
      }
    });
  });

  // Contact form — mailto fallback so it works on static hosting
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !email || !message) {
        alert('Please fill in your name, email, and comment.');
        return;
      }

      const service = document.getElementById('service')?.value.trim() || '';
      const vehicle = document.getElementById('vehicle')?.value.trim() || '';

      const subject = encodeURIComponent('Repair estimate request from ' + name);
      const body = encodeURIComponent(
        'Name: ' + name + '\n' +
        'Phone: ' + phone + '\n' +
        'Email: ' + email + '\n' +
        (vehicle ? 'Vehicle: ' + vehicle + '\n' : '') +
        (service ? 'Service needed: ' + service + '\n' : '') +
        '\nComments:\n' + message
      );

      window.location.href = 'mailto:info@departurebayauto.ca?subject=' + subject + '&body=' + body;
    });
  }

  // Year in footer
  const yearEl = document.getElementById('current-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
