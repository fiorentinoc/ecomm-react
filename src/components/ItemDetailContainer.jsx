import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'

const producto = { id: "0001", cat: "guitarras", title: "Guitarra Fender", description: "la mejor remera del mercado.", price: "5000", picUrl: "https://img.freepik.com/foto-gratis/planeta-ficticio-cielo-nocturno-colorido-estrellas-nebulosa_1048-7926.jpg?w=2000&t=st=1665096764~exp=1665097364~hmac=e67fcc66ba055d94e6d96562140cdbd0d03da851bdd9b5df4ab91c1d936b52ee" }

const ItemDetailContainer = () => {

    const [data, setData] = useState({})

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(producto)
            }, 3000)
        })
        
        getData.then(res => setData(res))
        
    }, [])
    

    return (
        <>
            <h2>ItemDetailContainer</h2>
            <ItemDetail data={data} />
        </>
    )
}

export default ItemDetailContainer