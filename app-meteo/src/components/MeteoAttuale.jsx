const MeteoAttuale = ({ meteo }) => {
  const iconCode = meteo.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  return (
    <div className="meteo-attuale-container">
      <h3>Meteo Attuale</h3>
      <p>Temperatura: {meteo.main.temp}°C</p>
      <p>
        <img src={iconUrl} alt={meteo.weather[0].description} width="50" />
      </p>
    </div>
  );
};

export default MeteoAttuale;
