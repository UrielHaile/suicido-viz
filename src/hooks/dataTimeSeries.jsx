import * as d3 from "d3";
import { useState, useEffect } from "react";

export function useCityTimeSeries(selectedCity) {
  const [timeSeriesData, setTimeSeriesData] = useState({ loading: true, data: [] });

  useEffect(() => {
    if (!selectedCity) return;
    
    // Cargar los datos de todos los años para la ciudad seleccionada
    const years = d3.range(1998, 2023);
    Promise.all(
        years.map(year =>
          
          d3.csv(`./db/mun_count_${year}.csv`).then(data => {
            console.log(`./data/db/mun_count_${year}.csv`);
            const municipioData = data.find(d => d.municipio === selectedCity);
            return {
              year: year,
              count: municipioData ? +municipioData.count : 0
            };
          })
        )
      ).then(data => {
        setTimeSeriesData({ loading: false, data });
      });
    }, [selectedCity]);
  
    return timeSeriesData;
}