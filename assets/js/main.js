function updateProfileInfo(profileData) {
  const photo = document.getElementById("profile.photo");
  photo.src = profileData.photo;
  photo.alt = profileData.name;

  const name = document.getElementById("profile.name");
  name.innerText = profileData.name;
  const job = document.getElementById("profile.job");
  job.innerText = profileData.job;
  const location = document.getElementById("profile.location");
  location.innerText = profileData.location;
  const email = document.getElementById("profile.email");
  email.innerText = profileData.email;
  email.href = `mailto:${profileData.email}`;
}

function updateSoftSkills(profileData) {
  const softSkills = document.getElementById("profile.skills.softSkills");

  softSkills.innerHTML = profileData.skills.softSkills
    .map((skill) => `<li>${skill}</li>`)
    .join("");
}

function updateHardSkills(profileData) {
  const hardSkillsList = document.getElementById("profile.skills.hardSkills");
  hardSkillsList.innerHTML = "";

  profileData.skills.hardSkills.forEach((skill) => {
    const li = document.createElement("li");
    const skillsIcon = document.createElement("span");
    skillsIcon.classList.add("skillsIcon");
    const icon = document.createElement("i");

    switch (skill) {
      case "PHP":
        icon.classList.add("fa-brands", "fa-php");
        break;
      case "JavaScript":
        icon.classList.add("fa-brands", "fa-square-js");
        break;
      case "React":
        icon.classList.add("fa-brands", "fa-react");
        break;
      case "SQL":
        icon.classList.add("fa-solid", "fa-database");
        break;
      default:
        skillsIcon.textContent = skill; // Se o skill não for reconhecido, apenas mostra o texto
    }

    skillsIcon.appendChild(icon);
    li.appendChild(skillsIcon);
    hardSkillsList.appendChild(li);
  });
}

function updateLanguages(profileData) {
  const languagesList = document.getElementById("profile.languages");
  languagesList.innerHTML = ""; // Limpa a lista

  profileData.languages.forEach((language) => {
    const languageItem = document.createElement("li");
    const icon = document.createElement("i");
    icon.classList.add("fa-regular", "fa-circle-check");

    // Crie o elemento de texto e adicione à lista
    const languageText = document.createTextNode(language);
    languageItem.appendChild(icon);
    languageItem.appendChild(languageText);

    languagesList.appendChild(languageItem);
  });
}

function updatePortfolio(profileData) {
  const portfolio = document.getElementById("profile.portfolio");
  portfolio.innerHTML = profileData.portfolio
    .map((project) => {
      return `<h3 ${project.github ? 'class="github"' : ""}>${project.name}</h3>
    <a href="${
      project.url
    }" target="_blank"><i class="fa-brands fa-github"></i> ${project.url}</a>
    `;
    })
    .join("");
}

function updateProfessionalExperience(profileData) {
  const ProfessionalExperience = document.getElementById("");

  ProfessionalExperience.innerHTML = profileData.ProfessionalExperience.map(
    (experience) => {
      return `
    <li>
    <h3 class="title">
      ${experience.name}
    </h3>
    <p class="date">
      <i class="fa-solid fa-calendar-days"></i>${experience.period}
    </p>
    <p>
      ${experience.description}
    </p>
  </li>
    `;
    }
  ).join("");
}

(async () => {
  const profileData = await fetchProfileData();
  updateProfileInfo(profileData);
  updateHardSkills(profileData);
  updateSoftSkills(profileData);
  updateLanguages(profileData);
  updatePortfolio(profileData);
  updateProfessionalExperience(profileData);
})();
