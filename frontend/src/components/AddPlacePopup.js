import React from "react";
import PopupWithForm from "./PopupWithForm";
import { useState } from "react";

function AddPlacePopup(props) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("")

  function handleAddPlaceName(e) {
    setName(e.target.value)
  }
  function handleAddPlaceLink(e) {
    setLink(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlace({
      name,
      link
    });
    setName("");
    setLink("");
  }

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      name="add"
      title="Новое место" >

          <input
            id="title-input"
            name="name"
            type="text"
            placeholder="Название"
            className="popup__input popup__input_type_title"
            value={name}
            required
            minLength={1}
            maxLength={30}
            autoComplete="off"
            onChange= {handleAddPlaceName}
          />
          <span className="popup__error " id="name-error" />
          <input
            id="link-input"
            name="link"
            type="url"
            placeholder="Ссылка на картинку"
            className="popup__input popup__input_type_link"
            value={link}
            required
            autoComplete="off"
            onChange= {handleAddPlaceLink}
          />
          <span className="popup__error" id="link-error" />

    </PopupWithForm>
  );
}
export default AddPlacePopup;
