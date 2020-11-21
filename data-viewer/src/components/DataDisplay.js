import React, { Component } from 'react';
import data from '../data'
import Navigator from './Navigator'


class DataDisplay extends Component {
  constructor(){
    super()

    this.state ={
        // name: '',       <-----useless code?
        // objNum:'',
        // from: '',
        // job_title:'',
        // employer:'',
        // favorite_movies:''
        
    }
   
  }
 
  render() {
        console.log(data[this.props.indexNum].name)
    return (
        <div id="data-display">
            <h1 id='name'>{data[this.props.indexNum].name.first} {data[this.props.indexNum].name.last}</h1>
            <br></br>
            <h3 id='from'><b>From</b>: {data[this.props.indexNum].city}</h3>
            <h3 id='job_title'><b>Job Title:</b> {data[this.props.indexNum].title}</h3>
            <h3 id='employer'><b>Employer:</b> {data[this.props.indexNum].employer}</h3>
            <br></br>
          <ol id='fav_movies'>{data[this.props.indexNum].favorite_movies}</ol>
          <h2 id='index25'>{this.props.indexNum}/25</h2>
        </div>
        
    );

  }


}

export default DataDisplay
