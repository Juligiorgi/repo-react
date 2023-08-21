import React from 'react';
import{Button, Card} from 'react-bootstrap';
import {Link } from 'react-router-dom';

export const Item = ({producto}) => {
  return ( <div>
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={producto.imag} />
      <Card.Body>
        <Card.Title>{producto.name}</Card.Title>
        <Card>
          {producto.descripcion}
        </Card>
        <Card>
            ${producto.precio}
        </Card>
        <Card>
            Stock{producto.stock}
        </Card>
        <Button as={Link} to={`/item/${producto.id}`} variant="primary">Ver mas</Button>
      </Card.Body>
    </Card>
    </div>
  );
}
