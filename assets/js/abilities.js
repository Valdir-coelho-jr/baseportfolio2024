// Icon Up and Down
function toggleIcon(event) {
  const button = event.target.closest('.trigger'); 
  const icon = button.querySelector("i");

  icon.classList.toggle("fa-chevron-up");
  icon.classList.toggle("fa-chevron-down");
}

window.addEventListener("load", () => {
  const buttons = document.querySelectorAll(".trigger"); 

  buttons.forEach(button => {
    button.addEventListener("click", toggleIcon); 
  });
});

// Open and Close Abilities
const abilitiesTriggers = document.querySelectorAll(".abilities .trigger");

abilitiesTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const abilities = trigger.parentElement;

    const isOpen = abilities.classList.contains("open");

    if (isOpen) {
      abilities.classList.remove("open");
    } else {
      abilities.classList.add("open");
    }
  });
});
