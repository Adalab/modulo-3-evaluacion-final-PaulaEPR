import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../styles/App.scss';
import callToApi from '../services/api';
import Header from './Header';
import Filters from './Filters';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';

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
      <main className="main">
        <Route exact path="/">
        <Filters
          handleFilter={handleFilter}
          filterCharacter={filterCharacter}
          filterHouse={filterHouse}
        />
          <CharacterList characters={filteredCharacters} />
        </Route>
        <Route path="/harry">
          <CharacterDetail />
        </Route>
      </main>
    </div>
  );
}

export default App;
