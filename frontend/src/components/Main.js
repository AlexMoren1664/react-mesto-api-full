import React from "react";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import Header from "./Header";
import { Link } from "react-router-dom";

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <>
      <Header
        link={
          <Link
            to="#"
            className="header__login"
            onClick={props.signOut}
            style={{ color: "#A9A9A9" }}
          >
            Выйти
          </Link>
        }
        userData={props.userData}
      />
      <main className="content">
        <section className="profile">
          <div className="profile__avatar">
            <img
              src={currentUser.avatar}
              alt="Кусто"
              className="profile__img"
            />
            <div className="profile__cover">
              <button
                type="button"
                className="profile__button"
                onClick={props.onEditAvatar}
              />
            </div>
          </div>
          <div className="profile__info">
            <div className="profile__container">
              <h2 className="profile__name">{currentUser.name}</h2>
              <button
                type="button"
                className=" profile__edit-button"
                onClick={props.onEditProfile}
              />
            </div>
            <h3 className="profile__job">{currentUser.about}</h3>
          </div>
          <button
            type="button"
            className=" profile__add-button"
            onClick={props.onAddPlace}
          />
        </section>
        <section className="cards">
          <ul className="card">
            {props.cards.map((data) => {
              return (
                <Card
                  likes={data.likes}
                  name={data.name}
                  src={data.link}
                  key={data._id}
                  onCardClick={props.onCardClick}
                  onCardLike={props.onCardLike}
                  onCardDelete={props.onCardDelete}
                  card={data}
                  _id={data._id}
                  //
                />
              );
            })}
          </ul>
        </section>
      </main>
    </>
  );
}
export default Main;
