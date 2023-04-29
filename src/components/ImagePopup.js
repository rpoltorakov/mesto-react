export default function ImagePopup(props) {
  console.log('props in imagepopup', props)
  return (
    <div className={`popup popup_target_image ${props.card.isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__image-container">
        <img className="popup__image" src={props.card.link} alt={props.card.name}/>
        <p className="popup__subtitle">{props.card.name}</p>
        <button type="button" onClick={props.onClose} className="popup__close-button popup__close-button_target_image" aria-label="Закрыть"> </button>
      </div>
    </div>
  )
}