const contentCht = document.getElementsByClassName("content");
const boxCht = contentCht[0].parentElement;
const search = document.querySelector('.search');
const listCht = document.querySelector(".listCht");
const profileCht = document.querySelector('.profileCht');
const backProfileCht = profileCht.querySelector('#back');

// Scroll always keep in bottom
boxCht.scrollTop = boxCht.scrollHeight;

for (let i = 0; i < contentCht.length; i++) {
	const cc = contentCht[i];
	i % 2 == 0 ? cc.classList.add("active") : "";
}

listCht.addEventListener("click", () => {
  search.classList.add("active");
  listCht.classList.add("active");
});

backProfileCht.addEventListener("click", () => {
  search.classList.remove("active");
  listCht.classList.remove("active");
});