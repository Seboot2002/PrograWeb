'use client';
import React from "react";
import './style.css';
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import Chip_Reserva from '../../components/Chip_Reserva/Chip_Reserva.jsx';
import HorariosApi from '../../api/horarios.js';
import PersonasApi from '../../api/personas.js';
import UniversidadesApi from '../../api/universidades.js';
import { useState, useEffect } from 'react';
import librosApi from '@/api/libros.js';
import { useRouter } from "next/navigation";
//import Libro from "@/components/libro/libro.jsx"

const resultados = () => {

    const [usuarios, setUsuarios ] = useState([]);
    const [horarios, setHorarios ] = useState([]);
    const [universidades, setUniversidades ] = useState([]);

    const profesores = usuarios.filter(e => e.idRol== 2)

    const [libros, setLibros ] = useState([]);

    //Buscador
    const router = useRouter();
    const [palabra, setPalabra] = useState('');
    const [resultados, setResultados] = useState([]);


    for (let i = 0; i < profesores.length; i++) {
        
        if(universidades.find((e) => e.idUniversidad == profesores[i].carrera.idUniversidad) != undefined){
            profesores[i].universidad = (universidades.find((e) => e.idUniversidad == profesores[i].carrera.idUniversidad).descripcion);
        }
        profesores[i].nomCarrera = profesores[i].carrera.nombre
        profesores[i].dia = profesores[i].horarios[0]?.diaSemana
        console.log(profesores[i].horarios.diaSemana)
      } 

    console.log(profesores)

    const [opcion, setOpcion] = useState('nombre');

    const [isClickedN, setIsClickedN] = useState(true);

    const [isClickedF, setIsClickedF] = useState(false);

    const [fecha, setFecha] = useState('');

    const [displayText, setDisplayText] = useState("Ingrese nombre de docente, universidad o carrera");

    const handleOpcionClick = (opcion) => {
        /*
        setOpcion(opcion);
        setBusqueda('');
        setFecha('');
        if (opcion === 'nombre') {
            setIsClickedF(false);
            setIsClickedN(true);
            setDisplayText("Ingrese nombre de docente, universidad o carrera");
        } else if (opcion === 'fecha') {
            setIsClickedN(false);
            setIsClickedF(true);
            setDisplayText("DD/MM/YYYY");
          }*/
      };
    
      const handleFechaChange = (event) => {
        /*
        console.log(event.target.value);
        setFecha(event.target.value);
        const resultados = profesores.filter(profesor => {
            const {dia} = profesor;
            const terminoBusqueda = event.target.value.toLowerCase();
            return (
              dia?.toLowerCase().includes(terminoBusqueda) 
            );
          });
          setResultados(resultados);*/
      };

    

    const [busqueda, setBusqueda] = useState('');

    const handleInputChange = (event) => {
        /*
        setBusqueda(event.target.value);
        const resultados = profesores.filter(profesor => {
          const {nombre, universidad,  nomCarrera} = profesor;
          const terminoBusqueda = event.target.value.toLowerCase();
          return (
            nombre.toLowerCase().includes(terminoBusqueda) ||
            universidad.toLowerCase().includes(terminoBusqueda) ||
            nomCarrera.toLowerCase().includes(terminoBusqueda)
          );
        });
        setResultados(resultados);*/
      };

      const handleOnLoad = async () => {

        var librosData = await localStorage.getItem('libros');
        var librosJSON = await JSON.parse(librosData);
        await setLibros(librosJSON)
        console.log(libros)
    }

      useEffect(()=>{
        handleOnLoad();

    },[])
      
    return(
        <div className="contenedor">
            <div className="tit">
                <h2 className="titulo">Resultados</h2> 
             
                <hr></hr>
            </div>

            <div className="descripcion">
                <span className="info">{displayText}</span>
            </div>
            <div className="profes">
                <ul className='nobullets'>
                    {libros.map((libro, index) =>{
                        return (
                        <li key={index} style={{display: 'inline-block'}} >
                            <Chip_Reserva 
                            nombre={libro.titulo} 
                            autor={libro.autor}
                            editorial={libro.editorial}
                            anio ={libro.anio}
                            id ={libro.id}
                            imagenPortadaUrl={libro.imagenPortadaUrl}
                            />
                            </li>)
                        })
                    }
                    {
                    /*libros.map((libro, index) =>{
                        return (
                        <li key={index} style={{display: 'inline-block'}} >
                            <Libro key={index} libro={libro} />
                            </li>)
                        })*/
                    }
                    {/*libros.map((libro, index) => (
                        <Libro key={index} libro={libro} />
                    ))*/}
                </ul>
            </div>
            
            
        </div>
    )
}

export default resultados;