import React , {Component} from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

class App extends Component{

  
  constructor(props){


    super(props);
    this.state = {
      name : ""
      
    }

    this.Click = this.Click.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  Click(e){
    e.preventDefault();

    const account = {
      useraccount: this.state.name
    }

    console.log(account);
  
    axios.post('http://localhost:5000/account/add', account)
      .then(res => console.log(res.data));

      this.setState({name : ""})
  }

  onChange(e){
    this.setState({name : e.target.value})
  }

  render(){
    return(
      <div className = 'App'>
        <br></br><br></br><br></br><br></br><br></br><br></br>

        <TextField onChange = {this.onChange} value = {this.state.name}/>
        

        <br></br><br></br><br></br><br></br><br></br><br></br>
        <Button variant="contained" color="primary" onClick = {this.Click}>
        Add
      </Button>

      </div>
    )
  };

}


export default App;
