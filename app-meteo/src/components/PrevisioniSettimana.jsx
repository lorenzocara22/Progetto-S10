import { useState } from "react";
import "../App.css";

const PrevisioniSettimana = ({ previsioni }) => {
  const [indiceGiorno, setIndiceGiorno] = useState(0);

  let giorniDisponibili = [];
  for (let i = 0; i < previsioni.length; i++) {
    let data = previsioni[i].dt_txt.split(" ")[0];
    if (!giorniDisponibili.includes(data)) {
      giorniDisponibili.push(data);
    }
  }

  let previsioniGiornoCorrente = [];
  for (let i = 0; i < previsioni.length; i++) {
    if (previsioni[i].dt_txt.includes(giorniDisponibili[indiceGiorno])) {
      previsioniGiornoCorrente.push(previsioni[i]);
    }
  }

  return (
    <div className="previsioni-container">
      <h3>{giorniDisponibili[indiceGiorno]}</h3>
      {previsioniGiornoCorrente.map((item, index) => {
        const iconCode = item.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

        return (
          <p key={index}>
            {item.dt_txt.split(" ")[1]} {item.main.temp}°C{" "}
            <img src={iconUrl} alt={item.weather[0].description} width="50" />
          </p>
        );
      })}

      <button
        className="btn btn-light mt-4"
        onClick={() =>
          setIndiceGiorno((prev) =>
            prev + 1 >= giorniDisponibili.length ? 0 : prev + 1
          )
        }
      >
        Visualizza giorno successivo
      </button>
    </div>
  );
};

export default PrevisioniSettimana;
