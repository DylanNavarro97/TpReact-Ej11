import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ListaNoticias from "./components/ListaNoticias";
import Formulario from "./components/Formulario";
import { Container } from "react-bootstrap";
import Titulo from "./components/Titulo";
import { useEffect, useState } from "react";

function App() {
  const [categoria, setCategoria] = useState("business");
  const [noticias, setNoticias] = useState([{}])

  const EndpointURL = `https://newsdata.io/api/1/news?apikey=pub_379223663507d1fe03aad4aefa259cec88c00&category=${categoria}&language=en`;

  const handleChange = (e) => {
    setCategoria(e.target.value);
  };

  const realizarFetch = async () => {
    try {
      const respuesta = await fetch(EndpointURL);
      const datos = await respuesta.json();
      setNoticias(datos)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    realizarFetch();
  }, [categoria]);

  return (
    <>
      <Titulo />
      <Container className="py-5">
        <Formulario handleChange={handleChange} />
        <ListaNoticias noticias={noticias}/>
      </Container>
    </>
  );
}

export default App;
