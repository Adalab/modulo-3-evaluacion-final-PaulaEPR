import defaultImage from '../images/default_image.jpg';

const CharacterCard = (props) => {
  const image = props.character.image === '' ? defaultImage : props.character.image;
  return (
    <>
    <img className="character__image" src={image} alt="" />
    <h3 className="character__name">{props.character.name}</h3>
    <p className="character__species">{props.character.species}</p>
    </>
  );
}

export default CharacterCard