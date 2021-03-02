import logo from "../logo.svg";

function Header(props) {
  return (
    <header className="header">
      <img src={logo} alt="Лого Место" className="header__logo" />
      <div className="header__container">
        <p className="header__user">{props.userData}</p>
        {props.link}
      </div>
    </header>
  );
}
export default Header;
