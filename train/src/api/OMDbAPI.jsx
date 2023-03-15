const responseTemplate = 'http://www.omdbapi.com/?apikey=f5431db0&s=';

const searchByTitle = async function (title = 'happiness', type = '') {
  try {
    const response = await fetch(responseTemplate + title + '&type=' + type);
    const result = await response.json();
    return result.Search;
  } catch (error) {
    console.error(error.message, 'Something went wrong when try to searchByTitle !');
  }
};

export { searchByTitle };