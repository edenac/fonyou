import getData from "utils/getData";

const template = require("./character.pug");

const Character = async (id) => {
	const character = await getData({ id });
	return template(character);
};

export default Character;
