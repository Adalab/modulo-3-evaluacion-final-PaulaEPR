import logo from '../images/logo-icon.svg'

const Header = () => {
  return (
    <header className="header">
      <img className="header__img" src={logo} alt="" />
      <h1 className="header__title">Buscador Harry Potter</h1>
    </header>
  );
};

export default Header;
