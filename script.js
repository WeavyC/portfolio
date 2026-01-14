const projects = [
  {
    title: "+1 Speed Hoverboard Escape",
    description: "Welcome to +1 Speed Hoverboard Escape! 🛹",
    url: "https://www.roblox.com/games/96429933667357/1-Speed-Hoverboard-Escape",
    image: "https://github.com/WeavyC/portfolio/blob/main/noFilter%20(7).png?raw=true"
  },
  {
    title: "City Of Vice",
    description: "🔥 CITY OF VICE – Build your rise from nothing and take over the streets.",
    url: "https://www.roblox.com/games/119963002291522/City-of-Vice",
    image: "https://github.com/WeavyC/portfolio/blob/main/noFilter%20(8).png?raw=true" 
  },
  {
    title: "Counter Blox: Reimagined Modded",
    description: "🗺 Take part in a team vs team based combat with maps spanning across the world!",
    url: "https://www.youtube.com/watch?v=BKBBsn9RI7M",
    image: "https://github.com/WeavyC/portfolio/blob/main/noFilter%20(9).png?raw=true" 
  }
];


const groups = [
  {
    name: "Spectre Core",
    role: "Owner",
    description: "Fun Games!",
    url: "https://www.roblox.com/communities/642962631/Spectre-Core#!/about",
  // image: "https://placehold.co/400x400/222/FFF?text=WS"
    image: "https://tr.rbxcdn.com/180DAY-a6f763576b800f0877fef35e07387265/150/150/Image/Webp/noFilter"
  },
  {
    name: "Devolve Community",
    role: "Owner",
    description: "FPS Games. Mostly known for Counter Blox: Reimagined & Modded",
    url : "https://www.roblox.com/communities/702299356/Devolve-Games#!/about",
    image: "https://tr.rbxcdn.com/180DAY-1839f51e2f9ad3156966f3b5e5ed8a21/150/150/Image/Webp/noFilter"
  },
  {
    name: "City Of Vice",
    role: "Scripter",
    description: "Known for City Of Vice.",
    url: "https://www.roblox.com/communities/918674343/CityOfVice#!/about",
    image: "https://tr.rbxcdn.com/180DAY-c3d2db22b92c137e52cf294174589ec1/150/150/Image/Webp/noFilter"
  }
];


const projectList = document.getElementById("project-list");

projects.forEach(project => {
  const card = document.createElement("div");
  card.className = "project-card";
  const bgImage = project.image.includes("rbxcdn") ? "https://placehold.co/600x340/111/00bcd4?text=Game+Preview" : project.image;
  
  card.innerHTML = `
    <div class="card-image-wrapper">
        <img src="${bgImage}" alt="${project.title}" class="card-image">
        <div class="card-overlay">
            <a href="${project.url}" class="play-btn" target="_blank">PLAY</a>
        </div>
    </div>
    <div class="card-content">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
    </div>
  `;
  projectList.appendChild(card);
});

const groupList = document.getElementById("group-list");

groups.forEach(group => {
  const card = document.createElement("div");
  card.className = "group-card";
  card.innerHTML = `
    <div class="group-icon">
        <img src="${group.image}" alt="${group.name}">
    </div>
    <div class="group-info">
        <h3>${group.name}</h3>
        <p class="role">${group.role}</p>
        <p class="desc">${group.description}</p>
        <a href="${group.url}" class="group-link" target="_blank">View Group <span class="arrow">→</span></a>
    </div>
  `;
  groupList.appendChild(card);
});
