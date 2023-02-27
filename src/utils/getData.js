const API = "https://rickandmortyapi.com/api/character/";

const getData = async (data) => {
	const apiURL = data.id
		? `${API}${data.id}`
		: data.search
		? `${API}?page=${data.page}&name=${data.search}`
		: data.page
		? `${API}?page=${data.page}`
		: API;
	try {
		const response = await fetch(apiURL);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log("Fetch Error", error);
	}
};

export default getData;
