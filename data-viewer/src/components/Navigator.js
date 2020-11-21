import React, { Component } from 'react';
import '../App.css';
import data from '../data'
import DataDisplay from './DataDisplay'

class Navigator extends Component {
  constructor(){
    super()

    this.state ={
        indexNum:0
    }

    
  }
    
    prevClick=(e)=> {
    this.setState({
     index: this.state.indexNum--
    })
  }
    nextClick=(e)=> {
    this.setState({
       index: this.state.indexNum++
     })
    }

//     noNeg=()=> {
// if(this.state.indexNum<0){this.state.indexNum=0}

//     }  <---doesnt work
  
  render() {

    return (
        <div id='combo'>
      
        <DataDisplay indexNum={this.state.indexNum}/> 
    
        <div id="navigator">
            <button id='Previous'onClick={this.prevClick}>&#60; Previous </button>
            {/* <button id='Edit'onClick={this.editClick}> Edit </button>
            <button id='Delete'onClick={this.deleteClick}> Delete </button>
            <button id='New' onClick={this.newClick}> New </button> */}
            <div id='nav-spacer'></div>
            <button id='Next' onClick={this.nextClick}> Next &#62;</button>
        </div>
        </div>
    );

  }


}

export default Navigator