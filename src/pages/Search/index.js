import Pagination from "components/Pagination";
import getData from "utils/getData";
import getHash from "utils/getHash";
import NoFound from "components/NoFound";

const template = require("./search.pug");

const Search = async () => {
	const search = getHash()[2];
	const page = parseInt(getHash()[4]);
	const characters = await getData({ page, search });
	if (characters.error) {
		return NoFound({ search });
	} else {
		return (
			template(characters.results) +
			Pagination(page, characters.info.pages, search)
		);
	}
};

export default Search;
