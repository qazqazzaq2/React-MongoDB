import React , {Component} from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';

var sha256 = require('js-sha256');



class App extends Component{

 
  
  constructor(props){

    super(props);
    this.state = {
      name : "" ,
      password : "" ,
      repassword : "" ,
      showPassword: false ,
      showPassword2: false 
      
    }
     
    this.Click = this.Click.bind(this);
    this.onChangeUser = this.onChangeUser.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.Reset = this.Reset.bind(this);
    this.onChangerePassword = this.onChangerePassword.bind(this);
    this.ShowPasswords = this.ShowPasswords.bind(this);
    this.ShowPasswords2 = this.ShowPasswords2.bind(this); 
  
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


  

  ShowPasswords(){
    this.setState({showPassword : ! this.state.showPassword})
  }

  ShowPasswords2(){
    this.setState({showPassword2 : ! this.state.showPassword2})
  }

  Reset(e){
    e.preventDefault();
    this.setState({name : "" , password : "" , repassword : ""})
  }

  
  
// HTML
  render(){
    
    return(
      <div className = 'UsernameBox'>
        <br></br><br></br><br></br><br></br><br></br><br></br>
        
        <TextField onChange = {this.onChangeUser} value = {this.state.name} helperText="Character or Digit 4-16" label="Username" />

    
        <br></br><br></br>
        <FormControl>
        <InputLabel htmlFor="adornment-password">Password</InputLabel>
        <Input
          id="adornment-password"
          type={this.state.showPassword ? 'text' : 'password'}
          value={this.state.password}
          onChange = {this.onChangePassword}
          endAdornment={
            <InputAdornment position="end">
              <IconButton aria-label="Toggle password visibility" onClick={this.ShowPasswords}>
                {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
        <br></br><br></br>

        <FormControl>
        <InputLabel htmlFor="adornment-password">Re-Password</InputLabel>
        <Input
          id="adornment-password"
          type={this.state.showPassword2 ? 'text' : 'password'}
          value={this.state.repassword}
          onChange = {this.onChangerePassword}
          endAdornment={
            <InputAdornment position="end">
              <IconButton aria-label="Toggle password visibility" onClick={this.ShowPasswords2}>
                {this.state.showPassword2 ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
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
