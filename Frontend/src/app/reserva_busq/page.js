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

const reserva_busq = () => {

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


      const buscar = async(e)=> {
        e.preventDefault(); //Evita que el form se mande

              const palabra_lower = palabra.toLowerCase();
              console.log(palabra_lower);

              await libros.map((libro)=>{

                const titulo_lower = libro.titulo.toLowerCase();
                if(titulo_lower.indexOf(palabra_lower) != -1){
            
                  resultados.push(libro);
            
                }
              })
              console.log(resultados);
              await localStorage.setItem("libros", JSON.stringify(resultados));
              router.push('/resultados');
      }

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

        await librosApi.findAll().then((librosResult)=>{
            
            if(librosResult){

                setLibros(librosResult.data);
                console.log(librosResult.data);
            }

        });
    }

      useEffect(()=>{
        handleOnLoad();

    },[])
      
    return(
        <div className="contenedor">
            <div className="tit">
                <h2 className="titulo">Reserva de Libro</h2> 
             
                <hr></hr>
            </div>
            <div className="busq">
                <div className="barra">
                    <h6>Búsqueda</h6>
                    <div className="form">

                        <div className="lupa">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-search" viewBox="0 0 40 40">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                        </div>

                        {opcion === 'nombre' && (
                            <Form className="formNombre">
                                <Form.Group controlId="nombre">
                                    <Form.Control
                                    type="text"
                                    value={palabra}
                                    onChange={(e)=> setPalabra(e.target.value)}
                                    className="cajaBusqN"
                                    />
                                </Form.Group>
                            </Form>
                        )}

                        {opcion === 'fecha' && (
                                <Form className="formFecha">
                                    <Form.Group controlId="fecha">
                                        <Form.Control
                                        type="text"
                                        value={fecha}
                                        onChange={handleFechaChange}
                                        className="cajaBusqF"
                                        />
                                    </Form.Group>
                                </Form>
                            )}


                    </div>
                </div>
                <div className="botones">
                <button className="botonN" type="submit" onClick={buscar}>
                    Buscar
                </button>
                </div>
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

export default reserva_busq;