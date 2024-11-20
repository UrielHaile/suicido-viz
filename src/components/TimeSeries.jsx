import * as d3 from "d3";
import { Fragment, useEffect, useRef, useState } from "react";
import { useCityTimeSeries } from "../hooks/dataTimeSeries";
import { SearchBar } from "./SearchBar.jsx";
import { SearchResultsList } from "./searchResultsList.jsx";
import "./TimeSeries.css";
export default function TimeSeries() {
  const defaultCity = { name: "Abasolo" };
  const [results, setResults] = useState([]);
  const [selectedResult, setSelectedResult] = useState(defaultCity);
  const { loading, data: timeSeriesData } = useCityTimeSeries(selectedResult.name);
  const {loading1,data:timeSeriesDataDefault}=useCityTimeSeries("León");
  const svgRef = useRef();
  const containerRef = useRef();
  const tooltipRef = useRef(); // Referencia al tooltip
  const [dimensions, setDimensions] = useState({ width: 600, height: 500 });
  
  const handleResultClick = (result) => {
    setSelectedResult(result);
  };

  const hasResults = results.length > 0;
  const municipio = selectedResult.name;

  // Calcular el tamaño del contenedor en cada resize
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const { width } = containerRef.current.getBoundingClientRect();
        const height = width * 0.6; // Puedes ajustar la relación de aspecto aquí
        setDimensions({ width, height });
      }
    };

    handleResize(); // Ajustar tamaño al cargar
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Crear escalas
  const xScale = d3.scaleTime()
    .domain(timeSeriesData && timeSeriesData.length > 0
      ? d3.extent(timeSeriesData, (d) => new Date(d.year, 0, 1))
      : [new Date().getFullYear() - 1, new Date().getFullYear()])
    .range([50, dimensions.width - 50]);

  const yScale = d3.scaleLinear()
    .domain([0, timeSeriesData && timeSeriesData.length > 0
      ? d3.max(timeSeriesDataDefault, (d) => d.count)
      : 1])
    .range([dimensions.height - 50, 50]);

  const line = d3.line()
    .x((d) => xScale(new Date(d.year, 0, 1)))
    .y((d) => yScale(d.count));
  

  useEffect(() => {
    if (loading || !timeSeriesData || timeSeriesData.length === 0) {
      return;
    }

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    svg.style("background-color", "transparent");

    const axisColor = "#fff";

    // Eje X con años y color de contraste
    svg.append("g")
    .attr("transform", `translate(0, ${dimensions.height - 50})`)
    .call(d3.axisBottom(xScale).ticks(10).tickFormat(d3.timeFormat("%Y")))
    .attr("class", "x-axis")
    .selectAll("text")
    .attr("fill", axisColor)
    .style("font-size", "12px")
    .attr("transform", "rotate(40)")
    .attr("y", 5)
    .attr("x", 25)
    .style("text-anchor", "middle"); // Alinear las etiquetas al centro
    svg.append("text")
      .attr("x", -dimensions.height / 2) // Centrar el texto verticalmente
      .attr("y", 15) // Ajustar el desplazamiento horizontal
      .attr("transform", "rotate(-90)") // Rotar el texto para el eje Y
      .attr("text-anchor", "middle") // Centrar el texto
      .text("Suicidios") // Establecer el texto
      .style("font-size", "15px")
      .attr("fill", "white");
    svg.select(".x-axis path")
      .attr("stroke", axisColor)
      .attr("stroke-width", 1.5);

    svg.selectAll(".x-axis line")
      .attr("stroke", axisColor)
      .attr("stroke-width", 1.5);

    // Eje Y con conteo y color de contraste
    svg.append("g")
      .attr("transform", `translate(50, 0)`)
      .call(d3.axisLeft(yScale).ticks(6))
      .attr("class", "y-axis")
      .selectAll("text")
      .attr("fill", axisColor)
      .style("font-size", "12px");
    svg.append("text")
      .attr("x", dimensions.width / 2) // Centrar horizontalmente
      .attr("y", dimensions.height ) // Ajustar el desplazamiento horizontal
     // Rotar el texto para el eje Y
      .attr("text-anchor", "middle") // Centrar el texto
      .text("Años") // Establecer el texto
      .style("font-size", "18px")
      .attr("fill", "white");
    svg.select(".y-axis path")
      .attr("stroke", axisColor)
      .attr("stroke-width", 1.5);

    svg.selectAll(".y-axis line")
      .attr("stroke", axisColor)
      .attr("stroke-width", 1.5);

    // Línea de datos con color de contraste y animación
    svg.append("path")
      .datum(timeSeriesData)
      .attr("class", "line")
      .attr("d", line)
      .attr("fill", "none")
      .attr("stroke", "red")
      .attr("stroke-width", 3)
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("stroke-dasharray", function() { return this.getTotalLength(); })
      .attr("stroke-dashoffset", function() { return this.getTotalLength(); })
      .transition()
      .duration(2000)
      .ease(d3.easeCubicInOut)
      .attr("stroke-dashoffset", 0);

    // Agregar círculos para los puntos de la línea
    const points = svg.selectAll(".point")
      .data(timeSeriesData)
      .enter().append("circle")
      .attr("class", "point")
      .attr("cx", (d) => xScale(new Date(d.year, 0, 1)))
      .attr("cy", (d) => yScale(d.count))
      .attr("r", 4)
      .attr("fill", "red");

    // Tooltip al pasar sobre los puntos
    points.on("mouseover", function(event, d) {
      d3.select(this)
        .attr("r", 6) // Aumentar el tamaño del círculo
        .attr("fill","#ff6347"); // Cambiar color al pasar el mouse

      // Mostrar el tooltip
      const tooltip = d3.select(tooltipRef.current);
      tooltip.transition().duration(200).style("opacity", 1);
      tooltip.html(`Suicidios: ${d.count}`)
        .style("left", `${event.pageX + 10}px`)
        .style("top", `${event.pageY+ 10}px`);
    })
    .on("mouseout", function(event, d) {
      d3.select(this)
        .attr("r", 4) // Volver al tamaño original
        .attr("fill","red" ); // Volver al color original

      // Ocultar el tooltip
      const tooltip = d3.select(tooltipRef.current);
      tooltip.transition().duration(200).style("opacity", 0);
    });

  }, [timeSeriesData, loading, xScale, yScale, line, dimensions]);

  return (
    <Fragment>
      <SearchBar setResults={setResults} />
      {hasResults && <SearchResultsList results={results} onResultClick={handleResultClick} />}
      <header className="titulo">
        
        <h6 style={{color:"#fff" }}>Serie de tiempo de {municipio}</h6>
      </header>
      <div ref={containerRef} style={{ width: "100%", maxWidth: "800px" }} className="image-container">
        {loading ? (
          <h1>Loading...</h1>
        ) : timeSeriesData && timeSeriesData.length > 0 ? (
          <svg ref={svgRef} width={dimensions.width} height={dimensions.height} className="time-series-chart"/>
        ) : (
          <p>No hay datos para mostrar.</p>
        )}
      </div>
      
      {/* Tooltip: cuadro de diálogo que muestra la cantidad de suicidios */}
      <div
        ref={tooltipRef}
        style={{
          position: "absolute",
          background: "rgba(0, 0, 0, 0.7)",
          color: "#fff",
          padding: "5px",
          borderRadius: "4px",
          pointerEvents: "none",
          opacity: 0,
          transition: "opacity 0.2s"
        }}
      ></div>
    </Fragment>
  );
}
