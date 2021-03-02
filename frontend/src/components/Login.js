import { useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

function Login({ onLogin }) {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  }
  function handleSubmit(evt) {
    evt.preventDefault();
    onLogin(data);
  }
  return (
    <>
      <Header
        link={
          <Link to="/sign-up" className="header__login">
            Регистрация
          </Link>
        }
      />
      <form
        className="popup__form popup__form_type_login"
        onSubmit={handleSubmit}
      >
        <h2 className="popup__title popup__title_type_login">Вход</h2>
        <input
          className="popup__input popup__input_type_login"
          name="email"
          value={data.email}
          onChange={handleChange}
          type="email"
          placeholder="Email"
          autoComplete="off"
          required
        />
        <input
          className="popup__input popup__input_type_login"
          name="password"
          value={data.password}
          onChange={handleChange}
          type="password"
          placeholder="Пароль"
          autoComplete="off"
          required
        />
        <button
          type="submit"
          className="popup__button popup__button_type_login"
        >
          Войти
        </button>
        <div className="popup__link"></div>
      </form>
    </>
  );
}
export default Login;
