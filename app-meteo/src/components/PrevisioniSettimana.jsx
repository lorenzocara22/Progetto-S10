import { useState } from "react";

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
      <h3>Previsioni per il {giorniDisponibili[indiceGiorno]}</h3>
      {previsioniGiornoCorrente.map((item, index) => (
        <p key={index}>
          {item.dt_txt.split(" ")[1]} - {item.main.temp}°C -{" "}
          {item.weather[0].description}
        </p>
      ))}

      <button
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
