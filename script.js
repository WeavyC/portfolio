const projects = [
  {
    title: "Counter Blox: Reimagined & Modded (CLOSED)",
    description: "Take part in a 5v5 team based fire fight across a variety of maps spanning across the globe.",
    url: "https://www.roblox.com/games/101968612316612/Counter-Blox-Reimagined-Modded"
  },
  {
    title: "That One VOCALOID Game",
    description: " Welcome to this awesome school where you can be a Vocaloid! Meet other Vocaloids and have fun in your school life in That One VOCALOID Game!",
    url: "https://www.roblox.com/games/15489858419/That-One-VOCALOID-Game"
  },
  {
    title: "Sonic Exe RP: New Nightmares (CLOSED)",
    description: "In this RP game you can create your own story.",
    url: "https://www.roblox.com/communities/17040749/fella-wesome-group#!/about"
  }
];


const groups = [
  {
    name: "Weavy's Studio",
    role: "Owner",
    description: "FPS & Obbies.",
    url: "https://www.roblox.com/communities/34059368/Weavys-Studio#!/about"
  },
  {
    name: "Devolve Community",
    role: "Owner",
    description: "FPS Games. Mostly known for Counter Blox: Reimagined & Modded",
    url : "https://www.roblox.com/communities/35766332/Devolve-Studio#!/about"
  },
  {
    name: "VSoft",
    role: "Scripter",
    description: "Known for TFOR and Alice In Borderlands.",
    url: "https://www.roblox.com/communities/32843109/VS-ft#!/about"
  }
];


const projectList = document.getElementById("project-list");

projects.forEach(project => {
  const card = document.createElement("div");
  card.className = "project-card";
  card.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <a href="${project.url}" class="btn" target="_blank">View Project</a>
  `;
  projectList.appendChild(card);
});

const groupList = document.getElementById("group-list");

groups.forEach(group => {
  const card = document.createElement("div");
  card.className = "group-card";
  card.innerHTML = `
    <h3>${group.name}</h3>
    <p><strong>${group.role}</strong><br>${group.description}</p>
    <a href="${group.url}" class="btn" target="_blank">Visit Group</a>
  `;
  groupList.appendChild(card);
});
