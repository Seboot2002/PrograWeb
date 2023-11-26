"use client"

import './style.css'
import { useParams } from 'next/navigation'
import LibrosApi from '../../../api/libros.js'
import ReservasApi from '../../../api/reservas'
import { useState , useEffect } from 'react'

export default function Detalle(){
    
    const params = useParams()
    const [libro, setLibro ] = useState([]);
    const [dias, setDias ] = useState([]);
    const [sesion , setSesion] = useState({});

    const handleOnLoad = async() =>{
        
        await LibrosApi.findOne(params.id).then((result)=>{
            var libro = result.data
            console.log(libro)
            setLibro(libro)
        });

        var sesionGuardada = localStorage.getItem('sesion');
        var sesionJSON = JSON.parse(sesionGuardada);
        setSesion(sesionJSON)
        console.log(sesion)
    }

    const confirmarReserva = async(event) =>{
        event.preventDefault();
        
        alert("Gracias por realizar su reserva");

        var data = {
            dias: dias,
            libroId: libro.id,
            usuarioId: sesion.id
        }

        await ReservasApi.create(data).then((result)=>{
            var reserva = result.data
            console.log(reserva)
            console.log(sesion.id)
        });
    }

    useEffect(() => {
        handleOnLoad();
        
    }, []); 

    return (
        <div className='all'>
            <header>
                <h1>Detalle del Libro</h1>
            </header>
            <main>
                <h2>{libro.titulo}</h2>
                <p>Autor: {libro.autor}</p>
                <p>Año: {libro.anio}</p>
                <p>ISBN: {libro.ISBN}</p>
                <p>Editorial: {libro.editorial}</p>
                <form method="post" onSubmit={confirmarReserva} className='action'>
                    
                    <label for="reservaDias">Número de días de reserva: </label>
                    <input type="number" className="form-control" id="reservaDias" name="reservaDias" min="1" max="30" placeholder="Ingrese el número de días"
                                    value={ dias } 
                                    onChange={e => setDias(e.target.value)}
                                    required
                                />
                    <button type="submit">Confirmar Reserva</button>
                </form>
            </main>
        </div>
    )
}