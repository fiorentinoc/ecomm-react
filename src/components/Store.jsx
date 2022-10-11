import React from 'react'
import ItemDetailContainer from './ItemDetailContainer'
import ItemListContainer from './ItemListContainer'

const Store = () => {
  return (
    <div>
        <h1>Catálogo</h1>
        <ItemListContainer greeting='Hola Mundo!!!'/>
        <hr />
        <ItemDetailContainer />
    </div>
  )
}

export default Store