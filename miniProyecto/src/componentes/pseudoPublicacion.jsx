import React from 'react'

export default function Publicacion(props) {
    let {imgSubio, imgUser, nombre, fecha} = props
  return (
    <section className="hero">
    <div className="container">
     <div className="row">	
     
      <div className="col-lg-6 offset-lg-3">
       
       <div className="cardbox shadow-lg bg-white">
        
        <div className="cardbox-heading">
         <div className="dropdown float-right">
          <button className="btn btn-flat btn-flat-icon" type="button" data-toggle="dropdown" aria-expanded="false">
           <em className="fa fa-ellipsis-h"></em>
          </button>
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
         <ul className="float-right">
          <li><a><i className="fa fa-comments"></i></a></li>
          <li><a><em className="mr-5">12</em></a></li>
          <li><a><i className="fa fa-share-alt"></i></a></li>
          <li><a><em className="mr-3">03</em></a></li>
         </ul>
         <ul>
          <li><a><i className="fa fa-thumbs-up"></i></a></li>
          <li><a href="#"><img src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/3.jpeg" className="img-fluid rounded-circle" alt="User"></img></a></li>
          <li><a href="#"><img src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/1.jpg" className="img-fluid rounded-circle" alt="User"></img></a></li>
          <li><a href="#"><img src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/5.jpg" className="img-fluid rounded-circle" alt="User"></img></a></li>
          <li><a href="#"><img src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/2.jpg" className="img-fluid rounded-circle" alt="User"></img></a></li>
          <li><a><span>{fecha}</span></a></li>
         </ul>			   
        </div>
        <div className="cardbox-comments">
         <span className="comment-avatar float-left">
          <a href=""><img className="rounded-circle" src="http://www.themashabrand.com/templates/bootsnipp/post/assets/img/users/6.jpg" alt="..."></img></a>                            
         </span>
         <div className="search">
          <input placeholder="Write a comment" type="text"></input>
          <button><i className="fa fa-camera"></i></button>
         </div>
        </div>		  
               
       </div>

      </div>
      <div className="col-lg-3">
       <div className="shadow-lg p-4 mb-2 bg-white author">
        <a href="http://www.themashabrand.com/">Get more from themashabrand.com</a>
        <p>Bootstrap 4.1.0</p>
       </div>
      </div>
       
     </div>
    </div>
   </section>
    )
}
