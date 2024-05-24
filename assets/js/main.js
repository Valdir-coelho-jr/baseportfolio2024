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

  // Limpa a lista de hard skills antes de adicionar novos itens
  hardSkillsList.innerHTML = "";

  profileData.skills.hardSkills.forEach((skill) => {
    const li = document.createElement("li");
    const skillsIcon = document.createElement("span");
    skillsIcon.classList.add("skillsIcon");
    const icon = document.createElement("i");

    // Define a classe do ícone do Font Awesome
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
        // Se a skill não tiver um ícone definido, exibe o nome da skill como texto
        skillsIcon.textContent = skill.name;
    }

    // Adiciona o ícone ao elemento skillsIcon
    skillsIcon.appendChild(icon);
    // Adiciona o elemento skillsIcon à lista
    li.appendChild(skillsIcon);
    // Adiciona o elemento li à lista de hard skills
    hardSkillsList.appendChild(li);
  });
}

(async () => {
  const profileData = await fetchProfileData();
  updateProfileInfo(profileData);
  updateHardSkills(profileData);
  updateSoftSkills(profileData);
})();
