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

    switch (skill.name) {
      case "Python":
        icon.classList.add("fa-brands", "fa-python");
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
      case "AWS":
        icon.classList.add("fa-brands", "fa-aws");
        break;
      default:
        skillsIcon.textContent = skill.name;
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

(async () => {
  const profileData = await fetchProfileData();
  updateProfileInfo(profileData);
  updateHardSkills(profileData);
  updateSoftSkills(profileData);
  updateLanguages(profileData);
})();
