import React from "react";

function infoTooltip(props) {
  const { image, message } = props.hint;
  return (
    <div className={`popup popup_type_hint ${props.isOpen && "popup_open"}`}>
      <div className={`popup__form popup__form_type_hint`}>
        <button
          type="button"
          className="popup__close popup__close_type_hint"
          onClick={props.onClose}
        />
        <img
          className="popup__img popup__img_type_hint"
          src={image}
          alt={message}
        ></img>
        <p className="popup__title popup__title_type_hint">{message}</p>
      </div>
    </div>
  );
}

export default infoTooltip;
