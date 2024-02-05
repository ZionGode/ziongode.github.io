// Script section for adding projects and changing color

  // Function to add a new project
  function addProject() {
    // Get the projects list
    const projectsList = document.getElementById("portfolio");

    // Calculate the next project number
    const nextProjectNumber =
      projectsList.querySelectorAll('div[id^="project"]').length + 1;

    // Create a new project div
    const newProjectDiv = document.createElement("div");
    newProjectDiv.id = `project${nextProjectNumber}`;
    newProjectDiv.innerHTML = `<h3>Project ${nextProjectNumber}</h3><p>Description of Project ${nextProjectNumber}.</p>`;

    // Insert the new project div before the button
    projectsList.insertBefore(
      newProjectDiv,
      document.querySelector("#portfolio button")
    );
  }

  // Function to add a new project to the aside section
  function addProjectToAside() {
    // Get the projects list in the aside section
    const asideProjectsList = document.getElementById("asideList");

    // Calculate the next project number
    const nextProjectNumber =
      asideProjectsList.querySelectorAll("li a").length + 1;

    // Create a new project list item
    const newProjectListItem = document.createElement("li");
    newProjectListItem.innerHTML = `<a href="#project${nextProjectNumber}">Project ${nextProjectNumber}</a>`;

    // Append the new project list item to the aside section
    asideProjectsList.appendChild(newProjectListItem);
  }

  // Event listener to change the color of the main section
  document.getElementById("changeColor").addEventListener("click", function () {
    // Get the main element
    const mainElement = document.querySelector("main");

    // Get the current color
    const currentColor = mainElement.style.color || window.getComputedStyle(mainElement).color;

    // Toggle between #ffd700 and #333
    const newColor = currentColor === "rgb(255, 215, 0)" ? "#333" : "#ffd700";

    // Apply the new color
    mainElement.style.color = newColor;
  });