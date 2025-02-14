const MeteoAttuale = ({ meteo }) => {
  return (
    <div className="meteo-attuale-container">
      <h3>Meteo Attuale</h3>
      <p>Temperatura: {meteo.main.temp}°C</p>
      <p>Condizioni: {meteo.weather[0].description}</p>
    </div>
  );
};

export default MeteoAttuale;
