import React from 'react';
import './contactsCard.scss';

const ContactsCard = () => {
  return (
    <div className='contactsCard'>
      <div className='contactsCard__row'>
        <div className='contactsCard__label'>Name:</div>
        <div className='contactsCard__data'>Andrei Dergavko</div>
      </div>
      <div className='contactsCard__row'>
        <div className='contactsCard__label'>Date of birth:</div>
        <div className='contactsCard__data'>18 Nov 1994</div>
      </div>
      <div className='contactsCard__row'>
        <div className='contactsCard__label'>Email:</div>
        <div className='contactsCard__data'>andrejdergavko@gmail.com</div>
      </div>
      <div className='contactsCard__row'>
        <div className='contactsCard__label'>Phone:</div>
        <div className='contactsCard__data'>+375 33 3214403</div>
      </div>
      <div className='contactsCard__row'>
        <div className='contactsCard__label'>City:</div>
        <div className='contactsCard__data'>Grodno, Belarus</div>
      </div>
    </div>
  );
};

export default ContactsCard;