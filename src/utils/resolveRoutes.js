const resolveRoutes = (route) => {
	if (route[1] === "character" || route[1] === "search") {
		return `/${route[1]}`;
	}
	return "/";
};

export default resolveRoutes;
