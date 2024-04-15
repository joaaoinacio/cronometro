import React, { Component } from 'react';
import './style.css'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      numero: 0,
      botao: 'Go'
    };

    this.timer = null;
    this.go = this.go.bind(this);
    this.clear = this.clear.bind(this);
  }

  go() {
    let state = this.state


    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
      state.botao = 'Go'
    }else{
      this.timer = setInterval(()=>{
        let state = this.state;
        state.numero += 0.1;
        this.setState(state);  
      },100)
      state.botao = 'Stop'      
    }
    this.setState(state);
  }


  clear() {
    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
    }
    let state = this.state;
    state.numero = 0;
    state.botao = 'Go';
    this.setState(state);

  }


  render() {
    return (
      
      <div className="container">
        <h1 className='header'>Cronômetro</h1>
        <img src={require('./assets/cronometro.png')} className="img" />
        <a className="timer">{this.state.numero.toFixed(1)}</a>
        <div className="areaBotao">
          <a className="botao" onClick={this.go}>{this.state.botao}</a>
          <a className="botao" onClick={this.clear}>Clear</a>
        </div>

      </div>
    );
  }
}

export default App;