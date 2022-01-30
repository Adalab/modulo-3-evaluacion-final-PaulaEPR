import { useEffect, useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import '../styles/components/App.scss';
import callToApi from '../services/api';
import Header from './Header';
import Filters from './Filters';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import NotFoundPage from './NotFoundPage';
import NotFoundChar from './NotFoundChar';

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

  const resetBtn = () => {
    setFilterCharacter('');
    setFilterHouse('gryffindor');
  };

  const filteredCharacters = characters.filter((character) => {
    return character.name.toLowerCase().includes(filterCharacter.toLowerCase());
  });

  const routeCharacterData = useRouteMatch('/:house/character/:charId');

  const getRouteCharacter = () => {
    if (routeCharacterData) {
      const routeId = routeCharacterData.params.charId;
      const routeHouse = routeCharacterData.params.house;
      if (routeHouse !== filterHouse) {
        setFilterHouse(routeHouse);
      }
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
              resetBtn={resetBtn}
            />
            {filteredCharacters.length !== 0 ? (
              <CharacterList
                characters={filteredCharacters} 
              />
            ) : (
              <Route component={NotFoundChar} />
            )}
          </Route>
          <Route path="/:house/character/:charId">
            <CharacterDetail character={getRouteCharacter()} />
          </Route>
          <Route component={NotFoundPage} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
