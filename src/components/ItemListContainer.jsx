import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = (props) => {

    const onAdd = (cantidad) => {
        console.log(`Compraste ${cantidad} unidades`)
    }

    return (
        <div>
            <h2>ItemListContainer</h2>
            <p>Esta es la prop greeting: {props.greeting}</p>
            <hr />
            <ItemCount inicial={1} stock={5} onAdd={onAdd} />
        </div>
    )
}

export default ItemListContainer