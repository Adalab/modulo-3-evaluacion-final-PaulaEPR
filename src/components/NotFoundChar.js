import defaultImage from '../images/default/default_gryffindor_f.jpg';

const CharacterCard = () => {
  return (
    <ul className="character">
      <li className="character__item character__item--not-found">
        <div className="character__link">
          <img className="character__image" src={defaultImage} alt="" />
          <div className="character__info">
            <p className="character__name">Personaje no encontrado</p>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default CharacterCard;
