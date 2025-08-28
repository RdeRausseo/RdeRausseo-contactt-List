import React from 'react'
import { useEffect } from 'react';
import useGlobalReducer from '../hooks/useGlobalReducer'
import UserContactCard from './UserContactCard';

const ContactList = () => {
    const {store, dispatch} = useGlobalReducer(); 


  return (
    <ul className="text-center list-group">
        {store.contacts?.map((contact) => (
            <li key={contact.id}> <UserContactCard contact={contact}/>  </li>
        ))}
    </ul>
  )
}

export default ContactList