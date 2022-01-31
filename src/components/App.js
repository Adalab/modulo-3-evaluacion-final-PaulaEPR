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
  const [filterGender, setFilterGender] = useState('all');
  const [filterSort, setFilterSort] = useState(false);
  const [filterAlternate, setFilterAlternate] = useState(0);

  //Call to API
  useEffect(() => {
    callToApi(filterHouse).then((response) => {
      setCharacters(response);
    });
  }, [filterHouse]);

  //Handle Filters & Reset
  const handleFilter = (data) => {
    if (data.key === 'character') {
      setFilterCharacter(data.value);
    } else if (data.key === 'house') {
      setFilterHouse(data.value);
    } else if (data.key === 'gender') {
      setFilterGender(data.value);
    } else if (data.key === 'sort') {
      setFilterSort(data.checked);
    } else if (data.key === 'alternate') {
      setFilterAlternate(data.value);
    }
  };

  const resetBtn = () => {
    setFilterCharacter('');
    setFilterHouse('gryffindor');
    setFilterGender('all');
    setFilterSort(false)
  };

  //Filter and Sort characters
  const filteredCharacters = characters
    .filter((character) => {
      return character.name
        .toLowerCase()
        .includes(filterCharacter.toLowerCase());
    })
    .filter((character) => {
      return filterGender === 'all' ? true : character.gender === filterGender;
    })
    .filter((character) => { 
      return character.alternate_names

    })
    .filter((character) => { 
      if (character.alternate_names.length === parseInt(filterAlternate)) {
        return true
      }
    return false
  });

    const filteredCharactersSort = characters
    .filter((character) => {
      return character.name
        .toLowerCase()
        .includes(filterCharacter.toLowerCase());
    })
    .filter((character) => {
      return filterGender === 'all' ? true : character.gender === filterGender;
    })
    .sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    })
    .filter((character) => { 
        if (character.alternate_names.length === parseInt(filterAlternate)) {
          return true
        }
      return false
    });

  //Handle Routes
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
              filterGender={filterGender}
              filterSort={filterSort}
              filterAlternate={filterAlternate}
              resetBtn={resetBtn}
            />
            {filteredCharacters.length !== 0 ? (
              <CharacterList characters={filterSort ? filteredCharactersSort : filteredCharacters} />
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
