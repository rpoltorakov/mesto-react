import api from '../utils/Api'
import React from 'react'
import Card from './Card'

export default function Main(props) {

  const [userName, setUserName] = React.useState('Жак-Ив Кусто')
  const [userDescription, setUserDescription] = React.useState('Путешественник')
  const [userAvatar, setUserAvatar] = React.useState('#')
  const [cards, setCards] = React.useState([])

  React.useEffect(() => {
    api.getUserData()
      .then(res => {
      setUserName(res.name)
      setUserDescription(res.about)
      setUserAvatar(res.avatar)
    }).catch(error => {
      console.error(error)
    })

    api.getInitialCards()
      .then(res => {
        setCards(res)
      })
      .catch(error => {
        console.error(error)
      })
    return () => {}
  }, [])
  
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-profile">
          <div className="profile__avatar-wrapper">
            <img src={userAvatar} alt="Аватар" className="profile__avatar" onClick={props.onEditAvatar} />
          </div>
        </div>
        <href className="profile__profile-info">
          <div className="profile__title-container">
            <h1 className="profile__title">{userName}</h1> 
            <button className="profile__edit-button" type="button" aria-label="Редактировать профиль" onClick={props.onEditProfile}></button>
          </div>
          <p className="profile__subtitle">{userDescription}</p>
        </href>
        <button className="profile__add-button" type="button" aria-label="Добавить место" onClick={props.onAddPlace}></button>
      </section>

      <section className="cards">
        {
          cards.map((card) => (<Card key={card._id} name={card.name} link={card.link} likesNumber={card.likes.length} onCardClick={props.onCardClick} />))
        }
      </section>
    </main>
  )
}