document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("signup-form");
  const status = document.getElementById("form-status");

  if (!form) return;

  const TEAM_EMAIL = "ntustaffteam@gmail.com";

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    status.textContent = "";
    status.className = "form-status";

    const name = form.name.value.trim();
    const nickname = form.nickname.value.trim() || "Not specified";
    const preferredPosition = form.preferred_position.value;
    const otherPosition = form.position.value || "Not specified";
    const ntuEmail = form.ntu_email.value.trim();
    const whatsapp = form.whatsapp.value.trim();

    if (!name || !preferredPosition || !ntuEmail || !whatsapp) {
      status.textContent = "Please fill in Name, Preferred Position, NTU Email Address, and Phone Number.";
      status.classList.add("error");
      return;
    }

    const subject = `NTU Staff Team Signup - ${name}`;
    const body =
      `Name: ${name}\n` +
      `Nickname: ${nickname}\n` +
      `Preferred Position: ${preferredPosition}\n` +
      `Other Position: ${otherPosition}\n` +
      `NTU Email: ${ntuEmail}\n` +
      `WhatsApp Number: ${whatsapp}`;

    const mailtoLink =
      `mailto:${TEAM_EMAIL}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;

    status.textContent =
      "Your email app should now open with the details pre-filled — just hit send!";
    status.classList.add("success");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const moreBtn = document.getElementById("gallery-more-btn");
  const gallerySection = document.getElementById("gallery");
  const extraImages = Array.from(document.querySelectorAll(".gallery-extra"));
  const PAGE_SIZE = 3;

  if (!moreBtn || extraImages.length === 0) return;

  let revealed = 0;

  moreBtn.addEventListener("click", function () {
    if (revealed < extraImages.length) {
      const nextBatch = extraImages.slice(revealed, revealed + PAGE_SIZE);
      nextBatch.forEach(function (img) {
        img.classList.remove("gallery-extra");
      });
      revealed += nextBatch.length;

      if (revealed >= extraImages.length) {
        moreBtn.textContent = "Show Less";
      }
    } else {
      extraImages.forEach(function (img) {
        img.classList.add("gallery-extra");
      });
      revealed = 0;
      moreBtn.textContent = "More Photos";
      gallerySection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".lightbox-close");
  const prevBtn = document.querySelector(".lightbox-prev");
  const nextBtn = document.querySelector(".lightbox-next");
  const galleryImages = Array.from(document.querySelectorAll(".gallery-img"));

  if (!lightbox || !lightboxImg || galleryImages.length === 0) return;

  let currentIndex = 0;

  function showImage(index) {
    currentIndex = (index + galleryImages.length) % galleryImages.length;
    const img = galleryImages[currentIndex];
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
  }

  function openLightbox(index) {
    showImage(index);
    lightbox.classList.add("open");
  }

  function closeLightbox() {
    lightbox.classList.remove("open");
    lightboxImg.src = "";
  }

  galleryImages.forEach(function (img, index) {
    img.addEventListener("click", function () {
      openLightbox(index);
    });
  });

  closeBtn.addEventListener("click", closeLightbox);
  prevBtn.addEventListener("click", function () { showImage(currentIndex - 1); });
  nextBtn.addEventListener("click", function () { showImage(currentIndex + 1); });

  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", function (e) {
    if (!lightbox.classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") showImage(currentIndex - 1);
    if (e.key === "ArrowRight") showImage(currentIndex + 1);
  });
});
