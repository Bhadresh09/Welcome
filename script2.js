const generateButton = document.getElementById("generateButton");
const fullNameInput = document.getElementById("fullName");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const experienceInput = document.getElementById("experience");
const resumeElement = document.getElementById("resume");

generateButton.addEventListener("click", generateResume);

function generateResume() {
  const fullName = fullNameInput.value;
  const email = emailInput.value;
  const phone = phoneInput.value;
  const experience = experienceInput.value;

  const resumeContent = `
    <h2>${fullName}</h2>
    <p>Email: ${email}</p>
    <p>Phone: ${phone}</p>
    <h3>Experience</h3>
    <p>${experience}</p>
  `;

  resumeElement.innerHTML = resumeContent;
}
