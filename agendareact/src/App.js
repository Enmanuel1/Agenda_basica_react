import React, { Component } from 'react';
import './css/App.css'

//Handle components
import Modal from './Components/NewContact'
import ShowContact from './Components/ShowContact'
class App extends Component {
  render() {
    return <div className="App">
        <Modal />
        
        <div className="general-container">
          <div className="lateral-dock">
            <div className="add" id="add" onClick={this.modalEvent}>
              +
            </div>
          </div>
          <div className="visor">
            <ShowContact/>
          </div>
        </div>
      </div>;
  }
  modalEvent(){
    let modal = document.getElementById("modal")
    modal.setAttribute("open",true)
  }

}

export default App;
