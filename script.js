const projects = [
  {
    title: "Counter Blox Framework",
    description: "Round logic, bomb system, MVP, skins, and full round loop optimization."
  },
  {
    title: "ARG Puzzle Demo",
    description: "An immersive mystery game with branching logic and subtle story-driven mechanics."
  },
  {
    title: "Custom Inventory UI",
    description: "Skin picker, dynamic Firebase-backed inventory, and equipment switching system."
  }
];

const projectList = document.getElementById("project-list");

projects.forEach(project => {
  const card = document.createElement("div");
  card.className = "project-card";
  card.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
  projectList.appendChild(card);
});
