import React from "react";
import PopupWithForm from "./PopupWithForm";
import { useState } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function EditProfilePopup(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const currentUser = React.useContext(CurrentUserContext);

  function handleChangeName(event) {
    setName(event.target.value);
  }

  function handleChangeDescription(event) {
    setDescription(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.onUpdateUser({
      name,
      about: description,
    });
  }
  
  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  return (
    <PopupWithForm
      onSubmit={handleSubmit}
      isOpen={props.isOpen}
      onClose={props.onClose}
      name="edit"
      title="Редактировать профиль" >
        <>
          <input
            value={name || ""}
            onChange={handleChangeName}
            id="name-input"
            name="name"
            type="text"
            className="popup__input popup__input_type_name"
            placeholder="Имя"
            required
            minLength={2}
            maxLength={40}
            autoComplete="off"
          />
          <span className="popup__error" id="name-error" />
          <input
            value={description || ""}
            onChange={handleChangeDescription}
            id="about-input"
            name="about"
            type="text"
            className="popup__input popup__input_type_job"
            placeholder="О себе"
            required
            minLength={2}
            maxLength={40}
            autoComplete="off"
          />
          </>
          <span className="popup__error" id="about-error" />
   </PopupWithForm>
  );
}
export default EditProfilePopup;
