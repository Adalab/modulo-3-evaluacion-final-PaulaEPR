import { Link } from 'react-router-dom';
import defaultImage from '../images/default_image.jpg';
import '../styles/components/CharacterCard.scss';

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
    <Link to={`${props.character.house.toLowerCase()}/character/${props.character.id}`} className="character__link">
      <img className="character__image" src={image} alt="" />
      <div className="character__info">
        <p className="character__name">{props.character.name}</p>
        <p className="character__species">—{species()}—</p>
      </div>
    </Link>
  );
};

CharacterCard.defaultProps = {
  character: {
    image: defaultImage,
    name: 'Personaje no encontrado',
    species: 'No encontrada',
    alive: 'No encontrado',
    gender: 'No encontrado',
    house: 'No encontrada',
    alternate_names: [],
    id: '',
  },
};

export default CharacterCard;
