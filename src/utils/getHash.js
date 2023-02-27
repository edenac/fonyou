const getHash = () => {
	/** ENDPOINTS
	 * Pagination: #/page/1
	 * Search: #/search/rick
	 */
	const hash = location.hash.slice(1).toLocaleLowerCase().split("/");
	return location.hash !== "" ? hash : "/";
};

export default getHash;
