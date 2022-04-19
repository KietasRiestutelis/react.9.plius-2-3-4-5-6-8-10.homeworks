import React from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useState } from "react";

function Likes() {
  const [like, setLike] = useState(0);
  const [hate, setHate] = useState(0);

  function resetAll(){
    setLike(0);
    setHate(0);
  }
 

  return (
    <div className="row">
      <div className="col-2">
        <h1> 2.</h1>
      </div>
      <div className="col-10">
        <Card style={{ width: "32rem" }}>
          <Card.Img
            variant="top"
            src="https://user-images.githubusercontent.com/47307889/116921331-826bbe80-ac5c-11eb-9f48-d8fbde144b04.png"
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button onClick={() => setLike(like + 1)} className="m-3" variant="success">Like {like}</Button>
            <Button onClick={() => setHate(hate + 1)} className="m-3" variant="danger">Hate {hate}</Button>
            <Button onClick={resetAll}  className="m-3" variant="primary">Reset</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Likes;
