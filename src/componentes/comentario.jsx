import React from 'react'

export default function Comentario(props) {
    let {usuarioComenta, contenido, imagen, fecha} = props
  return (
            <div class="people-nearby">
              
              <div class="nearby-user">
                <div class="row">
                  <div class="col-md-2 col-sm-2">
                    <img src={imagen} alt="user" class="profile-photo-lg"></img>
                  </div>
                  <div class="col-md-7 col-sm-7">
                    <h5><a href="#" class="profile-link">{usuarioComenta}</a></h5>
                    <p>{contenido}</p>
                    <p class="text-muted">{fecha}</p>
                  </div>
                  <div class="col-md-3 col-sm-3">
                    <button class="btn btn-primary pull-right">Add Friend</button>
                  </div>
                </div>
              </div>
            </div>
  )
}
