import { useEffect, useState} from 'react';
import callToApi from '../services/api';
import '../styles/App.scss';
import CharacterList from './CharacterList';
import Header from './Header';

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    callToApi().then((response) => {
      setCharacters(response)
    });
  }, []);

  return (
    <div className="App">
        <Header/>
        <CharacterList characters={characters}/>
    </div>
  );
}

export default App;
