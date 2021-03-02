import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function Card({
  src,
  name,
  likes,
  onCardClick,
  card,
  onCardLike,
  onCardDelete,
}) {
  const currentUser = React.useContext(CurrentUserContext);

  function handleClick() {
    onCardClick({
      src: src,
      name: name,
    });
  }

  function handleLikeClick() {
    onCardLike(card);
  }
  function handleDeleteClick() {
    onCardDelete(card);
  }
  const isOwn = card.owner === currentUser._id;

  const cardDeleteButtonClassName = `card__delete ${
    isOwn ? "card__delete_type_hidden" : ""
  }`;
  
  const isLiked = card.likes.some((i) => i === currentUser._id);

  const cardLikeButtonClassName = `card__like ${
    isLiked ? "card__like_active" : ""
  }`;

  return (
    <li className="card__grid">
      <img src={src} alt={name} className="card__img" onClick={handleClick} />
      <button
        type="button"
        className={cardDeleteButtonClassName}
        onClick={handleDeleteClick}
      />
      <div className="card__item">
        <h3 className="card__heading">{name}</h3>
        <div className="card__like-container">
          <button
            type="button"
            className={cardLikeButtonClassName}
            onClick={handleLikeClick}
          />
          <div className="card__counter">{likes.length}</div>
        </div>
      </div>
    </li>
  );
}
export default Card;
