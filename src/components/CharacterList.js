import CharacterCard from './CharacterCard';

const CharacterList = (props) => {
  const characterElements = props.characters.map((character, index) => {
    return (
      <li className={`character__item character__item--${character.house.toLowerCase()}`} key={index}>
        <CharacterCard character={character} />
      </li>
    );
  });
  return <ul className="character">{characterElements}</ul>;
};

export default CharacterList;
