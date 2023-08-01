import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-bootstrap-icons';

export const Item = ({producto}) => {
  return (
    <Card style={{ width: '18rem' }}>
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
  );
}
