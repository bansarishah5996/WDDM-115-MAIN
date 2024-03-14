
document.addEventListener("DOMContentLoaded", function() {
    // Navigation items
    const homeLink = document.querySelector('.home-kCP');
    const blogLink = document.querySelector('.blog-fTm');
    const aboutLink = document.querySelector('.about-N7H');
    const contactLink = document.querySelector('.contact-uWX');
    const amalgamationLink = document.querySelector('.amalgamation-T4B');
  
    // Image links
    const instaLink = document.querySelector('.insta-7jt');
    const fbLink = document.querySelector('.fb-zog');
    const pinLink = document.querySelector('.pin-ggW');
    const mailLink = document.querySelector('.mail-DgS');
    const photoLink = document.querySelector('.photo-kAa');
  
    // listeners
    homeLink.addEventListener('click', function() {
      window.location.href = 'index.html';
    });
  
    blogLink.addEventListener('click', function() {
      window.location.href = 'blog.html';
    });
  
    aboutLink.addEventListener('click', function() {
      window.location.href = 'about.html';
    });
  
    contactLink.addEventListener('click', function() {
      window.location.href = 'contact.html';
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
  