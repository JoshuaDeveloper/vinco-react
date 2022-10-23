import React from "react";
import { Card, Button } from "react-bootstrap";

function GameCard({ title, image, description, genre }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
          {genre}
        </Card.Text>
        <Button variant="primary">Add to Favorites</Button>
      </Card.Body>
    </Card>
  );
}

export default GameCard;
