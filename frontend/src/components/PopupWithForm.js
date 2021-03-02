function PopupWithForm(props) {
  return (
    <>
      <div
        className={`popup popup_type_${props.name} ${
          props.isOpen && "popup_open"
        }`}
      >
        <form
          action="#"
          className={`popup__form popup__form_${props.name}`}
          name="form-profile"
          method="POST"
          noValidate
          onSubmit={props.onSubmit}
        >
          <button
            type="button"
            className="popup__close popup__close_type_profile"
            onClick={props.onClose}
          />
          <h2 className="popup__title">{props.title}</h2>
          {props.children}
          <button
            type="submit"
            className="popup__button popup__button_type_profile"
            // disabled
          >
            Сохранить
          </button>
        </form>
      </div>
    </>
  );
}
export default PopupWithForm;
