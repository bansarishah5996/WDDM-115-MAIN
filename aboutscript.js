document.addEventListener("DOMContentLoaded", function() {
    // Navigation items
    const aboutLink = document.querySelector('.about-BLs');
    const blogLink = document.querySelector('.blog-SGo');
    const contactLink = document.querySelector('.contact-kYP');
    const homeLink = document.querySelector('.home-gB9');
    const amalgamationLink = document.querySelector('.amalgamation-1DR');
  
    // Image links
    const instaLink = document.querySelector('.insta-to1');
    const fbLink = document.querySelector('.fb-S3q');
    const pinLink = document.querySelector('.pin-BGK');
    const mailLink = document.querySelector('.mail-KdR');
  
    // Add event listeners
    aboutLink.addEventListener('click', function() {
      window.location.href = 'about.html';
    });
  
    blogLink.addEventListener('click', function() {
      window.location.href = 'blog.html';
    });
  
    contactLink.addEventListener('click', function() {
      window.location.href = 'contact.html';
    });
  
    homeLink.addEventListener('click', function() {
      window.location.href = 'index.html';
    });

    amalgamationLink.addEventListener('click', function() {
        window.location.href = 'index.html';
      });
  
  
    instaLink.addEventListener('click', function() {
      window.location.href = 'https://www.instagram.com';
    });
  
    fbLink.addEventListener('click', function() {
      window.location.href = 'https://www.facebook.com';
    });
  
    pinLink.addEventListener('click', function() {
      window.location.href = 'https://www.pinterest.com';
    });
  
    mailLink.addEventListener('click', function() {
      window.location.href = 'mailto:your@email.com';
    });
  });
  