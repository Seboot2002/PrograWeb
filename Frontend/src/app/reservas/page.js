'use client';
import React from "react";
import './style.css';
import styles from '../page.module.css'
import { useState, useEffect } from 'react';
import ReservasApi from '../../api/reservas.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons'

const reservas = () => {

    const [usuarios, setUsuarios ] = useState([]);
    const [universidades, setUniversidades ] = useState([]);
    const [reservas, setReservas ] = useState([]);
    const [sesion , setSesion] = useState({});

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

    

    const [busqueda, setBusqueda] = useState('');
    const [resultados, setResultados] = useState([]);

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

        var sesionGuardada = await localStorage.getItem('sesion');
        var sesionJSON = await JSON.parse(sesionGuardada);
        await setSesion(sesionJSON)
        console.log(sesion)

        await ReservasApi.findAll(sesionJSON.id).then((result)=>{
            
            if(result != null){

                var reservas = result.data;
                setReservas(reservas);
                console.log(reservas);
            }
        })
    }
    

      useEffect(()=>{
        handleOnLoad();

    },[])
      
    return(
        <div className="contenedor">
            <div className="tit">
                <h2 className="titulo">Mis reservas</h2> 
             
                <hr></hr>
            </div>
            <div className="descripcion">
                <span className="info">Mira aquí todas tus reservas</span>
            </div>
            <div className="profes">
                <ul className='nobullets'>
                    <div className="card-body">

                    {reservas.map((item, index) =>{
                            return (
                            <li key={index} style={{display: 'inline-block'}} >
                                
                                <div className="card mb-2" style={{maxWidth: `650px` , minWidth: `300px`}}>
                                        <div className="row mx-0">

                                            <div className="col-auto d-flex align-items-center px-3">
                                                <div className={styles.cardLetra}></div>
                                            </div>

                                            <div className="col px-0">

                                                <div key={index} className="card-body px-0">
                                                    <h5 className="card-title">{item.Libros.titulo}</h5>
                                                    <p className="card-text text-center">
                                                        {item.Libros.autor}
                                                    </p>

                                                    <hr>
                                                    </hr>

                                                    <p className="card-text text-center">
                                                        {item.Usuario.nombre} - {item.Usuario.apellido}
                                                    </p>

                                                    <hr>
                                                    </hr>

                                                    <p className="card-text text-center">
                                                        Te quedan: {item.dias} dias
                                                    </p>
                                                </div>

                                            </div>
                                            <div className="col-auto d-flex align-items-center px-3">
                                                <FontAwesomeIcon icon={faCalendarDay} className="" style={{ fontSize : `3em`}} />
                                            </div>
                                        </div>
                                    </div>    
                            

                            </li>
                            )}
                        )}
                        
                    </div>
                </ul>
            </div>
            
            
        </div>
    )
}

export default reservas;