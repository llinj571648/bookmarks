const sidebar = document.getElementById("sidebar");
const content = document.getElementById("content");

// 当前分类
let currentCategory = null;

// 渲染左侧分类
Object.keys(window.data).forEach(category => {
  const div = document.createElement("div");
  div.className = "category";
  div.innerText = category;

  div.onclick = () => {
    currentCategory = category;
    renderCategory(category);
  };

  sidebar.appendChild(div);
});

// 渲染右侧内容
function renderCategory(category) {
  const items = window.data[category];

  content.innerHTML = `
    <h2>${category}（${items.length}）</h2>
  `;

  items.forEach(i => {
    const div = document.createElement("div");
    div.className = "item";

    div.innerHTML = `
      <a href="${i.url}" target="_blank">${i.name}</a>
      <small>${i.desc}</small>
    `;

    content.appendChild(div);
  });
}

// 默认打开第一个分类
const first = Object.keys(window.data)[0];
if (first) renderCategory(first);
