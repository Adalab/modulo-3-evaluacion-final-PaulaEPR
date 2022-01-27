import image404 from '../images/404.jpg';
import shield from '../images/gryffindor.svg';
import back from '../images/back.svg';

const NotFound = () => {
  return (
    <div className="detail__wrapper">
      <article className="detail">
        <header className="detail__header">
          <div className="detail__shield">
            <img
              src={shield}
              alt="Escudo de Gryffindor"
              className="detail__shield--img"
            />
          </div>
          <h2 className="detail__name">Página no encontrada</h2>
          <a className="detail__back" href="/">
            Volver
            <img
              src={back}
              alt="Volver al inicio"
              className="detail__back--img"
            />
          </a>
        </header>
        <main className="detail__main--404">
          <img src={image404} alt="" className="detail__image--404" />
        </main>
      </article>
    </div>
  );
};

export default NotFound;
