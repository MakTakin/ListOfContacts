import React, {useEffect, useState, useCallback} from 'react';
import './App.css'
import ListOfContacts from "./components/list-contacts/list-contacts";
import AddContacts from "./components/add-contacts/add-contacts";
import {SERVER_URL} from "./settings/config";

function App() {
    const [listContacts, setListContacts] = useState([])
    const [submit, setSubmit] = useState(false)

    const doFetch = useCallback(() => {
        console.log('change 1')
        fetch(`${SERVER_URL}/contacts/get/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
        }).then(response => {
            if (response.ok) {
                return response.json()
            }
        }).then(data => {
            setListContacts(data)
        })
    }, [])

    useEffect(() => {
        doFetch()
    }, [doFetch, submit])

    const deleteContact = useCallback((id) => {
        fetch(`${SERVER_URL}/contacts/delete/`, {
            method: 'POST',
            body: JSON.stringify({id}),
            headers: {'Content-Type': 'application/json'}
        }).then(response => {
            if (response.ok) {
                const contact = [...listContacts]
                setListContacts(contact.filter(item => item.id !== id))
            }
        })
    }, [listContacts])

    return (
        <div className="container">
            <AddContacts
                submit={submit}
                setSubmit={setSubmit}
            />
            <ListOfContacts
                listContacts={listContacts}
                deleteContact={deleteContact}
            />
        </div>
    )
}

export default App;
