import shieldGryffindor from '../images/gryffindor.svg';
import shieldHufflepuff from '../images/hufflepuff.svg';
import shieldRavenclaw from '../images/ravenclaw.svg';
import shieldSlytherin from '../images/slytherin.svg';
import back from '../images/back.svg';
import defaultImage from '../images/default_image.jpg';
import aliveIcon from '../images/alive.svg';
import deadIcon from '../images/dead.svg';
import '../styles/components/CharacterDetail.scss';

const handleBackBtn = () => {
  window.history.back();
};

const CharacterDetail = (props) => {
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

  const charImage = () => {
    if (props.character.image !== '') {
      return props.character.image;
    } else {
      return defaultImage;
    }
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
    } else if (!props.character.alive) {
      return 'Muerto'
    } else {
      return 'Vivo'
    }
  };

  const status = () => {
    if (props.character.alive !== 'No encontrado') {
      if (!props.character.alive) {
      return (
        <img className="icon" src={deadIcon} alt="Icono muerto" />
      )
      } else {
      return (
        <img className="icon" src={aliveIcon} alt="Icono vivo" />
      )
      }
    }
  }

  const gender = () => {
    if (props.character.gender === 'No encontrado') {
      return 'No encontrado';
    } else if (props.character.gender === 'female') {
      return 'Mujer'
    } else {
      return 'Hombre'
    }
  }
  
  return (
    <div className="detail__wrapper">
      <article className={`detail ${props.character.house.toLowerCase()}`}>
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
          <img src={charImage()} alt="" className={`detail__image ${props.character.house.toLowerCase()}`}/>
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
              <strong>Especie: </strong>{species()}
            </li>
            <li className="detail__info--item">
              <strong>Género: </strong>
              {gender()}
            </li>
            {showAltNames()}
          </ul>
        </main>
      </article>
    </div>
  );
};

CharacterDetail.defaultProps = {
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

export default CharacterDetail;
