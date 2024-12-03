import { useState, useEffect } from "react";
import './slideBar.css';
import State from "./State";

export default function Slider({ years }) {
  const [selectedYear, setSelectedYear] = useState(years[0]); // Estado para el año seleccionado
  const [selectedFile, setSelectedFile] = useState(`${years[0]}.geojson`); // Estado para el archivo seleccionado
  const [isRunning, setIsRunning] = useState(false); // Estado para saber si el recorrido está en ejecución
  const [intervalId, setIntervalId] = useState(null); // Almacena el ID del intervalo para poder cancelarlo

  const handleSliderChange = (e) => {
    const newYear = e.target.value; // Obtener el nuevo año seleccionado
    setSelectedYear(newYear); // Actualiza el año seleccionado
    setSelectedFile(`${newYear}.geojson`); // Genera el nombre del archivo y actualiza el estado
    console.log(newYear);
  };

  const startAutoSlider = () => {
    // Inicia el recorrido automático de los años
    setIsRunning(true);
    const id = setInterval(() => {
      setSelectedYear((prevYear) => {
        const nextYear = parseInt(prevYear) + 1;
        if (nextYear > Math.max(...years)) {
          clearInterval(id); // Detener el intervalo cuando lleguemos al año máximo
          setIsRunning(false);
          return prevYear; // Detener en el año máximo
        }
        setSelectedFile(`${nextYear}.geojson`); // Actualiza el archivo
        return nextYear;
      });
    }, 800); // Cambia el año cada 1 segundo
    setIntervalId(id);
  };

  const stopAutoSlider = () => {
    // Detener el recorrido automático si el usuario lo desea
    clearInterval(intervalId);
    setIsRunning(false);
  };

  return (
    <div className="section-slider">
      <label htmlFor="year-slider" style={{ fontSize: '1.2rem', marginBottom: '10px' ,color:"white"}}>
        Selecciona un año: {selectedYear}
      </label>
      <input
        id="year-slider"
        type="range"
        min={Math.min(...years)} // Mínimo valor del rango
        max={Math.max(...years)} // Máximo valor del rango
        step={1} // Incrementos de 1
        value={selectedYear}
        onChange={handleSliderChange} // Actualizar al mover el slider
        className="slider"
      />

      {/* Botón para iniciar y detener el recorrido automático */}
      <button
        onClick={isRunning ? stopAutoSlider : startAutoSlider}
        style={{ marginLeft: '10px', padding: '10px 20px', fontSize: '1rem' ,backgroundColor:"#4b4b4b",color:"white"}}
      >
        {isRunning ? "Detener" : "Recorrer años"}
      </button>
      
      {/* Pasa el archivo seleccionado al componente State */}
      <State selectedFile={selectedFile} />
    </div>
  );
}
