import React from 'react'
import { useEffect } from 'react';
import useGlobalReducer from '../hooks/useGlobalReducer'
import UserContactCard from './UserContactCard';

const ContactList = () => {
    const {store, dispatch} = useGlobalReducer(); 

    useEffect(() =>{
        const loadContacts = async () =>{
            try {
                const request = await fetch('https://playground.4geeks.com/contact/agendas/RdeR/contacts',{
                    method: 'GET',
                    headers: {
                        accept: 'application/json'
                    }
                })
                if(!request.ok){
                    throw new Error(`Error en el request ${request.status} - ${request.statusText}`)
                }
                const data = await request.json(); 
                console.log(data)
                dispatch({type:'SET_CONTACTS', payload: data.contacts})
            } catch (error) {
                console.error('Error: ', error)
            }
        }
        loadContacts()
    },[dispatch])

  return (
    store.contacts && store.contacts.length > 0 ? (
        <ul className="text-center list-group">
            {store.contacts?.map((contact) => (
                <UserContactCard key={contact.id} contact={contact}/>  
            ))}
        </ul>) :(
            <h2> Aún no hay contactos</h2>
        )
    
  )
}

export default ContactList