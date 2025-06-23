document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.3 });

  const animatedElements = document.querySelectorAll(".scroll-fade-in-left, .scroll-fade-in-right");
  animatedElements.forEach(el => observer.observe(el));
});

