import { Link } from 'react-router-dom';
import defaultGryffindorF from '../images/default/default_gryffindor_f.jpg';
import defaultHufflepuffF from '../images/default/default_hufflepuff_f.jpg';
import defaultRavenclawF from '../images/default/default_ravenclaw_f.jpg';
import defaultSlytherinF from '../images/default/default_slytherin_f.jpg';
import defaultGryffindorM from '../images/default/default_gryffindor_m.jpg';
import defaultHufflepuffM from '../images/default/default_hufflepuff_m.jpg';
import defaultRavenclawM from '../images/default/default_ravenclaw_m.jpg';
import defaultSlytherinM from '../images/default/default_slytherin_m.jpg';
import '../styles/components/CharacterCard.scss';

const CharacterCard = (props) => {
  const imageDefault = () => {
    if (props.character.house === 'Gryffindor') {
      if (props.character.gender === 'female') {
        return defaultGryffindorF;
      } else {
        return defaultGryffindorM;
      }
    } else if (props.character.house === 'Hufflepuff') {
      if (props.character.gender === 'female') {
        return defaultHufflepuffF;
      } else {
        return defaultHufflepuffM;
      }
    } else if (props.character.house === 'Ravenclaw') {
      if (props.character.gender === 'female') {
        return defaultRavenclawF;
      } else {
        return defaultRavenclawM;
      }
    } else if (props.character.house === 'Slytherin') {
      if (props.character.gender === 'female') {
        return defaultSlytherinF;
      } else {
        return defaultSlytherinM;
      }
    } else {
      return defaultGryffindorF;
    }
  };

  const image =
    props.character.image === '' ? imageDefault() : props.character.image;

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
    <Link
      to={`${props.character.house.toLowerCase()}/character/${
        props.character.id
      }`}
      className="character__link"
    >
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
    image: defaultGryffindorF,
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
