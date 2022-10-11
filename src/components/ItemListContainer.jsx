import React, {useEffect, useState} from 'react'
import ItemCount from './ItemCount'
import Item from './Item';
import ItemList from './ItemList';

const productos = [
    { id: "0001", cat: "guitarras", title: "Guitarra Fender", description: "la mejor remera del mercado.", price: "5000", picUrl: "https://img.freepik.com/foto-gratis/planeta-ficticio-cielo-nocturno-colorido-estrellas-nebulosa_1048-7926.jpg?w=2000&t=st=1665096764~exp=1665097364~hmac=e67fcc66ba055d94e6d96562140cdbd0d03da851bdd9b5df4ab91c1d936b52ee" },
    { id: "0002", cat: "viento", title: "Trompeta Elephant", description: "The best of the world.", price: "8000", picUrl: "https://img.freepik.com/foto-gratis/planeta-ficticio-cielo-nocturno-colorido-estrellas-nebulosa_1048-7926.jpg?w=2000&t=st=1665096764~exp=1665097364~hmac=e67fcc66ba055d94e6d96562140cdbd0d03da851bdd9b5df4ab91c1d936b52ee" },
    { id: "0003", cat: "percusion", title: "Bateria Boom", description: "Sin dudas la mejor.", price: "10000", picUrl: "https://img.freepik.com/foto-gratis/planeta-ficticio-cielo-nocturno-colorido-estrellas-nebulosa_1048-7926.jpg?w=2000&t=st=1665096764~exp=1665097364~hmac=e67fcc66ba055d94e6d96562140cdbd0d03da851bdd9b5df4ab91c1d936b52ee" },
];

const ItemListContainer = (props) => {
    const [data, setData] = useState([])

    useEffect(() => {
      const getData = new Promise(resolve => {
        setTimeout(() => {
            resolve(productos)
        }, 3000);
      })
      getData.then(res => setData(res))
          
    }, [])
    

    const onAdd = (cantidad) => {
        console.log(`Compraste ${cantidad} unidades`)
    }

    return (
        <div>
            <h2>ItemListContainer</h2>
            <p>Esta es la prop greeting: {props.greeting}</p>
            
            <ItemList data={data} />
            <hr />
            <ItemCount inicial={1} stock={5} onAdd={onAdd} />
        </div>
    )
}

export default ItemListContainer