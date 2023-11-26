'use client';
import styles from '../app/page.module.css'
import Link from 'next/link';
import { useState , useEffect } from 'react'
import { useRouter } from 'next/navigation';
import CitasApi from '../api/citas.js';

export default function Sidebar(props) {
    const router = useRouter();
    const [usuarios, setUsuarios ] = useState([]);
    const [citasOriginal, setCitasOriginal] = useState([]);
    const [citasFiltrado, setCitasFiltrado] = useState([]);
    const [sesion , setSesion] = useState({});
    const fechaSistema = new Date();

    const filtrarFecha = () =>{
        const citasFiltradas = citasOriginal.filter(elemento => (elemento.fecha >= fechaSistema && elemento.idPersonaAlumno == sesion.idPersona));
        setCitasFiltrado(citasFiltradas)

      };

      const handleOnLoad = async () => {
        /*const result = await CitasApi.findAll();
        setCitasOriginal(result.data);*/
    }

      
    useEffect(() => {
        handleOnLoad()
        filtrarFecha()
        let savedItem = localStorage.getItem("sesion");
        var sesionJSON = JSON.parse(savedItem)

        if(savedItem == undefined){
            router.push('/')
        }
        setSesion(sesionJSON)
        console.log(sesion)
    }, [])
    return (
        <div>
            <div className={`${styles.navBar} collapse show collapse-horizontal shadow-sm `} id="collapseWidthExample">
                <ul className="list-group list-group-flush">
                    <Link href="/dashboard"
                        className={props.name == 'dashboard' ? 'list-group-item list-group-item-action active' : 'list-group-item list-group-item-action'}
                        style={{backgroundColor: '#d9d9d9', border:'none', textAlign: 'center', color: '#bb59d3', fontWeight: 'bold'}} 
                    >
                        Principal
                    </Link>
                    { (sesion.rol == 1)  &&                    
                    <Link href="/perfil"
                    className={props.name == 'perfil' ? 'list-group-item list-group-item-action active' : 'list-group-item list-group-item-action'} 
                    style={{backgroundColor: '#d9d9d9', border:'none', textAlign: 'center', color: '#bb59d3', fontWeight: 'bold', marginTop: '4px'}} 
                    >
                        Perfil
                    </Link>
                    }

                    { (sesion.rol == 1)  &&
                        <Link href={citasFiltrado.length === 0 ? '/reserva_busq' : '/recordatorio'}
                            className={props.name == 'reserva_busq' ? 'list-group-item list-group-item-action active' : 'list-group-item list-group-item-action'} 
                            style={{backgroundColor: '#d9d9d9', border:'none', textAlign: 'center', color: '#bb59d3', fontWeight: 'bold', marginTop: '4px'}}                      
                        >
                            Prestamos
                        </Link>
                    }

                    { (sesion.rol == 1)  &&                    
                        <Link href="/reservas"
                        className={props.name == 'perfil' ? 'list-group-item list-group-item-action active' : 'list-group-item list-group-item-action'} 
                        style={{backgroundColor: '#d9d9d9', border:'none', textAlign: 'center', color: '#bb59d3', fontWeight: 'bold', marginTop: '4px'}} 
                        >
                            Reservas
                        </Link>
                    }

                    { (sesion.rol == 2)  &&                    
                    <Link href="/perfil"
                    className={props.name == 'perfil' ? 'list-group-item list-group-item-action active' : 'list-group-item list-group-item-action'} 
                    style={{backgroundColor: '#d9d9d9', border:'none', textAlign: 'center', color: '#bb59d3', fontWeight: 'bold', marginTop: '4px'}} 
                    >
                        Perfil
                    </Link>
                    }
                    { (sesion.rol == 2)  &&
                        <Link href={citasFiltrado.length === 0 ? '/biblioteca' : '/recordatorio'}
                            className={props.name == 'biblioteca' ? 'list-group-item list-group-item-action active' : 'list-group-item list-group-item-action'} 
                            style={{backgroundColor: '#d9d9d9', border:'none', textAlign: 'center', color: '#bb59d3', fontWeight: 'bold', marginTop: '4px'}}                      
                        >
                            Biblioteca
                        </Link>
                    }

                    { (sesion.rol == 2)  &&             
                        <Link href="/reserFrecuentes"
                        className={props.name == 'perfil' ? 'list-group-item list-group-item-action active' : 'list-group-item list-group-item-action'} 
                        style={{backgroundColor: '#d9d9d9', border:'none', textAlign: 'center', color: '#bb59d3', fontWeight: 'bold', marginTop: '4px'}} 
                        >
                            Reservas frecuentes
                        </Link>
                    }


                </ul>
            </div>
        </div>
    )
}