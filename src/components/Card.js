import deleteLogoPath from '../images/trash.svg'

export default function Card({card, onCardClick}) {

  function handleClick() {
    onCardClick({
      link: card.link,
      name: card.name
    })
  }

  return (
    <div className="card">
      <img src={card.link} alt={card.name} className="card__image" onClick={handleClick} />
      <div className="card__title">
        <h3 className="card__title-text">{card.name}</h3>
        <div className="card__like-container">
          <button className="card__like-button" type="button" aria-label="Лайк"></button>
          <p className="card__likes">{card.likes.length}</p>
        </div>
      </div>
      <img src={deleteLogoPath} alt="Удалить" className="card__delete-button" />
    </div>
  )
}