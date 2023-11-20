'use client';
import "bootstrap/dist/css/bootstrap.min.css";
import styles from '../page.module.css'
import 'animate.css';
import { useState , useEffect } from 'react'

import React from 'react'

import Select from 'react-select'
import CreatableSelect from 'react-select/creatable';

import { useRouter } from 'next/navigation';

import ChipCursos from '../../components/Chip_Cursos/Chip_Cursos.jsx';

import CarrerasApi from '../../api/carreras.js'
import UniversidadesApi from '../../api/universidades.js'
import PersonasApi from '../../api/personas.js'
import CursosApi from '../../api/cursos.js'
import PersonasCursosApi from '../../api/personascursos.js'

export default function Dashboard() {
    const [usuarios, setUsuarios ] = useState([]);
    const [carreras, setCarreras ] = useState([]);
    const [universidades, setUniversidades ] = useState([]);
    const [cursos, setCursos] = useState([]);
    const [sesion , setSesion] = useState({});
    const [cursosSelec, setCursosSelec] = useState([]);
    const [personasCursos, setPersonasCursos ] = useState([]);
    const router = useRouter();

    const [nombres, setNombres] = useState('');
    const [apellidos, setApellidos] = useState( '' );
    const [doc_tipo, setDoc_tipo] = useState( '');
    const [rol, setRol] = useState('');
    const [doc_numero, setDoc_numero] = useState('');

    const [usuario , setUsuario] = useState('')
    const [password , setPassword] = useState('')
    const [new_password , setNew_password] = useState('')
    const [check_password , setCheck_password] = useState('')
    const [universidad , setUniversidad] = useState('')
    const [carrera , setCarrera] = useState(0)


    const [titulo , setTitulo] = useState('')
    const [presentacion , setPresentacion] = useState('')
    const [grado , setGrado] = useState('')
    
    const [tab , setTab] = useState('datos')


    const [imagen , setImagen] = useState(undefined)

    const [selectedFile, setSelectedFile] = useState(undefined);
    




    const  filtrarCursosMatriculados = async (personasCursos, cursos, sesion) =>{
        let personasCursosFiltrados = []
        personasCursosFiltrados = personasCursos.filter((e) => e.idPersona == sesion.idPersona)

       

        let cursosFiltrados = []
        cursosFiltrados = cursos.filter((e) => personasCursosFiltrados.some((f) => f.idCurso == e.idCurso));
            

        return cursosFiltrados;
    }

    

    const setData = async ( dataSesion ) => {
        setNombres(dataSesion.nombre)
        setApellidos(dataSesion.apellido)
        setDoc_tipo(dataSesion.tipoDocumento)
        setRol(dataSesion.idRol)
        setDoc_numero(dataSesion.DNI)
        setUsuario(dataSesion.email)
        setPassword(dataSesion.password)
        setUniversidad(dataSesion.carrera.idUniversidad) // no se obtiene
        setCarrera(dataSesion.idCarrera) // no se obtiene
        setTitulo(dataSesion.tituloPresentacion)
        setPresentacion(dataSesion.presentacion)
        setImagen(dataSesion.imagen || '')
        setGrado(dataSesion.grado)
        
    }

    const imagenUpload = async (event) => {
        event.preventDefault();
        var base64 = await toBase64(event.target.files[0]);
        setImagen(base64);
    }
    const toBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
        
            fileReader.readAsDataURL(file);
        
            fileReader.onload = () => {
                resolve(fileReader.result);
            };
        
            fileReader.onerror = (error) => {
                reject(error);
            };
        });
      };

    const submitForm = async (event) => {
        event.preventDefault();

        if( usuarios.find(e => e.email == usuario && e.idPersona != sesion.idPersona ) ){
            alert( 'Ese usuario ya existe' );
            return;
        }
        if( password != '' ){
            if(usuarios.find(e => e.email == usuario && e.password == password ) ){
                if(new_password != check_password){
                    alert( 'Las contraseñas no coinciden' );
                    return;
                }
            }else{
                alert( 'Contraseña incorrecta, no se pudo actualizar' );
                return;
            }
        }
        
        var usuarioCambio = usuarios.find(e => e.idPersona == sesion.idPersona)
        if(new_password == ''){
            usuarioCambio.password = password;
        }else{
            usuarioCambio.password = new_password;
        }
        
        usuarioCambio.nombre = nombres;
        usuarioCambio.apellido = apellidos;
        usuarioCambio.tipoDocumento = doc_tipo;
        usuarioCambio.DNI = doc_numero;
        usuarioCambio.idRol = rol;
        usuarioCambio.email = usuario;
        usuarioCambio.idCarrera = carrera;
        usuarioCambio.tituloPresentacion = titulo;
        usuarioCambio.presentacion = presentacion;
        usuarioCambio.grado = grado;
        

        const result = await PersonasApi.update(usuarioCambio);
    
    }
    
    
  




    useEffect(() => {
        const handleOnLoad = async () => {
            const result = await CarrerasApi.findAll();
            setCarreras(result.data);
            const result2 = await UniversidadesApi.findAll();
            setUniversidades(result2.data);
            const result3 = await PersonasApi.findAll();
            setUsuarios(result3.data);
            const result4 = await CursosApi.findAll();
            let rawCursos = result4.data
            setCursos(result4.data);
            const result5 = await PersonasCursosApi.findAll();
            let rawPersonasCursos = result5.data
            setPersonasCursos(result5.data);
            let sesionGuardada = localStorage.getItem("sesion");
            if(sesionGuardada == undefined){
                router.push('/')
            }
            setSesion(JSON.parse(sesionGuardada))
            const cursosMatriculadosFiltrados = await filtrarCursosMatriculados(rawPersonasCursos, rawCursos, JSON.parse(sesionGuardada));
            setCursosSelec(cursosMatriculadosFiltrados)
            setData(JSON.parse(sesionGuardada)) 
        }


        handleOnLoad()
        
        

        
    }, []);
   
    return (
        <div className={`${styles.contenedor} col`}> 
            <div>
                <form method="post" onSubmit={submitForm}>
                    <div className="d-flex justify-content-between">
                        <h4> Mi perfil </h4>
                        <button className="btn btn-primary" type="submit" style={{backgroundColor:'#a254b6', border: 'none'}}> Guardar </button> 
                    </div>
                    <hr></hr>

                
                    <div>
                        <div className="row align-items-start">

                            <div className="col-md-5">
                                <div className="text-center pt-4">
                                    <div className="text-center m-auto" style={{maxWidth: '350px', maxHeight : '350px'}}>
                                        <img src={imagen != '' && imagen != undefined ? imagen :'https://placehold.jp/200x200.png' } style={{maxWidth: `250px` , maxHeight: `250px` , objectFit :'contain'}} ></img>
                                    </div>
                                    <div className="py-3">
                                        <label htmlFor="inputFile" className="form-label">Subir Imagen</label>
                                        {<textarea className="form-control" id="inputImagen"
                                            value={ imagen }
                                            onChange={e => setImagen(e.target.value)}
                                        > 
                                        </textarea>}
                                        <input
                                            className="form-control" id="inputFile"
                                            type="file"
                                            accept=".png,.jpg,.jpeg"
                                            value={ selectedFile }
                                            onChange={ imagenUpload }
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <a className={tab == 'libro' ? 'nav-link active' : 'nav-link'  } href="#" onClick={ e => setTab('libro') }>INSERTAR NUEVO LIBRO</a>
                                </li>
                            </ul>
                        </div>
                        <div className={`${styles.tabs}`}>


                            { tab == 'libro' && (
                                <div id="libro" className="pb-2">
                                  <div className="col-md-6">
                                    <label htmlFor="inputNombres" className="form-label">Titulo</label>
                                    <input type="text" className="form-control"
                                        value={ " " }
                                    />
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="inputApellidos" className="form-label">Autor, autores</label>
                                    <input type="text" className="form-control"
                                        value={" "} 
                                    />
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="inputDocumentoTipo" className="form-label">ISBM</label>
                                    <input type="text" className="form-control"
                                        value={" "} 
                                        
                                    />
                                        
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="inputDocumentoTipo" className="form-label">Serie, tipo</label>
                                    <input type="text" className="form-control"
                                        value={" "} 
                                        
                                    />
                                        
                                </div>
                                </div>
                            )}


                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
