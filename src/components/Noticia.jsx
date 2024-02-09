import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const Noticia = () => {
  return (
    <Card>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Subtitle className="mb-3">Nombre diario</Card.Subtitle>

        <Card.Title>Titulo noticia</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>

      <Card.Footer className="text-center">
        <Button>Ver noticias completas</Button>
      </Card.Footer>
    </Card>
  );
};

export default Noticia;
