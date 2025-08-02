const projects = [
  {
    title: "Counter Blox: Reimagined & Modded",
    description: "Take part in a 5v5 team based fire fight across a variety of maps spanning across the globe."
  },
  {
    title: "That One VOCALOID Game",
    description: " Welcome to this awesome school where you can be a Vocaloid! Meet other Vocaloids and have fun in your school life in That One VOCALOID Game!"
  },
  {
    title: "Sonic Exe RP: New Nightmares",
    description: "In this RP game you can create your own story."
  }
];

const projectList = document.getElementById("project-list");

projects.forEach(project => {
  const card = document.createElement("div");
  card.className = "project-card";
  card.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
  projectList.appendChild(card);
});


const groups = [
  {
    name: "Weavy's Studio",
    role: "Owner",
    description: "FPS & Obbies."
  },
  {
    name: "Devolve Community",
    role: "Owner",
    description: "FPS Games. Mostly known for Counter Blox: Reimagined & Modded"
  },
  {
    name: "VSoft",
    role: "Scripter",
    description: "Known for TFOR and Alice In Borderlands."
  }
];

const groupList = document.getElementById("group-list");

groups.forEach(group => {
  const card = document.createElement("div");
  card.className = "group-card";
  card.innerHTML = `<h3>${group.name}</h3><p><strong>${group.role}</strong><br>${group.description}</p>`;
  groupList.appendChild(card);
});
