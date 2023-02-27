import Header from "templates/header";
import Home from "pages/home";
import Character from "components/Character";
import Error404 from "pages/Error404";
import "styles/main.sass";
import resolveRoutes from "../utils/resolveRoutes";
import getHash from "../utils/getHash";
import Search from "../pages/Search";

const routes = {
	"/": Home,
	"/search": Search,
};

const router = async () => {
	const header = null || document.getElementById("header");
	const content = null || document.getElementById("content");

	let route = await resolveRoutes(getHash());
	let render = routes[route] ? routes[route] : Error404;

	header.innerHTML = await Header();
	content.innerHTML = await render("/");

	const cards = document.querySelectorAll(".card");

	cards.forEach((card) => {
		card.addEventListener("click", async () => {
			let id = card.children[0].textContent;

			content.innerHTML += await Character(id);

			const myModal = new bootstrap.Modal(
				document.getElementById("characterModal")
			);
			myModal.toggle();
			router();
		});
	});

	const pagLink = document.querySelectorAll(".page-link");

	pagLink.forEach((link) => {
		link.addEventListener("click", () => {
			window.scrollTo(0, 0);
		});
	});

	const input = document.getElementById("search");

	input.addEventListener("keyup", (event) => {
		if (event.keyCode === 13) {
			location.hash = `/search/${input.value}/page/1`;
		}
	});
};

export default router;
