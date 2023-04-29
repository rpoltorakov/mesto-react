import deleteLogoPath from '../images/trash.svg'

export default function Card(props) {

  function handleClick() {
    props.onCardClick(props)
  }

  return (
    <div className="card">
      <img src={props.link} alt={props.name} className="card__image" onClick={handleClick} />
      <div className="card__title">
        <h3 className="card__title-text">{props.name}</h3>
        <div className="card__like-container">
          <button className="card__like-button" type="button" aria-label="Лайк"></button>
          <p className="card__likes">{props.likesNumber}</p>
        </div>
      </div>
      <img src={deleteLogoPath} alt="Удалить" className="card__delete-button" />
    </div>
  )
}