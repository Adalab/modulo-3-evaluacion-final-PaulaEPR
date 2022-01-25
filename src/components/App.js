import { useEffect, useState } from 'react';
import callToApi from '../services/api';
import '../styles/App.scss';
import CharacterList from './CharacterList';
import Filters from './Filters';
import Header from './Header';

function App() {
  const [characters, setCharacters] = useState([]);
  const [filterCharacter, setFilterCharacter] = useState('');
  const [filterHouse, setFilterHouse] = useState('gryffindor');

  useEffect(() => {
    callToApi(filterHouse).then((response) => {
      setCharacters(response);
    });
  }, [filterHouse]);

  const handleFilter = (data) => {
    if (data.key === 'character') {
      setFilterCharacter(data.value);
    } else if (data.key === 'house') {
      setFilterHouse(data.value);
    }
  };

  const filteredCharacters = characters.filter((character) => {
    return character.name.toLowerCase().includes(filterCharacter.toLowerCase());
  });

  return (
    <div className="App">
      <Header />
      <Filters
        handleFilter={handleFilter}
        filterCharacter={filterCharacter}
        filterHouse={filterHouse}
      />
      <CharacterList characters={filteredCharacters} />
    </div>
  );
}

export default App;
