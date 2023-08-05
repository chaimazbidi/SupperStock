import React,{Component}  from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import {RiAccountPinCircleFill} from "react-icons/ri"

export default class Login extends Component {
  constructor(props){
    super(props);
this.state={
  email:"",
  password:"",
}; 
this.handleSubmit=this.handleSubmit.bind(this); 
}
handleSubmit(e){
  e.preventDefault();
  const{email,password}=this.state;
  console.log(email,password);
  fetch("http://localhost:8000/login-user",{
    method:"POST",
    crossDomain:true,
    headers:{
      "Content-Type":"application/json",
      Accept:"application/json",
      "Access-Control-Allow-Origin":"*",
    },
    body:JSON.stringify({
      email,
      password,
    }),
  })
  .then((res)=>res.json())
  .then((data)=>{
    console.log(data,"userRegister");
    if(data.status ==="ok"){
      alert("login successful")
      window.location.href="./Produits";
    }
  });
}
  
render(){
  return (
    <div className="body">
    <div className="login">
      <Form  className="form2" onSubmit={this.handleSubmit}>
      <center><RiAccountPinCircleFill size={70} color={ "rgb(4, 14, 3)"}/></center>
        <Form.Group size="lg" controlId="email">
          <Form.Label><b>Email</b></Form.Label>
          <Form.Control
            autoFocus
            type="email"
            
            onChange={(e)=>this.setState({email:e.target.value})}
        
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label  style={{marginTop:"15px" ,}}><b>Password</b></Form.Label>
          <Form.Control
            type="password"
            
            style={{marginBottom:"15px"}}
            onChange={(e)=>this.setState({password:e.target.value})}
        
          />
        </Form.Group>
        <center><a className="hr2" href="/Signup">Vous n'avez pas un compte ? Créer un compte ici </a></center>
        <Button style={{backgroundColor:"rgb(4, 14, 3)",borderColor:"rgb(4, 14, 3)",color:"#fff"}}className="btn2"block="true" size="lg" type="submit" >
          Login
        </Button>
      </Form>
    </div></div>
  );
}}