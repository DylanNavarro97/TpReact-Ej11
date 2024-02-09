import React from "react";
import { Container } from "react-bootstrap";
import Noticia from "./Noticia";

const ListaNoticias = ({ noticas }) => {
  return (
    <Container fluid>
      <div className="row">
        {noticas?.map((noticia) => (
          <div className="col-md-6 col-lg-3 mb-4">
            <Noticia notica={noticia}/>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ListaNoticias;
