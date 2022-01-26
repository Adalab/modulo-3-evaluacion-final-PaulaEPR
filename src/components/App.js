import { useEffect, useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
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

  const routeCharacterData = useRouteMatch('/:house/character/:charId');

  const getRouteCharacter = () => {
    if (routeCharacterData) {
      const routeId = routeCharacterData.params.charId;
      return characters.find((character) => {
         return character.id === routeId;
      });
    }
  };

  return (
    <div className="App">
      <Header />
      <main className="main">
        <Switch>
          <Route exact path="/">
            <Filters
              handleFilter={handleFilter}
              filterCharacter={filterCharacter}
              filterHouse={filterHouse}
            />
            <CharacterList characters={filteredCharacters} />
          </Route>
          <Route path="/:house/character/:charId">
            <CharacterDetail character={getRouteCharacter()} />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
