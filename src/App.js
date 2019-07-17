import React , {Component} from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
var sha256 = require('js-sha256');

class App extends Component{

 
  
  constructor(props){

    super(props);
    this.state = {
      name : "" ,
      password : "" ,
      repassword : "" ,
      cc : ""
    }
    this.Click = this.Click.bind(this);
    this.onChangeUser = this.onChangeUser.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.Reset = this.Reset.bind(this);
    this.onChangerePassword = this.onChangerePassword.bind(this);
  }


  Click(e){
    e.preventDefault();

    this.lengthname = this.state.name.length ;
    this.lengthpassword = this.state.password.length ;

    if(this.lengthname < 4 || this.lengthname > 16){
      alert("Character or Digit 4-16");
    }
    else if(this.lengthpassword < 8 || this.lengthpassword > 16){
      alert("Password Character or Digit 8-16");
    }
    else if(this.state.password !== this.state.repassword){
      alert("Password not Math");
    }

    else{
  
    
      const account = {
        useraccount: this.state.name , 
        password: sha256(this.state.password)
      }
  
    axios.post('http://localhost:5000/account/add', account )
      .then(res => console.log(res.data));

      this.setState({name : "" , password : "" , repassword : ""})
      alert("สมัครสำเร็จ !");
    }
  }




  onChangeUser(e){
    this.setState({name : e.target.value})
  }



  onChangePassword(e){
    this.setState({password : e.target.value})
  }

  onChangerePassword(e){
    this.setState({repassword : e.target.value})
  }


  

  Reset(e){
    e.preventDefault();
    this.setState({name : "" , password : "" , repassword : ""})
  }

  


  render(){
    return(
      <div className = 'App'>
        <br></br><br></br><br></br><br></br><br></br><br></br>
        <p>Username : </p>
        <TextField onChange = {this.onChangeUser} value = {this.state.name} helperText="Character or Digit 4-16"/>
        <br></br><br></br>
        <p>Password : </p>
        <TextField onChange = {this.onChangePassword} value = {this.state.password} type="password" helperText="Character or Digit 8-16"/>
        <br></br><br></br>

        <p>Re-Password : </p>
        <TextField value = {this.state.repassword}  onChange = {this.onChangerePassword} type="password" helperText="Character or Digit 8-16"/>
        <br></br><br></br>

        <br></br><br></br><br></br>
        <Button variant="contained" color="primary" onClick = {this.Click}>
        Login
      </Button>
      &nbsp; &nbsp;
      <Button variant="contained" color="primary" onClick = {this.Reset}>
        Reset
      </Button>

      </div>
    )
  };

}


export default App;
