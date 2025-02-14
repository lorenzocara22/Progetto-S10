import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import MeteoAttuale from "../components/MeteoAttuale";
import PrevisioniSettimana from "../components/PrevisioniSettimana";

const DettaglioMeteo = () => {
  const { citta } = useParams();
  const [meteo, setMeteo] = useState(null);
  const [previsioni, setPrevisioni] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${citta}&appid=0119798b252678170fad892cce88ffbb&units=metric&lang=it`
    )
      .then((response) => response.json())
      .then((data) => setMeteo(data))
      .catch((error) => console.log("Errore:", error));

    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${citta}&appid=0119798b252678170fad892cce88ffbb&units=metric&lang=it`
    )
      .then((response) => response.json())
      .then((data) => setPrevisioni(data.list))
      .catch((error) => console.log("Errore:", error));
  }, [citta]);

  return (
    <Container className="mt-4 text-center">
      <h2 className="titolo-citta">Meteo a {citta}</h2>

      {meteo && <MeteoAttuale meteo={meteo} />}

      <h3 className="titolo-previsioni">Previsioni per i prossimi giorni</h3>

      {previsioni && <PrevisioniSettimana previsioni={previsioni} />}

      <Link to="/" className="btn btn-secondary mt-4">
        Torna alla Home
      </Link>
    </Container>
  );
};

export default DettaglioMeteo;
