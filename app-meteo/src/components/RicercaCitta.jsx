import { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Container } from "react-bootstrap";

const RicercaCitta = () => {
  const [citta, setCitta] = useState("");

  return (
    <Container className="text-center mt-4">
      <h2 className="sottotitolo-meteo">Controlla il Meteo</h2>
      <Form>
        <Form.Control
          type="text"
          value={citta}
          onChange={(e) => setCitta(e.target.value)}
          required
          placeholder="Inserisci una città..."
        />
        <Link to={`/dettaglio/${citta}`} className="btn btn-secondary mt-2">
          Cerca
        </Link>
      </Form>
    </Container>
  );
};

export default RicercaCitta;
