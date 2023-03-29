const API_KEY = process.env.REACT_APP_API_KEY;
const responseTemplate = `http://www.omdbapi.com/?apikey=${API_KEY}&s=`;

const searchByTitle = async function (title, type = '') {
	try {
		const response = await fetch(responseTemplate + title + '&type=' + type);
		const result = await response.json();
		return result.Search;
	} catch (error) {
		console.error(
			error.message,
			'Something went wrong when try to searchByTitle !'
		);
	}
};

export { searchByTitle };
