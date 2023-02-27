const template = require("./nofound.pug");

const NoFound = (search) => {
	const text = search.search.split("%20").join(" ");
	return template({ text });
};

export default NoFound;
