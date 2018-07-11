import React,{Component} from 'react'

class Contact extends Component{

    render(){
        return (
            <div className="tarjeta-contactos" >
                <p className="nombre">{this.props.nombre} {this.props.apellido}</p>
                <p className="apellido">{this.props.telefono}</p>
            </div>
        )
    }

}
export default Contact