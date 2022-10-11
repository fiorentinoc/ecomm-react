import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemDetail = ({ data }) => {
  return (
    
        <Card style={{ width: '70vw' }}>
            <Card.Img variant="top" src={data.picUrl} />
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                <Card.Text>
                    {data.description}
                </Card.Text>
                <Button variant="primary">Ver</Button>
            </Card.Body>
        </Card>
    
  )
}

export default ItemDetail