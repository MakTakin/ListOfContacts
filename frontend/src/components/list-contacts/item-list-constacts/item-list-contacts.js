import React from 'react';
import './item-list-contacts.css'

function ItemListOfContacts(props) {

    const Items = props.listContacts.map(item => {
        return (
            <div className='item-list' key={item.id}>
                <div> {item.name}
                    <button className='item-btn'
                            onClick={() => props.deleteContact(item.id)}
                    >
                    <span className="material-icons">
                        clear
                    </span>
                    </button>
                </div>
                <div>{item.tel}</div>
            </div>
        )
    })

    return (
        <div>
            {Items}
        </div>
    )
}

export default ItemListOfContacts;