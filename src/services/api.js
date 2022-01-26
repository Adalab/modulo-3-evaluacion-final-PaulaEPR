const callToApi = (search) => {
  return fetch(`http://hp-api.herokuapp.com/api/characters/house/${search}`)
    .then(response => response.json())
    .then(response => {
      const result = response.map((item, index) => {
        return {
          image: item.image,
          name: item.name,
          species: item.species,
          alive: item.alive,
          gender: item.gender,
          house: item.house,
          alternate_names: item.alternate_names,
          id: `${index + 1}-${item.name.toLowerCase().replace(" ", "_")}`
        };
      });
      return result;
    });
};

export default callToApi;