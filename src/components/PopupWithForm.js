export default function PopupWithForm(props) {
  
  return (
    <div className={`popup  popup_target_${props.target} ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <button type="button" onClick={props.onClose} className={`popup__close-button popup__close-button_target_${props.target}`} aria-label="Закрыть"></button>
        <h2 className="popup__header">{props.title}</h2>
        <form className={`popup__form popup__form_target_${props.target}`} name={props.target} noValidate>
          {props.children}
          <button type="submit" className={`popup__save-button popup__save-button_${props.target}`}aria-label="Сохранить">{props.button}</button>
        </form>
        </div>
    </div>
  )
}