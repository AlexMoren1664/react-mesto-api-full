import { useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

function Register({ onRegister }) {
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

  function handleSubmit(event) {
    event.preventDefault();
    onRegister(data);
  }

  return (
    <>
      <Header
        link={
          <Link to="/sign-in" className="header__login">
            Войти
          </Link>
        }
      />
      <form
        className="popup__form popup__form_type_login"
        onSubmit={handleSubmit}
      >
        <h2 className="popup__title popup__title_type_login">Регистрация</h2>
        <input
          className="popup__input popup__input_type_login"
          name="email"
          onChange={handleChange}
          value={data.email}
          type="email"
          placeholder="Email"
          required
        />
        <input
          className="popup__input popup__input_type_login"
          name="password"
          onChange={handleChange}
          value={data.password}
          type="password"
          placeholder="Пароль"
          required
        />
        <button
          type="submit"
          className="popup__button popup__button_type_login"
        >
          Войти
        </button>
        <Link className="popup__link" to="/sign-in">
          Уже зарегистрированы? Войти
        </Link>
      </form>
    </>
  );
}
export default Register;
