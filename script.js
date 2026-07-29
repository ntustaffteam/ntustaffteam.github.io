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
    const whatsapp = form.whatsapp.value.trim() || "Not specified";

    if (!name || !preferredPosition || !ntuEmail) {
      status.textContent = "Please fill in Name, Preferred Position, and NTU Email Address.";
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
