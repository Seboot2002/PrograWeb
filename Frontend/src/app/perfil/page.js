'use client';
import "bootstrap/dist/css/bootstrap.min.css";
import styles from '../page.module.css'
import 'animate.css';
import { useState , useEffect } from 'react'

import React from 'react'

import Select from 'react-select'
import CreatableSelect from 'react-select/creatable';

import { useRouter } from 'next/navigation';

import PersonasApi from '../../api/personas.js'
import Input from "@/components/Input/Input";

export default function Dashboard() {

    const router = useRouter();

    const [nombres, setNombres] = useState('');
    const [apellidos, setApellidos] = useState( '' );
    const [doc_tipo, setDoc_tipo] = useState( '');
    const [doc_numero, setDoc_numero] = useState('');
    const [rol, setRol] = useState(1);

    const [usuario , setUsuario] = useState('')
    const [password , setPassword] = useState('')
    const [new_password , setNew_password] = useState('')
    const [check_password , setCheck_password] = useState('')
    
    const [tab , setTab] = useState('datos')


    const [imagen , setImagen] = useState(undefined)

    const [selectedFile, setSelectedFile] = useState(undefined);
    
    const [sesion , setSesion] = useState({});



    const  filtrarCursosMatriculados = async (personasCursos, cursos, sesion) =>{
        let personasCursosFiltrados = []
        personasCursosFiltrados = personasCursos.filter((e) => e.idPersona == sesion.idPersona)

       

        let cursosFiltrados = []
        cursosFiltrados = cursos.filter((e) => personasCursosFiltrados.some((f) => f.idCurso == e.idCurso));
            

        return cursosFiltrados;
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

        var usuarioCambio = {
            nombre: nombres,
            apellido: apellidos,
            password: new_password,
            rol: rol
        }

        await PersonasApi.update(sesion.id, usuarioCambio).then((result)=>{
            var data = result.data[0]
            console.log(data)
            localStorage.setItem('sesion', JSON.stringify(data));
        });
    
    }
    
    const handleOnLoad = async () => {

        var sesionGuardada = await localStorage.getItem('sesion');
        var sesionJSON = JSON.parse(sesionGuardada);

        setSesion(sesionJSON);
        console.log(sesion);
        /*
        if(sesion){
    
            setUsuario(sesion.email)
            setPassword(sesion.password)
            setNombres(sesion.nombre)
            setApellidos(sesion.apellido)
            setDoc_tipo(sesion.tipoDocumento)
            setDoc_numero(sesion.dni)
        }*/
    }
    
    useEffect(() => {
        handleOnLoad();
        
    }, [usuario, password, nombres, apellidos, doc_numero, doc_numero]);
   
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
                                    <a className={tab == 'datos' ? 'nav-link active' : 'nav-link'  } href="#" onClick={ e => setTab('datos') }>Datos Personales</a>
                                </li>
                                <li className="nav-item">
                                    <a className={tab == 'cuenta' ? 'nav-link active' : 'nav-link'  } href="#" onClick={ e => setTab('cuenta') }>Cuenta</a>
                                </li>
                            </ul>
                        </div>
                        <div className={`${styles.tabs}`}>
                            { tab == 'cuenta' && (
                                <div id="datos_usuario" className="mb-3">
                                    <div className="row mb-3">
                                        <div className="col-md-6">
                                            <label htmlFor="inputUsuario" className="form-label">Usuario</label>
                                            <input type="text" className="form-control" id="inputUsuario"
                                                value={ usuario } 
                                                onChange={e => setUsuario(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="inputPassword" className="form-label">Contraseña Actual</label>
                                            <input type="password" className="form-control" id="inputPassword"
                                                value={ password } 
                                                onChange={e => setPassword(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="row row-gap-3">
                                        <div className="col-md-6">
                                            <label htmlFor="inputNewPassword" className="form-label">Nueva Contraseña</label>
                                            <input type="password" className="form-control" id="inputNewPassword"
                                                value={ new_password } 
                                                onChange={e => setNew_password(e.target.value)}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="inputRepeatPassword" className="form-label">Repetir Contraseña</label>
                                            <input type="password" className="form-control" id="inputRepeatPassword"
                                                value={ check_password } 
                                                onChange={e => setCheck_password(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div> 
                            )}
                            { tab == 'datos' && (
                                <div id="datos" className="pb-2">
                                  <div className="col-md-6">
                                    <label htmlFor="inputNombres" className="form-label">Nombres</label>
                                    <input type="text" className="form-control" id="inputNombres" aria-describedby="correoHelp" 
                                        value={ nombres }
                                        onChange={e => setNombres(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="inputApellidos" className="form-label">Apellidos</label>
                                    <input type="text" className="form-control" id="inputApellidos" 
                                        value={ apellidos } 
                                        onChange={e => setApellidos(e.target.value)}
                                    />
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="inputDocumentoTipo" className="form-label">Tipo de Documento</label>
                                    <select type="text" className="form-select" id="inputDocumentoTipo" 
                                        value={ doc_tipo } 
                                        onChange={e => setDoc_tipo(e.target.value)}
                                        required
                                    >
                                        <option value="DNI">DNI</option>
                                        <option value="Pasaporte">Pasaporte</option> 
                                        
                                    </select>
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="inputDocumentoNumero" className="form-label">Nro de Documento</label>
                                    <input type="text" className="form-control" id="inputDocumentoNumero"
                                        value={ doc_numero } 
                                        onChange={e => setDoc_numero(e.target.value)}
                                    />
                                </div>  

                                <div className="col-md-12">
                                    <label htmlFor="inputRol" className="form-label">ROL</label>
                                    <select type="text" className="form-select" id="inputRol" 
                                        value={ rol } 
                                        onChange={ e => setRol(e.target.value)}
                                        required
                                    >
        
                                        <option value={1}>usuario</option>
                                        <option value={2}>admin</option>
                                    </select>
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
