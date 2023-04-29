import './App.css';
import Header from './Header';
import Footer from './Footer'
import Main from './Main';
import React from 'react';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';


function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({link: '#', name: ''});
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false)

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }
  function handleCardClickShowPopup() {
    setIsImagePopupOpen(true)
  }
  function handleCardClickSetCard(props) {
    setSelectedCard({
      link: props.link,
      name: props.name
    })
  } 
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsImagePopupOpen(false)
  }

  return (
    <div className="page">
      <Header/>

      <Main 
        onEditProfile={handleEditProfileClick} 
        onEditAvatar={handleEditAvatarClick} 
        onAddPlace={handleAddPlaceClick} 
        onCardClickSetPopup={handleCardClickSetCard} 
        onCardClickShowPopup={handleCardClickShowPopup} 
      />
    
      <Footer />

      <PopupWithForm target="editProfile" title="Редактировать профиль" button="Сохранить" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <input name="editProfile-name" className="popup__input popup__input_target_profile-title" placeholder="Имя" required minLength="2" maxLength="40"/>
          <span className="popup__input-error" id="editProfile-name-error">Error</span>
        <input name="editProfile-about" className="popup__input popup__input_target_editProfile-subtitle" placeholder="О себе" required minLength="2" maxLength="200"/>
          <span className="popup__input-error" id="editProfile-about-error">Error</span>
      </PopupWithForm>

      <PopupWithForm target="addPlace" title="Новое место" button="Создать" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <input name="addPlace-name" className="popup__input popup__input_target_addPlace-title" placeholder="Название" required minLength="2" maxLength="40"/>
          <span className="popup__input-error" id="addPlace-name-error">Error</span>
        <input name="addPlace-link" type="url" minLength="2" maxLength="200" className="popup__input popup__input_target_addPlace-image" placeholder="Ссылка на картинку" required/>
          <span className="popup__input-error" id="addPlace-link-error">Error</span>
      </PopupWithForm>


      <PopupWithForm target="editAvatar" title="Обновить аватар" button="Сохранить" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <input name="editAvatar" className="popup__input popup__input_target_editAvatar" placeholder="Ссылка на картинку" type="url" required minLength="2" maxLength="200"/>
          <span className="popup__input-error" id="editAvatar-error">Error</span>
      </PopupWithForm>
      
      <ImagePopup card={selectedCard} onClose={closeAllPopups} isOpen={isImagePopupOpen} />
    </div>
  );
}

export default App;
