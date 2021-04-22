import React, { useReducer } from 'react'
import axios from 'axios'

export const contactContext = React.createContext();

const INIT_STATE = {
    contactsData: [],
    contactDetails: {}
}


const ContactContextProvider = ({children}) => {
    const reducer = (state=INIT_STATE, action) => {
        switch (action.type){
            case "GET_CONTACTS":
                return {...state, contactsData: action.payload}
            case "GET_CONTACT_DETAILS":
                return {...state, contactDetails: action.payload}
            default: return state
                }
            }
            
            async function getContacts() {
                let { data } = await axios.get(`http://localhost:8000/contacts${window.location.search}`)
                dispatch(
                    {
                        type: "GET_CONTACTS",
                        payload: data
                    }
                    )
                }
                
                function postNewContact(newContact) {
                    axios.post(`http://localhost:8000/contacts`, newContact)
                    getContacts()
                }
                
                async function deleteContact(id) {
                    await axios.delete(`http://localhost:8000/contacts/${id}`)
                    getContacts()
                }
                
                async function getContactDetails(id){
                    let { data } = await axios.get(`http://localhost:8000/contacts/${id}`)
                    dispatch(
                        {
                            type: "GET_CONTACT_DETAILS",
                            payload: data
                        }
                    )
                }

                async function editContact(contact, id) {
                    await axios.patch(`http://localhost:8000/contacts/${id}`, contact)
                    getContacts()
                }
        
        const [state, dispatch] = useReducer(reducer, INIT_STATE)

        return (
            <contactContext.Provider
            value={
                {
                    contactsData: state.contactsData,
                    contactDetails: state.contactDetails,
                    postNewContact,
                    deleteContact,
                    getContacts,
                    getContactDetails,
                    editContact
                }
            }>
            {children}
        </contactContext.Provider>
    )
}

export default ContactContextProvider;