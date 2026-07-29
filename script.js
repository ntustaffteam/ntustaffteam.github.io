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
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".lightbox-close");
  const galleryImages = document.querySelectorAll(".gallery-img");

  if (!lightbox || !lightboxImg || galleryImages.length === 0) return;

  function openLightbox(img) {
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add("open");
  }

  function closeLightbox() {
    lightbox.classList.remove("open");
    lightboxImg.src = "";
  }

  galleryImages.forEach(function (img) {
    img.addEventListener("click", function () {
      openLightbox(img);
    });
  });

  closeBtn.addEventListener("click", closeLightbox);

  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeLightbox();
  });
});
