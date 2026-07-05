const app = document.getElementById("app");

const data = window.data;

Object.keys(data).forEach(key => {
  const section = data[key];

  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <a href="${section.url}">
      <h3>${section.title || key}</h3>
      <p>${section.desc || ""}</p>
      <small>${section.items.length} sites</small>
    </a>
  `;

  app.appendChild(card);
});
