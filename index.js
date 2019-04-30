const flexMenu = document.querySelector(".toggleNav");
const list = document.querySelector(".flexlist");

flexMenu.addEventListener("click", () => {
  console.log("hello");
  list.classList.toggle("show");
});
