import Card from "react-bootstrap/Card";

function WelcomShop() {
  return (
    <div>
      <Card>
        <Card.Img
          variant="top"
          src="https://cdn.pixabay.com/photo/2020/03/24/19/52/books-4965334_960_720.jpg"
        />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Card>
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" src="holder.js/100px180" />
      </Card>
    </div>
  );
}

export default WelcomShop;
