import logo from '../images/logo-icon.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Link to="/">
      <header className="header">
        <img className="header__img" src={logo} alt="" />
        <h1 className="header__title">Buscador Harry Potter</h1>
      </header>
    </Link>
  );
};

export default Header;
