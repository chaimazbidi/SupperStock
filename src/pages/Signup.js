import React,{Component} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {RiAccountPinCircleFill} from "react-icons/ri"
import './Signup.css'

export default class Signup extends Component {
  constructor(props){
    super(props);
this.state={
  nom:"",
  prenom:"",
  telephone:"",
  email:"",
  password:"",
}; 
this.handleSubmit=this.handleSubmit.bind(this);   
  }
  handleSubmit(e){
    e.preventDefault();
    const{nom,prenom,telephone,email,password}=this.state;
    console.log(nom,prenom,telephone,email,password);
  fetch("http://localhost:8000/register",{
    method:"POST",
    crossDomain:true,
    headers:{
      "Content-Type":"application/json",
      Accept:"application/json",
      "Access-Control-Allow-Origin":"*",
    },
    body:JSON.stringify({
      nom,
      prenom,
      telephone,
      email,
      password,
    }),
  })
  .then((res)=>res.json())
  .then((data)=>{
    console.log(data,"userRegister");
  });
  }
 

render(){
  return (
    <div className="login1">
      <Form className="form1" onSubmit={this.handleSubmit}>
      <center><RiAccountPinCircleFill size={40} color={ "rgb(4, 14, 3)"}/></center>
<center><h2>Bienvenue</h2></center>
<center><p>Cher client pour créer un compte veuillez entre les coordonnées suivantes</p></center>
        <Form.Group size="lg" controlId="email">
          <Form.Label><b>Nom</b></Form.Label>
          <Form.Control
            
            type="text"
            
            onChange={(e)=>this.setState({nom:e.target.value})}
          />
        </Form.Group>
        <Form.Group size="lg" >
          <Form.Label  style={{marginTop:"5px" ,}}><b>Prénom</b></Form.Label>
          <Form.Control
            type="text"
            
            style={{marginBottom:"5px"}}  
            onChange={(e)=>this.setState({prenom:e.target.value})}   
          />
        </Form.Group>
        <Form.Group size="lg" >
          <Form.Label  style={{marginTop:"5px" ,}}><b>Numéro téléphone</b></Form.Label>
          <Form.Control
            type="text"
            
            style={{marginBottom:"5px"}}   
            onChange={(e)=>this.setState({telephone:e.target.value})}  
          />
        </Form.Group>
        <Form.Group size="lg" >
          <Form.Label  style={{marginTop:"5px" ,}}><b>E-mail</b></Form.Label>
          <Form.Control
            type="email"
            
            style={{marginBottom:"5px"}}     
            onChange={(e)=>this.setState({email:e.target.value})}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label  style={{marginTop:"5px" ,}}><b>Mot de passe</b></Form.Label>
          <Form.Control
            type="password"
            
            style={{marginBottom:"5px"}}
            onChange={(e)=>this.setState({password:e.target.value})}
          />
        </Form.Group>
        <center><a className="hr1" href="/Login">Vous avez déja un compte ? </a></center>
        <Button style={{backgroundColor:"rgb(4, 14, 3)",borderColor:"rgb(4, 14, 3)",color:"#fff"}}className="btn1"block="true" size="lg" type="submit" >
          Login
        </Button>
      </Form>
    </div>
  );
}}