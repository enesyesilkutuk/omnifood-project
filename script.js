const button = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");
const closeIcon = document.querySelector(".close-icon");
const menuIcon = document.querySelector(".menu-icon");

button.addEventListener("click", function () {
  header.classList.toggle("nav-open");
  // if (header.classList.contains("nav-open")) {
  //     closeIcon.style.display = 'block';
  //     menuIcon.style.display = 'none';
  //     return;
  // }
  // else {
  //     menuIcon.style.display = 'block';
  //     closeIcon.style.display = 'none';
  //     return;
  // }
});

// Smooth scrolling animation

const allLinks = document.querySelectorAll("a");

allLinks.forEach((link) => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      // Alternative approach
      if (header.classList.contains("nav-open")) {
        header.classList.remove("nav-open");
      }
    }

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({
        behavior: "smooth",
      });

    // Alternative approach
    //   if (header.classList.contains("nav-open")) {
    //     header.classList.remove("nav-open");
    //   }
    }

    // Close mobile navigation

    if (link.classList.contains("main-nav-link")) {
        header.classList.remove("nav-open"); 
    }
  });
});

// Sticky navigation 

const sectionHeroEl = document.querySelector(".section-hero");

const observer = new IntersectionObserver((entries) => {
  const ent = entries[0];
  
  if (ent.isIntersecting === false) {
    document.body.classList.add("sticky");
  }

  if (ent.isIntersecting === true) {
    document.body.classList.remove("sticky");
  }
}, {
  root: null,
  threshold: 0,
  rootMargin: "-80px",
});

observer.observe(sectionHeroEl);
