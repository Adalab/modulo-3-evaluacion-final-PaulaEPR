import shieldGryffindor from '../images/gryffindor.svg';
import shieldHufflepuff from '../images/hufflepuff.svg';
import shieldRavenclaw from '../images/ravenclaw.svg';
import shieldSlytherin from '../images/slytherin.svg';
import defaultGryffindorF from '../images/default/default_gryffindor_f.jpg';
import defaultHufflepuffF from '../images/default/default_hufflepuff_f.jpg';
import defaultRavenclawF from '../images/default/default_ravenclaw_f.jpg';
import defaultSlytherinF from '../images/default/default_slytherin_f.jpg';
import defaultGryffindorM from '../images/default/default_gryffindor_m.jpg';
import defaultHufflepuffM from '../images/default/default_hufflepuff_m.jpg';
import defaultRavenclawM from '../images/default/default_ravenclaw_m.jpg';
import defaultSlytherinM from '../images/default/default_slytherin_m.jpg';
import back from '../images/icon/back.svg';
import aliveIcon from '../images/icon/alive.svg';
import deadIcon from '../images/icon/dead.svg';
import '../styles/components/CharacterDetail.scss';
import PropTypes from 'prop-types';

const handleBackBtn = () => {
  window.history.back();
};

const CharacterDetail = (props) => {
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

  const alternateNames = props.character.alternate_names.map((name, index) => {
    return (
      <span className="divider" key={index}>
        {name}
      </span>
    );
  });

  const showAltNames = () => {
    if (props.character.alternate_names.length !== 0)
      return (
        <li>
          <strong class="block">Otros nombres: </strong>
          {alternateNames}
        </li>
      );
  };

  const shield = () => {
    if (props.character.house === 'Gryffindor') {
      return shieldGryffindor;
    } else if (props.character.house === 'Hufflepuff') {
      return shieldHufflepuff;
    } else if (props.character.house === 'Ravenclaw') {
      return shieldRavenclaw;
    } else if (props.character.house === 'Slytherin') {
      return shieldSlytherin;
    } else {
      return shieldGryffindor;
    }
  };

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

  const alive = () => {
    if (props.character.alive === 'No encontrado') {
      return 'No encontrado';
    } else if (props.character.gender === 'female') {
      if (props.character.alive) {
        return 'Viva';
      } else {
        return 'Muerta';
      }
    } else if (props.character.gender === 'male') {
      if (props.character.alive) {
        return 'Vivo';
      } else {
        return 'Muerto';
      }
    }
  };

  const status = () => {
    if (props.character.alive !== 'No encontrado') {
      if (props.character.alive) {
        return <img className="icon" src={aliveIcon} alt="Icono vivo" />;
      } else {
        return <img className="icon" src={deadIcon} alt="Icono muerto" />;
      }
    }
  };

  const gender = () => {
    if (props.character.gender === 'No encontrado') {
      return 'No encontrado';
    } else if (props.character.gender === 'female') {
      return 'Mujer';
    } else {
      return 'Hombre';
    }
  };

  return (
    <article
      className={`detail ${props.character.house
        .toLowerCase()
        .replace(' ', '_')}`}
    >
      <header className={`detail__header bottom`}>
        <div className="detail__shield">
          <img
            src={shield()}
            alt={`Escudo de ${props.character.house}`}
            className="detail__shield--img"
          />
        </div>
        <h2 className="detail__name">{props.character.name}</h2>
        <button className="detail__back" onClick={handleBackBtn}>
          Volver
          <img
            src={back}
            alt="Volver al inicio"
            className="detail__back--img"
          />
        </button>
      </header>
      <main className="detail__main">
        <img
          src={image}
          alt=""
          className={`detail__image ${props.character.house
            .toLowerCase()
            .replace(' ', '_')}`}
        />
        <ul className="detail__info">
          <li className="detail__info--item">
            <strong>Casa:</strong> {props.character.house}
          </li>
          <li className="detail__info--item">
            <strong>Estatus: </strong>
            {alive()}
            {status()}
          </li>
          <li className="detail__info--item">
            <strong>Especie: </strong>
            {species()}
          </li>
          <li className="detail__info--item">
            <strong>Género: </strong>
            {gender()}
          </li>
          {showAltNames()}
        </ul>
      </main>
    </article>
  );
};

CharacterDetail.defaultProps = {
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

CharacterDetail.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  species: PropTypes.string,
  alive: PropTypes.bool,
  gender: PropTypes.string,
  house: PropTypes.string,
  alternate_names: PropTypes.array,
  id: PropTypes.string,
};

export default CharacterDetail;
