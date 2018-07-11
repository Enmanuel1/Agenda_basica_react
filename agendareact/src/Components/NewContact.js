import React,{Component} from 'react'
import '../css/NewContact.css'
class NewContact extends Component {
  constructor() {
    super();
    this.URL = "http://www.raydelto.org/itla/agenda/";
    this.sendData = this.sendData.bind(this);
    this.send = document.getElementById("send");
    this.getFormData = this.getFormData.bind(this);
  }
  render() {
    return (
      <dialog className="modal" id="modal">
        <div className="modal-main-container" data-type="modal">
          <div className="modal-container">
            <div className="modal-container-header">
              <p id="close" onClick={this.closeModalEvent}>
                X
              </p>
            </div>
            <div className="title">Agregar un contacto</div>
            <div className="modal-container-form">
              <input type="text" placeholder="Nombre" id="nombre" />
              <input type="text" placeholder="Apellido" id="apellido" />
              <input type="text" placeholder="Numero telefonico" id="numero" />
              <button id="send" className="send" onClick={this.getFormData}>
                Guardar contacto
              </button>
            </div>
          </div>
        </div>
      </dialog>
    );
  }
  /*Obtener los datos del formulario y pasarlo al metodo que envia los datos*/
  getFormData() {
    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellido");
    let numero = document.getElementById("numero");
    const post = {
      nombre: nombre.value,
      apellido: apellido.value,
      telefono: numero.value
    };
    this.sendData(post);
  }
  /*Envia los datos por el metodo post*/
  sendData(post) {
    const options = {
      method: "POST",
      body: JSON.stringify(post)
    };
    fetch(this.URL, options)
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(error => console.error(`Error ${error}`));
  }

  closeModalEvent() {
    let modal = document.getElementById("modal");
    modal.removeAttribute("open");
  }
}

export default NewContact