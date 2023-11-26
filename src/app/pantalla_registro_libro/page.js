"use client";
import  { useEffect, useState } from 'react';
import styles from './page.module.css';
import Input from '@/components/Input/Input';
import LibrosApi from '../../api/libros.js'

const pantalla_registro_libro = () => {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [isbn, setIsbn] = useState('');
  const [serieOTipo, setSerieOTipo] = useState('');
  const [anio, setAnio] = useState('');
  const [editorial, setEditorial] = useState('');

  const submitForm = async (event) => {
    event.preventDefault(event);

    var libro = {
      titulo: titulo,
      autor: autor,
      ISBN: isbn,
      categoria: serieOTipo,
      anio: anio,
      editorial: editorial
    }

    await LibrosApi.create(libro).then((result)=>{
      
        var data = result.data
        console.log(data)
    });

}

  useEffect(() => {
    
  }, []); 
  

  return (
    <div className={styles.container}>
      <div className={styles.contenido}>
        <div className={styles.containerTitulo}>
          <h1 className={styles.titulo}>Registro de Libro</h1>
        </div>

        <form method="post" onSubmit={submitForm}>

          <div className="col-md-6">
            <label htmlFor="inputUsuario" className="form-label">titulo</label>
            <input type="text" className="form-control" id="inputUsuario"
                value={ titulo } 
                onChange={e => setTitulo(e.target.value)}
                required
            />
          </div>
          <div className="col-md-6">
              <label htmlFor="inputNewPassword" className="form-label">autor</label>
              <input type="password" className="form-control" id="inputNewPassword"
                  value={ autor } 
                  onChange={e => setAutor(e.target.value)}
                  required
          />
          </div>
          <div className="col-md-6 offset-md-6">
              <label htmlFor="inputRepeatPassword" className="form-label">ISBN</label>
              <input type="password" className="form-control" id="inputRepeatPassword"
                  value={ isbn } 
                  onChange={e => setIsbn(e.target.value)}
                  required
          />
          </div>
          <div className="col-md-6 offset-md-6">
              <label htmlFor="inputRepeatPassword" className="form-label">Categoria</label>
              <input type="password" className="form-control" id="inputRepeatPassword"
                  value={ serieOTipo } 
                  onChange={e => setSerieOTipo(e.target.value)}
                  required
          />
          </div>
          <div className="col-md-6 offset-md-6">
              <label htmlFor="inputRepeatPassword" className="form-label">Año</label>
              <input type="password" className="form-control" id="inputRepeatPassword"
                  value={ anio } 
                  onChange={e => setAnio(e.target.value)}
                  required
          />
          </div>
          <div className="col-md-6 offset-md-6">
              <label htmlFor="inputRepeatPassword" className="form-label">Editorial</label>
              <input type="password" className="form-control" id="inputRepeatPassword"
                  value={ editorial } 
                  onChange={e => setEditorial(e.target.value)}
                  required
          />
          </div>

          <button type="submit" className={styles.guardarButton}>
            Guardar
          </button>
        </form>

      </div>
    </div>
  );
};

export default pantalla_registro_libro;
