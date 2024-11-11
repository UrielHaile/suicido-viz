import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { ParallaxLayerText } from './components/ParallaxLayerText.jsx'
import Estadisticas from './components/estadisticas.jsx'
import State from './components/State.jsx'
import Observador from './components/observador.jsx'
import React, { useState } from "react";
/* Estilos */
import './App.css'

/* Imagenes */
import sujetoPrincipalTop from './img/sujetoPrincipalTop.png'
import sujetoPrincipalBottom from "./img/sujetoPrincipalBottom.png";
import corazon from "./img/KokoroR.png";
import bala from "./img/bala.png";
import cuerda from "./img/cuerda.png";
import CuerdaExt from "./img/CuerdaExt.png";
import CuerdaExt1 from "./img/CuerdaExt1.png";
import pildoras from "./img/pildoras.png";
import logoUG from "./img/UG.png";

import TimeSeries from './components/TimeSeries.jsx'
import Slider from './components/slideBar.jsx'
export default function App() {
  const files=["1998.geojson","1999.geojson","2000.geojson","2001.geojson","2002.geojson","2003.geojson","2004.geojson","2005.geojson",
    "2006.geojson","2007.geojson","2008.geojson","2009.geojson","2010.geojson","2011.geojson","2012.geojson","2013.geojson","2014.geojson","2015.geojson",
    "2016.geojson","2017.geojson","2018.geojson","2019.geojson","2020.geojson","2021.geojson","2022.geojson"
  ];
  const [selectedFile, setSelectedFile] = useState(files[21]); 

  const years = files.map((file) => file.replace(".geojson", "")); 

  const handleButtonClick = (index) => {
    setSelectedFile(files[index]); 
    console.log("Archivo seleccionado:", files[index]);
  };
  const alignCenter = { display: "flex", alignItems: "center" };

  return (
    <div className="App">
      <Parallax pages={29} style={{ top: "0", left: "0" } }>
        {/* EXTENSIÓN CUERDA ------------------------- */}
        <div style={{position:"relative", transform:"translateZ(0)"}}>
          <ParallaxLayer offset={0} speed={0.01}>
            <img src={CuerdaExt} className="ext-cuerda er1" style={{margin:"auto" ,position:"absolute" }} />
          </ParallaxLayer>
          <ParallaxLayer offset={0.99} speed={0.01}>
            <img src={CuerdaExt1} className="ext-cuerda er2" style={{margin:"auto" ,position:"absolute" }} />
          </ParallaxLayer>
          <ParallaxLayer offset={1.98} speed={0.01}>
            <img src={CuerdaExt} className="ext-cuerda er3" style={{ margin:"auto" ,position:"absolute"}} />
          </ParallaxLayer>
          <ParallaxLayer offset={2.97} speed={0.01}>
            <img src={CuerdaExt1} className="ext-cuerda er4" style={{ margin:"auto" ,position:"absolute" }} />
          </ParallaxLayer>
          <ParallaxLayer offset={3.96} speed={0.01}>
            <img src={CuerdaExt} className="ext-cuerda er5" style={{ margin:"auto" ,position:"absolute" }} />
          </ParallaxLayer>
          <ParallaxLayer offset={4.94} speed={0.01}>
            <img src={CuerdaExt1} className="ext-cuerda er6" style={{ margin:"auto" ,position:"absolute"}} />
          </ParallaxLayer>
          <ParallaxLayer offset={5.95} sticky={{ start: 5.9215, end: 5.9216 }} className="cuerda-fin">
            <img src={cuerda} className="fin-img er7" alt="Cuerda" style={{margin:"auto",position:"absolute"}}/>
          </ParallaxLayer>
        </div>
        {/* ALBERT CAMUS ------------------------------------ */}
        <ParallaxLayerText />
        {/* ESTADÍSTICA ------------------------------------- */}
        <Observador offset={0.1} speed={0.5} sticky={{start:1, end:2}}>
          <div className="estadistica">
            <h1>493</h1>
          </div>
        </Observador>
        <ParallaxLayer offset={0.5} speed={0.5} sticky={{start:1.7, end:2}}>
          <div className="estadistica">
            <h2>Suicidios</h2>
          </div>
        </ParallaxLayer>
        {/* HISTORIA -------------------------------------- */}
        <ParallaxLayer offset={2.9} sticky={{ start:3, end: 4 }} className="historia">
          <div className="historia-parrafo">
            <p>
              Hace un par de meses, tal vez hace ya un año, la noticia del suicidio de una estudiante recorrió los
              pasillos de mi universidad. Como con la mayoría de sucesos, uno se entera por medio de los rumores, la
              información y los datos se transfiguran. Y nosotros, como estudiantes, nos enteramos por medio de la
              directora de manera oficial, pasadas unas semanas. El ambiente en los corredores universitarios se tornó
              silencioso, gris y sobrio. Realmente no sabías si se debía discutir, platicar, comentar o debatir sobre el
              tema. Y no de la víctima en sí o del suceso, sino del acto de suicidarse. Algunas inquietudes se sembraron
              en la mente de mis compañeros:
            </p>
          </div>
        </ParallaxLayer>
        {/* PREGUNTAS ------------------------------------- */}
        <ParallaxLayer offset={5} sticky={{ start: 5, end: 6}} className="preguntas-container">
          <div className="preguntas">
            <Observador offset={0} speed={0.7} sticky={{ start: 0, end: 0.1}}>
              <div className="pregunta-derecha">
                <p>
                  ¿En qué situación habrá estado la <br /> compañera para tomar tal decisión?
                </p>
              </div>
            </Observador>
            <Observador offset={0.3} speed={0.5} sticky={{ start: 0.3, end: 0.4 }}>
              <div className="pregunta-izquierda">
                <p>
                  ¿La universidad puede aportar algo positivo <br /> para la prevención de este tipo de circunstancias?
                </p>
              </div>
            </Observador>
            <Observador offset={0.5} speed={0.5} sticky={{ start: 0.6, end: 0.7 }}>
              <div className="pregunta-derecha">
                <p>¿Y qué hay del gobierno?</p>
              </div>
            </Observador>
            <Observador offset={0.7} speed={0.5} sticky={{ start: 0.7, end: 0.8 }}>
              <div className="pregunta-izquierda">
                <p>
                  ¿Cuántos estudiantes tienen <br />
                  este tipo de pensamientos?
                </p>
              </div>
            </Observador>
            <Observador offset={0.9} speed={0.5} sticky={{ start: 0.9, end: 1 }}>
              <div className="pregunta-derecha">
                <p>¿La mayoría están en este rango de edad?</p>
              </div>
            </Observador>
          </div>
        </ParallaxLayer>
        {/* HOMBRE COLGADO ESQUEMA ------------------------ */}
        <ParallaxLayer offset={6.5} sticky={{ start: 7.5, end: 13 }} speed={0.01}>
          <div className="sujeto-principal">
            <center>
              <img src={sujetoPrincipalTop} alt="Hombre Colgado" style={{ height: "100vh", zIndex: "-1" }} />
            </center>
            <div className="corazon">
              <img src={corazon} alt="Corazon" />
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={14.5} sticky={{ start: 14, end: 16 }} speed={0.01}>
          <center>
          <div className="container-bottom-man">
            <img src={sujetoPrincipalBottom} alt="Hombre Colgado" className="bottomMan" style={{ height: "120vh", zIndex: "-1" }} />
          </div>
          </center>
        </ParallaxLayer>
        {/* DATOS ----------------------------------------- */}
        <ParallaxLayer
          offset={5}
          sticky={{ start: 8.5, end: 9 }}
          speed={0.5}
          style={{ display: "flex", justifyContent: "flex-end" }}
          id="datos"
        >
          <div className="dato-derecha">
            <h3>Medio</h3>
            <p>
              El ahorcamiento, la estrangulación y la sofocación es la manera más común de quitarse la vida en el
              estado.
            </p>
            <div className="medios-container">
              <div className="medio">
                <img src={cuerda} alt="Cuerda" />
                <h2>420</h2>
              </div>
              <div className="medio">
                <img src={pildoras} alt="Pildoras" />
                <h2>31</h2>
              </div>
              <div className="medio">
                <img src={bala} alt="Bala" />
                <h2>21</h2>
              </div>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={6}
          sticky={{ start: 10, end: 12 }}
          speed={0.5}
          style={{ display: "flex", justifyContent: "flex-start" }}
          id="datos"
        >
          <div className="dato-izquierda" style={{ marginTop: "5%" }}>
            <h3>Escolaridad</h3>
            <p>
              La mayoría de las personas que se suicidan en Guanajuato han cursado la primaria solamente.
            </p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={9}
          sticky={{ start: 11, end: 12 }}
          speed={0.5}
          style={{ display: "flex", justifyContent: "flex-end" }}
          id="datos"
        >
          <div className="dato-derecha" style={{ marginTop: "10%" }}>
            <h3>Edad</h3>
            <p>De los veinticinco a los veintinueve está la mayor parte de víctimas del suicidio del estado.</p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={10}
          sticky={{ start: 13, end: 14 }}
          speed={0.5}
          style={{ display: "flex", justifyContent: "flex-start" }}
          id="datos"
        >
          <div className="dato-izquierda" style={{ marginTop: "15%" }}>
            <h3>Mes</h3>
            <p>En primavera y verano suceden buena parte de los suicidios en todo el estado.</p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={11}
          sticky={{ start: 14, end: 15 }}
          speed={0.5}
          style={{ display: "flex", justifyContent: "flex-end" }}
          id="datos"
        >
          <div className="dato-derecha" style={{ marginTop: "20%" }}>
            <h3>Estado Civil</h3>
            <p>Los solteros, seguidos de los casados son los grupos que tienen una mayor ocurrencia.</p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={12}
          sticky={{ start: 15, end: 16 }}
          speed={0.5}
          style={{ display: "flex", justifyContent: "flex-start" }}
          id="datos"
        >
          <div className="dato-izquierda" style={{ marginTop: "25%" }}>
            <h3>Localidad</h3>
            <p>En su mayoría, las personas se quitan la vida en las zonas urbanas en el estado.</p>
          </div>
        </ParallaxLayer>
        {/* DATOS GENERALES DEL ESTADO --------------------- */}
        <ParallaxLayer
          offset={13}
          sticky={{ start: 17, end: 17.5 }}
          speed={0.5}
          style={{ ...alignCenter, justifyContent: "center" }}
        >
          <div className="estado">
            <h6>Datos generales del estado</h6>
            <hr />
            <p>En las siguientes gráficas se presentan las categorías con los datos del estado de Guanajuato.</p>
          </div>
        </ParallaxLayer>
        {/* MAPA ---------------------	*/}
        <ParallaxLayer offset={14} sticky={{ start: 18.5, end:19 }} speed={0.5} className="mapa-container">
          <div className="titulo-mapa">
            <h6>Mapa</h6>
          </div>
        <Slider years={years}/>

          {/****At this part it will be the buttons for each year */}
        </ParallaxLayer>
      
        <ParallaxLayer offset={19} sticky={{ start: 20, end:21 }} speed={0.5} className="mapa-container">
        
       
          <TimeSeries/>



        </ParallaxLayer>
        <ParallaxLayer offset={20} speed={0.5} sticky={{ start: 22, end: 23 }} className="gradient">
          <div className="gradient"></div>
        </ParallaxLayer>
     <ParallaxLayer offset={21} speed={0.5} sticky={{ start: 23, end: 23 }} className="gradient2">
          <div className="gradient2"></div>
     </ParallaxLayer>
        {/* VISUALIZACIÓN DE ESTADO ---------------------	*/}
        <ParallaxLayer
          offset={23}
          sticky={{ start: 22, end: 23 }}
          speed={0.5}
          style={{ ...alignCenter, justifyContent: "center" }}
        >
          <Estadisticas />
        </ParallaxLayer>
        {/* CRÉDITOS ---------------------	*/}
        <ParallaxLayer offset={23} speed={0.5} sticky={{ start: 25,end: 26}} className="dedicatoria-container">
          <div className="dedicatoria">
            <p>
              Dedicamos este proyecto a quienes luchan contra la desesperación, recordándoles que la esperanza persiste.
              A los valientes, a sus seres queridos y a todos contribuyendo a la prevención del suicidio. Que inspire
              compasión y solidaridad, construyendo puentes hacia la esperanza y la curación en nuestra comunidad.
              <br />
              <br />
              <strong style={{ color: "red" }}>Línea de la vida</strong>
              <br />
              <strong>Correo electrónico: </strong>
              lalineadelavida@salud.gob.mx
              <br />
              <strong>Teléfono: </strong>01 800 911 2000
            </p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={25} speed={0.5} sticky={{ start: 28, end: 29}} className="creditos-parallax">
          <div className="creditos-container">
            <div className="creditos">
              <div className="nombres">
                <h3>Desarrollado por:</h3>
                <p>
                  Durán Sierra Vanessa
                  <br />
                  Guzmán Molina Mónica
                  <br />
                  Rosales García Paulina Alejandra
                  <br />
                  Rodríguez González José Adrián<br/> <br />
                  <strong>Coordinador:</strong>
                  <br />
                  Dr. Uriel Haile Hernández Belmonte
                  <br /> <br />
                  <strong>Maqueta:</strong>
                  <br />
                  Rojano Urízar Armando
                  <br /><br />
                  <strong>¿Nos quieres ayudar a mejorar este proyecto?</strong>
                  <br />
                  Te invito a llenar la siguiente <a href="https://docs.google.com/forms/d/e/1FAIpQLSd76VJB8KKkeKuWplg623xHeGxkthUuaJNzjF1E10sJLr3m-w/viewform?usp=sf_link">encuesta</a>
                </p>
              </div>
            </div>
            <div className="logo-container">
              <h2>Universidad de Guanajuato</h2>
              <img src={logoUG} alt="Universidad de Guanajuato" />
              <p>© 2023</p>
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
    
  );
}
