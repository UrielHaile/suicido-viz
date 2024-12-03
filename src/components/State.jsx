import * as d3 from "d3";
import { setMapProjection } from "../helpers/setMapProjection";
import { useMapTools } from "../hooks/useMapTools";
import City from "./City";
import "./State.css";
import { Fragment } from "react";

export default function State({selectedFile}) {
  
  const { mapData } = useMapTools(selectedFile);
  const width = 500;
  const height = 500;

  if (!mapData.loading) {
    const path = d3.geoPath().projection(setMapProjection(mapData.data));
    const healthRegions = mapData.data.features.map((data) => {
      const region_name = data.properties.mun_name + " " + data.properties.suicidios_2019;
      return (
        <City
          key={data.properties.mun_code}
          path={path(data)}
          tooltipData={region_name}
          suicides={data.properties.suicidios_2019}
        />
      );
    });

    return (
      <Fragment>
        <svg className="map-canvas" width={width} height={height}>
          <g>{healthRegions}</g>
        </svg>
      </Fragment>
    );
  } else {
    return <h1>Loading...</h1>;
  }
}
