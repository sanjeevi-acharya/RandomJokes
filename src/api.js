const getJokesList = async url => {
  try {
    const response = await fetch(`https://icanhazdadjoke.com${url}`, {
      method: 'GET',
      headers: {Accept: 'application/json'},
    });
    const result = await response.json();
    console.log('###########', url, result.results);
    return result.results;
  } catch (err) {
    return err;
  }
};

export {getJokesList};
