import React, {useState} from 'react';
import './add-contacts.css'
import {SERVER_URL} from "../../settings/config";
import MaskedInput from 'react-text-mask';

function AddContacts(props) {
    const [contacts, setContacts] = useState({
        name: "",
        tel: "",
    })
    const onChangeHandlers = (event) => {
        setContacts({
            ...contacts,
            [event.target.name]: event.target.value
        })
    }
    const saveContacts = () => {
        props.setSubmit(true)
        fetch(`${SERVER_URL}/contacts/save/`, {
            method: 'POST',
            body: JSON.stringify(contacts),
            headers: {'Content-Type': 'application/json'}
        }).then(response => {
            if (response.ok) {
                const contact = {...contacts}
                Object.keys(contact).forEach(name => contact[name] = "")
                props.setSubmit(false)
                setContacts(contact)
            }
        })
    }

    return (
        <div className="add">
            <div className='add-header'>
                Добавить контакт
            </div>
            <div className='add-flex'>
                <input
                    type="text"
                    placeholder="Имя"
                    name="name"
                    value={contacts.name}
                    onChange={(e) => onChangeHandlers(e)}/>
                <MaskedInput
                    mask={['+', '7', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]}
                    type="text"
                    placeholder="Телефон"
                    name="tel"
                    value={contacts.tel}
                    onChange={(e) => onChangeHandlers(e)}
                />
                <button
                    className="add-btn"
                    onClick={() => saveContacts()}
                    disabled={props.submit}
                >
                    Добавить
                </button>
            </div>
        </div>
    )
}

export default AddContacts;