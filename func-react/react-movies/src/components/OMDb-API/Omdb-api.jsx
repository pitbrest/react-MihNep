const baseUrl = 'http://www.omdbapi.com/?apikey=f5431db0&s=';

const searchByTitle = async function (searchValue = 'happiness', type = '') {
	const response = await fetch(`${baseUrl}${searchValue}&type=${type}`);
	const result = await response.json();
	return result.Search;
};

export default searchByTitle;
