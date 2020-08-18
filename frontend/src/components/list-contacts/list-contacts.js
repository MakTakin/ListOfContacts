import React from 'react';
import './list-contacts.css'
import ItemListOfContacts from "./item-list-constacts/item-list-contacts";

function ListOfContacts(props) {
    return (
        <div className="list">
            <div className='list-header'>Список контактов</div>
            <ItemListOfContacts
                listContacts={props.listContacts}
                deleteContact={props.deleteContact}
            />
        </div>
    )
}
export default ListOfContacts;