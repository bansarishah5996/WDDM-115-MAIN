document.addEventListener("DOMContentLoaded", function() {
    // Navigation items
    const contactLink = document.querySelector('.contact-tBH');
    const blogLink = document.querySelector('.blog-kUP');
    const homeLink = document.querySelector('.home-UQP');
    const aboutLink = document.querySelector('.about-oBm');
    const amalgamationLink = document.querySelector('.amalgamation-pMm');
    const nameField = document.querySelector('.name-bg-szF');
  const emailField = document.querySelector('.email-bg-hCb');
  const writeField = document.querySelector('.ws-bg-Wfq');
  const submitButton = document.querySelector('.submit-q5q');

  submitButton.addEventListener('click', function() {
    // Get the edited content from the fields
    const name = nameField.textContent;
    const email = emailField.textContent;
    const message = writeField.textContent;

    // Display an alert box with "Message sent" message
    alert("Message sent");

  
  });

  
    // Add event listeners
    contactLink.addEventListener('click', function() {
      window.location.href = 'contact.html';
    });
  
    blogLink.addEventListener('click', function() {
      window.location.href = 'blog.html';
    });
  
    homeLink.addEventListener('click', function() {
      window.location.href = 'index.html';
    });
  
    aboutLink.addEventListener('click', function() {
      window.location.href = 'about.html';
    });
    amalgamationLink.addEventListener('click', function() {
        window.location.href = 'index.html';
      });
    // Image links
    const instaLink = document.querySelector('.insta-WSs');
    const fbLink = document.querySelector('.fb-CqV');
    const pinLink = document.querySelector('.pin-LRu');
    const mailLink = document.querySelector('.mail-V3u');
  
    // Add event listeners
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
})