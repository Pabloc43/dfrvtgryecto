import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './componentes/Header';
import Publicacion from './componentes/pseudoPublicacion';
import {useState} from "react"
import { useEffect } from 'react';

function App() {
  const [personas, setPersonas] = useState([]);


  useEffect(()=>{
    fetch("../data/objetos.json")
    .then(res => res.json()
    .then(data => setPersonas(data)))
  }, [])

 
  console.log(personas)
  return (
    <div className="App">
      <Header />
      <main className="container py-5">
        {personas.map((persona) => {
        return persona.publicaciones.map((publicacion, index) => 
        <Publicacion key={index} imgSubio={publicacion.imgS} imgUser={publicacion.imgP} nombre={publicacion.nameUser} fecha={publicacion.fecha}/>)
      })}
      </main>
    </div>
  );
}

export default App;
