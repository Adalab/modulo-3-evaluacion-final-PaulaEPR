const callToApi = () => {
  return fetch('http://hp-api.herokuapp.com/api/characters/house/gryffindor')
    .then(response => response.json())
    .then(response => {
      const result = response.map(item => {
        return {
          image: item.image,
          name: item.name,
          species: item.species,
          alive: item.alive,
          gender: item.gender,
          house: item.house,
        };
      });
      return result;
    });
};

export default callToApi;