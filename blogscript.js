document.addEventListener("DOMContentLoaded", function() {
    // Navigation items
    const blogLink = document.querySelector('.blog-JN3');
    const contactLink = document.querySelector('.contact-ctX');
    const homeLink = document.querySelector('.home-veK');
    const aboutLink = document.querySelector('.about-1vf');
    const amalgamationLink = document.querySelector('.amalgamation-i4P');
  
    // Add event listeners
    blogLink.addEventListener('click', function() {
      window.location.href = 'blog.html';
    });
  
    contactLink.addEventListener('click', function() {
      window.location.href = 'contact.html';
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
    const photoBlog1Link = document.querySelector('.photo-blog-01-Qxo');
    const photoBlog2Link = document.querySelector('.photo-blog-02-y2F');
    const photoBlog3Link = document.querySelector('.photo-blog-03-LG7');
  
    // Add event listeners
    photoBlog1Link.addEventListener('click', function() {
      window.location.href = 'blog1.html';
    });
  
    photoBlog2Link.addEventListener('click', function() {
      window.location.href = 'blog2.html';
    });
  
    photoBlog3Link.addEventListener('click', function() {
      window.location.href = 'blog3.html';
    });
  });
  