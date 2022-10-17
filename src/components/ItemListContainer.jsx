import React, {useEffect, useState} from 'react'


import ItemList from './ItemList';

const productos = [
    { id: "0001", cat: "guitarras", title: "Guitarra Fender", description: "la mejor remera del mercado.", price: "5000", picUrl: "https://picsum.photos/600/400?random=1" },
    { id: "0002", cat: "viento", title: "Trompeta Elephant", description: "The best of the world.", price: "8000", picUrl: "https://picsum.photos/600/400?random=2" },
    { id: "0003", cat: "percusion", title: "Bateria Boom", description: "Sin dudas la mejor.", price: "10000", picUrl: "https://picsum.photos/600/400?random=3" },
];

const ItemListContainer = (props) => {
    
    const [data, setData] = useState([])

    console.log(data)

    useEffect(() => {
        const URL = "../data.json"
        setTimeout(() => {
            fetch(URL)
                .then((res) => res.json())
                .then((data) => setData(data.data))
                .catch((err) => console.log(err))
        }, 3000);
    }, [data])

    return (
        data.length 
        ? <div>
            <h2>ItemListContainer</h2>
            <p>Esta es la prop greeting: {props.greeting}</p>
            
            <ItemList data={data} />
            <hr />
            
        </div>
        : <h2>Cargando...</h2>
    )
}

export default ItemListContainer