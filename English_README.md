### Base-Portfolio-2024

A portfolio template that can be used as a base for creating personal portfolios.

## Key Features

* **Expandable Sections:** The Skills, Languages, Portfolio, and Professional Experience sections expand and collapse on click, providing smooth and organized navigation.
* **Interactive Icons:** Icons within the expandable sections change based on the section's state (open or closed), visually indicating user interaction.
* **Responsive Design:** The layout automatically adjusts to different screen sizes, ensuring an optimal experience on desktops, tablets, and mobile phones.

## Completed Tasks

* **HTML Structure:** Created the basic structure of the website using HTML, defining the different sections and elements.
* **CSS Styling:** Used CSS to style all elements of the website, including colors, fonts, spacing, and responsiveness.
* **JavaScript Functionality:** Implemented the following functionalities with JavaScript:
    * **Expansion Animations:** Sections expand and collapse smoothly using CSS transitions controlled by JavaScript.
    * **Icon Toggling:** The Font Awesome icon class is toggled between up/down arrows when the section is opened/closed.
* **Portfolio Content:** Included information about my skills, languages, projects, and professional experience.

## Implementation Details

### JavaScript (abilities.js)

**1. Function `toggleIcon`:**

* Responsible for toggling the icon class (up or down arrow) within the section button.
* Finds the closest button (`trigger`) to the clicked icon and selects the `<i>` element (icon) within it.
* Toggles the `fa-chevron-up` and `fa-chevron-down` classes on the icon.

**2. Event Listener on Page Load:**

* Adds an event listener that listens for the `click` event on all section buttons (`trigger`).
* When a button is clicked, the `toggleIcon` function is called.

**3. Section Open/Close Functionality:**

* Selects all section buttons (`abilities .trigger`).
* For each button, adds an event listener that:
    * Gets the button's parent element (the section itself).
    * Checks if the section is already open by checking for the presence of the "open" class.
    * Adds or removes the "open" class from the section, controlling its visibility and animation.

## Considerations

The background image used in the project was created using the Microsoft AI Image Generator.
