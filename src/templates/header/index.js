import logoSmall from "images/logo-small.png";

const template = require("./header.pug");

const Header = () => {
	return template({ logo: logoSmall });
};

export default Header;
