'use client';
import Link from 'next/link';
import styles from '../page.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons'
import { useState , useEffect } from 'react'
import { useRouter } from 'next/navigation';
import PersonasApi from '../../api/personas.js'
import ReservasApi from '../../api/reservas.js'
import Button from 'react-bootstrap/Button'
import './style.css'

export default function Dashboard() {
    const router = useRouter();
    const [usuarios, setUsuarios ] = useState([]);

    const [sesion , setSesion] = useState({});
    const [reservas, setReservas ] = useState([]);

    
    const fechaSistema = new Date();
 

    const filtrarFecha = async (citasOriginal, sesion) =>{ 
        /*
        let citasFiltradas = []
        if(sesion.rol == 1){
            citasFiltradas = citasOriginal.filter(elemento => (new Date(elemento.fecha) > fechaSistema && elemento.idPersonaAlumno == sesion.idPersona));
            //setCitasFiltrado(citasFiltradas)
        }else{
            citasFiltradas = citasOriginal.filter(elemento => (new Date(elemento.fecha) > fechaSistema && elemento.idPersonaDocente == sesion.idPersona));
            //setCitasFiltrado(citasFiltradas)
        }
        return citasFiltradas;*/
    };

    

    function obtenerPrimeraLetra(cadena) {
        return cadena && cadena[0] ;
      }

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
      
    
    useEffect(() => {

        handleOnLoad();
        
    }, []); 
    
    return (
        <div className={`${styles.contenedor} col`}>
            <div>
                <div className='encabezado'>
                    <h4> Bienvenido,{sesion.rol == 2 ? ' Admin: ' : ' Usuario: '} {sesion.nombre+' '+sesion.apellido}! </h4>
                </div>
                <hr></hr>
                <div className="card mb-3" style={{backgroundColor: `#f3edf7` , minHeight: `260px`}}>
                    <div className="card-header d-flex justify-content-between">
                        <label> Mis reservas </label>
                    </div>
                    <div className="card-body">

                        {reservas.map((item, index) =>{
                            return (
                            <li key={index} style={{display: 'inline-block'}} >
                                
                                <div className="card mb-2" style={{maxWidth: `650px` , minWidth: `300px`}}>
                                        <div className="row mx-0">

                                            <div className="col-auto d-flex align-items-center px-3">
                                                <div className={styles.cardLetra}>  {sesion.rol  == 2 ? obtenerPrimeraLetra(usuarios.find((e) => e.idPersona == item.idPersonaAlumno)?.nombre) : obtenerPrimeraLetra(usuarios.find((e) => e.idPersona == item.idPersonaDocente)?.nombre)} </div>
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

                </div>
                
                <div className="card mb-3"style={{backgroundColor: `#f3edf7` , height: `260px`}}>
                    <div className="card-header d-flex justify-content-between">
                        <label> Mis reservas pronto a vencer dentro de 3 días </label>
                    </div>

                    <div className="card-body">
                        
                    {reservas.map((item, index) =>{
                            return (
                            
                            item.dias <=3 &&
                            <li key={index} style={{display: 'inline-block'}} >
                                
                                <div className="card mb-2" style={{maxWidth: `650px` , minWidth: `300px`}}>
                                        <div className="row mx-0">

                                            <div className="col-auto d-flex align-items-center px-3">
                                                <div className={styles.cardLetra}>  {sesion.rol  == 2 ? obtenerPrimeraLetra(usuarios.find((e) => e.idPersona == item.idPersonaAlumno)?.nombre) : obtenerPrimeraLetra(usuarios.find((e) => e.idPersona == item.idPersonaDocente)?.nombre)} </div>
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
                </div>
            </div>
        </div>
    )
}
