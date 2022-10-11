import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom';

const ItemDetail = ({ data }) => {

    const [goToCart, setGoToCart] = useState(false)
    const onAdd = (cantidad) => {
        setGoToCart(true)
    }

    return (
        
        <Card style={{ width: '70vw' }}>
            <Card.Img variant="top" src={data.picUrl} />
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                <Card.Text>
                    {data.description}
                </Card.Text>
                {
                    goToCart ? <Link to='/cart'>Finalizar compra</Link> : <ItemCount inicial={1} stock={5} onAdd={onAdd} />
                }
                
                <Button variant="primary">Ver</Button>
            </Card.Body>
        </Card>
        
    )
}

export default ItemDetail