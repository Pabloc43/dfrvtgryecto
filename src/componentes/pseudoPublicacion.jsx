import React from 'react'
import Comentario from './comentario';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'

export default function Publicacion(props) {
    let {imgSubio, imgUser, nombre, fecha, comentarios} = props
  return (
    <section className="hero">
    <div className="container">
     <div className="row">	
     
      <div className="col-lg-6 offset-lg-3">
       
       <div className="cardbox shadow-lg bg-white">
        
        <div className="cardbox-heading">
         <div className="dropdown float-right">

          <div className="dropdown-menu dropdown-scale dropdown-menu-right" role="menu" style={{position: "absolute", transform: "translate3d(-136px, 28px, 0px); top: 0px; left: 0px; will-change: transform"}}>
           <a className="dropdown-item" href="#">Hide post</a>
           <a className="dropdown-item" href="#">Stop following</a>
           <a className="dropdown-item" href="#">Report</a>
          </div>
         </div>
         <div className="media m-0">
          <div className="d-flex mr-3">
           <a href=""><img className="img-fluid rounded-circle" src={imgUser} alt="User"></img></a>
          </div>
          <div className="media-body">
           <p className="m-0">{nombre}</p>
           <small><span><i className="icon ion-md-pin"></i> Nairobi, Kenya</span></small>
           <small><span><i className="icon ion-md-time"></i> 10 hours ago</span></small>
          </div>
         </div>
        </div>
         
        <div className="cardbox-item">
         <img className="img-fluid" src={imgSubio} alt="Image"></img>
        </div>
        <div className="cardbox-base">
         <ul>
          <li><a><i className="fa fa-thumbs-up"></i></a></li>
          <li><a><span>{fecha}</span></a></li>
         </ul>			   
        </div>
         <details className="text-dark ">
          <summary className='list-style-none'>{comentarios.length} comentarios </summary>
          <ul>
            {comentarios.map((comentario, index) => {return (<Comentario key={index} usuarioComenta={comentario.userComent} contenido={comentario.contenido} imagen={comentario.IMGp} fecha={comentario.fecha}/>)})}
          </ul>
         </details>
         <input placeholder="Write a comment" type="text"></input>
          <button><FontAwesomeIcon icon={faCirclePlus} /></button>
        </div>		  
               
       </div>

      </div>
     </div>
   </section>
    )
}
