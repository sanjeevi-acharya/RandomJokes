import ApiConstants from "./ApiConstants";

const getJokesList = async url => {
  try {
    const response = await fetch(`${ApiConstants.API_ADDRESS}${url}`, {
      method: 'GET',
      headers: {Accept: 'application/json'},
    });
    const result = await response.json();
    return result.results;
  } catch (err) {
    return err;
  }
};

export {getJokesList};
