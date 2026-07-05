const app = document.getElementById("app");

const data = window.data;

Object.keys(data).forEach(category => {

  const items = data[category]; // 这是数组

  const card = document.createElement("div");
  card.className = "card";

  // 取第一个 item 的 url 当入口（或你也可以改成 category 页面）
  const first = items[0];

  card.innerHTML = `
    <a href="${first?.url || "#"}">
      <h3>${category}</h3>
      <p>${first?.desc || ""}</p>
      <small>${items.length} sites</small>
    </a>
  `;

  app.appendChild(card);
});
