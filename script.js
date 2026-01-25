// Smooth scroll
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document
      .querySelector(link.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Certifications thumbnail fallback:
// If the thumbnail image is missing, replace it with a PDF preview embed.
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".cert-card").forEach(card => {
    const thumb = card.querySelector(".cert-thumb");
    const img = thumb ? thumb.querySelector("img") : null;
    const link = card.querySelector(".cert-thumb-link");
    const pdfHref = link ? link.getAttribute("href") : null;

    const showPdfPreview = () => {
      if (thumb && pdfHref) {
        thumb.innerHTML = `<embed src="${pdfHref}" type="application/pdf" />`;
      }
    };

    if (img) {
      if (img.complete && img.naturalWidth === 0) {
        showPdfPreview();
      } else {
        img.addEventListener("error", showPdfPreview, { once: true });
      }
    } else {
      showPdfPreview();
    }
  });

  document.addEventListener("click", e => {
    if (e.target.closest("a")) return;
    const card = e.target.closest(".flip-card");
    if (card) card.classList.toggle("flipped");
  });
  
  const emailBtn = document.getElementById("emailMe");
  if (emailBtn) {
    emailBtn.addEventListener("click", () => {
      const url = "https://mail.google.com/mail/?view=cm&fs=1&to=malavikaajith2004@gmail.com";
      window.open(url, "_blank");
    });
  }
  
  document.querySelectorAll(".about-image-slot .sub-img").forEach(img => {
    img.addEventListener("error", () => {
      img.remove();
    }, { once: true });
  });
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
});
