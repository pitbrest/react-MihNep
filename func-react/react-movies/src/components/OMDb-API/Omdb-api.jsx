const baseUrl = 'http://www.omdbapi.com/?apikey=f5431db0&s=';

const searchByTitle = async function (searchValue = 'happiness', type = '') {
	try {
		const response = await fetch(`${baseUrl}${searchValue}&type=${type}`);
		const result = await response.json();

		if (result.Response === 'False') {
			return result;
		}
		return result.Search;
	} catch (error) {}
};

export default searchByTitle;
