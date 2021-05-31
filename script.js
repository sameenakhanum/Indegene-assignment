const btn = document.getElementById("btn");
const links = document.getElementById("nav-links");

btn.addEventListener("click", () => links.classList.toggle("links-active"));