import shieldGryffindor from '../images/gryffindor.svg';
import shieldHufflepuff from '../images/hufflepuff.svg';
import shieldRavenclaw from '../images/ravenclaw.svg';
import shieldSlytherin from '../images/slytherin.svg';
import back from '../images/back.svg';
import defaultImage from '../images/default_image.jpg';

const CharacterDetail = (props) => {
  const alternateNames = props.character.alternate_names.map((name, index) => {
    return (
      <span className ="divider" key={index}>{name}</span>
    )
  });

  const showAltNames = () => {
    if (props.character.alternate_names.length !== 0)
    return (
      <li>
        <strong>Nombres alternativos: </strong>
        {alternateNames}
      </li>
    )
  }

  const charImage = () => {
    if (props.character.image !== "") {
      return props.character.image
    } else {
      return defaultImage
    }
  }

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
      return props.character.house;
    }
  }

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
    <article className="detail">
      <header className="detail__header">
        <div className="detail__shield">
          <img src={shield()} alt={`Escudo de ${props.character.house}`} className="detail__shield--img" />
          <h4 className="detail_shield--title">{props.character.house}</h4>
        </div>
        <h2 className="detail__name">{props.character.name}</h2>

        <a href="/" className="detail__back">
          Volver
          <img
            src={back}
            alt="Volver al inicio"
            className="detail__back--img"
          />
        </a>
      </header>
      <main className="detail__main">
        <img
          src={charImage()}
          alt=""
          className="detail__image"
        />
        <ul className="detail__info">
          <li className="detail__info--item">
            <strong>Estatus:</strong> {(props.character.alive) ? "Vivo": "Muerto"}
          </li>
          <li className="detail__info--item">
            <strong>Especie:</strong> {species()}
          </li>
          <li className="detail__info--item">
            <strong>Género:</strong> {(props.character.gender === 'female' ? "Mujer" : "Hombre")}
          </li>
          {showAltNames()}
        </ul>
      </main>
    </article>
  );
};

export default CharacterDetail;
