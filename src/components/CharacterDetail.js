import shield from '../images/gryffindor.svg';
import back from '../images/back.svg';
const CharacterDetail = () => {
  return (
    <article className="detail">
      <header className="detail__header">
        <div className="detail__shield">
          <img src={shield} alt="gryffindor" className="detail__shield--img" />
          <h4 className="detail_shield--title">Gryffindor</h4>
        </div>
        <h2 className="detail__name">Harry Potter</h2>

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
          src="http://hp-api.herokuapp.com/images/harry.jpg"
          alt=""
          className="detail__image"
        />
        <ul className="detail__info">
          <li className="detail__info--item">
            <strong>Estatus:</strong> Vivo
          </li>
          <li className="detail__info--item">
            <strong>Especie:</strong> Humano
          </li>
          <li className="detail__info--item">
            <strong>Género:</strong> Hombre
          </li>
          <li className="detail__info--item">
            <strong>Nombres alternativos:</strong> Pepito el cicatrices
          </li>
        </ul>
      </main>
    </article>
  );
};

export default CharacterDetail;
