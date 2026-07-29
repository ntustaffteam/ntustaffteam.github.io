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
    const preferredPosition = form.preferred_position.value;
    const otherPosition = form.position.value || "Not specified";
    const contact = form.contact.value.trim();

    const subject = `NTU Staff Team Signup - ${name}`;
    const body =
      `Name: ${name}\n` +
      `Preferred Position: ${preferredPosition}\n` +
      `Other Position: ${otherPosition}\n` +
      `Contact: ${contact}`;

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
