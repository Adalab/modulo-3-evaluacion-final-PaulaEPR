import defaultImage from '../images/default_image.jpg';

const CharacterCard = (props) => {
  const image =
    props.character.image === '' ? defaultImage : props.character.image;

  const species = () => {
    if (props.character.species === 'human') {
      return 'Humano';
    } else if (props.character.species === 'half-giant') {
      return 'Semi gigante';
    } else if (props.character.species === 'werewolf') {
      return 'Hombre lobo';
    } else if (props.character.species === 'ghost') {
      return 'Fantasma';
    } else {
      return props.character.species;
    }
  };
  return (
    <>
      <img className="character__image" src={image} alt="" />
      <h3 className="character__name">{props.character.name}</h3>
      <p className="character__species">{species()}</p>
    </>
  );
};

export default CharacterCard;
