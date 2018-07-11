import React, {Component} from 'react'
import '../css/ShowContact.css'
import Contact from '../Components/Contact'
class ShowContact extends Component {
    constructor(){
        super()
        this.URL = "http://www.raydelto.org/itla/agenda/";
        this.state = {
            contacto : []
        }
    }
    componentDidMount(){
        this.getData()
    }
    render(){
        return(
            <div className= "content" id = "content">
            {
                this.state.contacto.map(contact =>{
                     return(
                        <Contact
                         nombre = {contact.nombre} 
                         apellido = {contact.apellido} 
                         telefono = {contact.telefono} 
                         key={contact.telefono+ "x" + contact.nombre +contact.apellido+"z"}
                         />
                    )
                })
            }   
            </div>
        )
    }
    getData(){
     fetch(this.URL)
      .then(response => response.json())
      .then(response => {
        this.setState({
            contacto : response
        })
      })
    }

}

export default ShowContact