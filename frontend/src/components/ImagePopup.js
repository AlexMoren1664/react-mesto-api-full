function ImagePopup(props) {
    return (
      <>
        <div
          className={`popup popup_type_${props.name} ${
            props.card.src  && "popup_open"
          }`}
        >
          <div className="popup__content">
            <button
              type="button"
              className="popup__close popup__close_type_img"
              onClick={props.onClose}
            />
            <figure>
              <img
                className="popup__img"
                src={props.card.src}
                alt={props.card.name}
              />
              <figcaption className="popup__img-title">
                {props.card.name}
              </figcaption>
            </figure>
          </div>
        </div>
      </>
    );
  }
  export default ImagePopup;
  