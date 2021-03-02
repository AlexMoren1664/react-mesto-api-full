import React from "react";
import PopupWithForm from "./PopupWithForm";
import { useRef } from "react";

function EditAvatarPopup(props) {
  const inputRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      link: inputRef.current.value,
    });
  }

  return (
    <PopupWithForm
      onSubmit={handleSubmit}
      isOpen={props.isOpen}
      onClose={props.onClose}
      name="avatar"
      title="Обновить аватар" >
          <input
            id="avatar-input"
            name="link"
            type="url"
            placeholder="Ссылка на картинку"
            className="popup__input popup__input_type_avatar"
            required
            autoComplete="off"
            ref={inputRef}
          />
          <span className="popup__error" id="link-error" />
    </PopupWithForm>
  );
}
export default EditAvatarPopup;
