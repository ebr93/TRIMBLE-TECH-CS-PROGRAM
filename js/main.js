document.addEventListener("DOMContentLoaded", () => {
  const currentPage = document.body.dataset.page;
  const navLinks = document.querySelectorAll(".nav-link");

  const pageMap = {
    home: "index.html",
    pathway: "pathway.html",
    credentials: "credentials.html",
    showcase: "student-showcase.html",
    contact: "contact.html"
  };

  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href === pageMap[currentPage]) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });

  const reveals = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    reveals.forEach(item => observer.observe(item));
  } else {
    reveals.forEach(item => item.classList.add("show"));
  }
});
