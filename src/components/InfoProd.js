import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './InfoProd.css';
import { Container, Image } from "react-bootstrap";
import { Card,Col,Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import Image3 from '../images/1.PNG';
import Image4 from '../images/2.PNG';
import Image5 from '../images/3.PNG';
import Ima from '../images/4.PNG';
import Modal from "./Modal";
import Modal1 from "./Modal1";
import Modal2 from "./Modal2";
import Modal3 from "./Modal3";
import ModAppel from "./ModAppel";
import Table from "react-bootstrap/Table";
import {MdMapsHomeWork,MdPhoneForwarded,MdOutlineAddShoppingCart} from "react-icons/md"

export default function InfoProd(){
  const [openModal, setOpenModal] = useState(false);
  const [openModal1, setOpenModal1] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [openModal3, setOpenModal3] = useState(false);
  const [commande, setCommande] = useState([]);

  const addToCart = (nouvelleCommande) => {
    setCommande([...commande, nouvelleCommande]);
  };

 const removeFromCart = (index) => {
    const nouvellesCommandes = [...commande];
    nouvellesCommandes.splice(index, 1);
    setCommande(nouvellesCommandes);
  };

  const [open, setOpenM] = useState(false);
 return(
<>  

<div>
  <Image src="https://wallpapercave.com/wp/wp7289846.jpg" className="img"></Image>
  <h1 className="t">Société Tunisienne de Traitement des Grignons d'Olives </h1>
  <p className="t1"> Les produits fourni par STTGO est d'une qualité exceptinnelle</p>
  <center><h1 style={{marginTop:"50px",}}>NOTRE GAMME DES PRODUITS AROMATISÉES</h1></center>
</div>
<Container className="content">
<div className="d">
<Image src={Ima} className="im"></Image>
<h4 style={{marginLeft:"40px",fontWeight:"bold"}}>Grignon Epouse</h4>
</div>
<div className="d">
<Image src={Image3} className="im"></Image>
<h4 style={{marginLeft:"60px",fontWeight:"bold"}}>Noyau Sec</h4>
</div>
<div className="d">
<Image src={Image4}  className="im"></Image>
<h4 style={{marginLeft:"35px",fontWeight:"bold"}}>Huile de Grignon</h4>
</div>
<div className="d">
<Image src={Image5}  className="im"></Image>
<h4 style={{marginLeft:"55px",fontWeight:"bold"}}>Pulpe Noire</h4>
</div>
</Container>
<Container>
<Row id="commande" >
          <Col className="col" >
          <Card style={{ width: '16rem' ,marginLeft:'80px',backgroundColor:"rgba(110, 165, 99, 0.438)"}} className="card">
        <Card.Img variant="top" src="https://www.icrc.org/sites/default/files/styles/amp_thumbnail_image_1-1/public/document/image/lebanon-health-olives.jpg" />
        <Card.Body>
          <Card.Title>Grignon Epouse</Card.Title>
          <Card.Text>Les grignons d'olive sont un sous-produit du processus d'extraction de l'huile d'olive composé des peaux, des résidus de la pulpe et des fragments. 
          </Card.Text>
          <FiShoppingCart className="h" size={23} onClick={()=> setOpenModal(true)}/>
        </Card.Body>
      </Card>
      <Card style={{ width: '16rem' ,marginLeft:'135px',backgroundColor:"rgba(110, 165, 99, 0.438)"}} className="card">
        <Card.Img variant="top" src="https://www.espaceagro.com/_affaire/237250.jpg" style={{width:"254px",height:"254px" }} />
        <Card.Body>
          <Card.Title>Noyau sec d'olive</Card.Title>
          <Card.Text>
            	
Les noyaux d’olives sont le sous-produit du pressage de l’olive et de la séparation
des restes de pulpe à l’aide de machines de centrifugation modernes.
          </Card.Text>
         <Link href="#"> <FiShoppingCart className="h" size={23} onClick={()=> setOpenModal1(true)}/></Link>
        </Card.Body>
      </Card>
      <Card style={{ width: '16rem' ,marginLeft:'185px',backgroundColor:"rgba(110, 165, 99, 0.438)"}} className="card">
        <Card.Img variant="top" src="https://www.zinagroup.com/wp-content/uploads/2016/05/huile.jpg" style={{width:"254px",height:"254px" }} />
        <Card.Body>
          <Card.Title>Huile de grignon</Card.Title>
          <Card.Text>
          l’huile de grignons d’olive raffinée est mélangée à des huiles vierges ou vierges extra qui lui apportent la saveur, la couleur et les arômes.
          </Card.Text>
         <Link href="#" > <FiShoppingCart className="h" size={23} onClick={()=> setOpenModal2(true)}/></Link>
        </Card.Body>
      </Card>
      <Card style={{ width: '16rem',marginLeft:'245px' ,backgroundColor:"rgba(110, 165, 99, 0.438)"}} className="card">
        <Card.Img variant="top" src="https://drive.labelenergie.com/2847/product.jpg" style={{width:"254px",height:"254px"}}/>
        <Card.Body>
          <Card.Title>Puple noire d'olive</Card.Title>
          <Card.Text>
          l’huile de grignons d’olive raffinée est mélangée à des huiles vierges ou vierges extra qui lui apportent la saveur, la couleur et les arômes.
        
          </Card.Text>
         <Link href="#" > <FiShoppingCart className="h" size={23} onClick={()=> setOpenModal3(true)}/></Link>
        </Card.Body>
      </Card>
          </Col>
        </Row>
      <div >
      <center><p style={{ marginBottom:"70px"}}><h1 style={{marginTop:"90px", marginBottom:"10px"}}>SuperStock.net DISTRIBUE & EXPORTE SES PRODUITS VERS TOUS LES CONTINENTS,</h1> EN METTANT A LA DISPOSTION DE SES CLIENTS UNE PANOPLIE COMPLETE DE MOYENS DE TRANSPORT ET DE CONDITIONNEMENT:</p></center>
      <Container className="content" >

<div className="d1">
<Image src="https://www.miniplanes.fr/images/thumbnails/products/458047/540x480/camion-citerne-116-24gh-22497-22505.png" className="im1"></Image>
<h4 style={{marginLeft:"60px",fontWeight:"bold"}}>Camion-citerne</h4>
</div>
<div className="d1">
<Image src="https://maritima.com/wp-content/uploads/2018/06/Flexitank.jpg" className="im1"></Image>
<h4 style={{marginLeft:"95px",fontWeight:"bold"}}>Flexitank</h4>
</div>
<div className="d1">
<Image src="https://www.tbaplast.cz/editor/image/eshop_products/960020_60b53f283cdf2_l.jpg"  className="im1"></Image>
<h4 style={{marginLeft:"85px",fontWeight:"bold"}}>IBC container</h4>
</div>
<div className="d1">
<Image src="https://img.directindustry.fr/images_di/photo-m2/82241-3223879.jpg"  className="im1"></Image>
<h4 style={{marginLeft:"60px",fontWeight:"bold"}}>Fût métallique</h4>
</div>
</Container>
      </div>      
      <center>
        <p style={{
        padding:"10px 0 20px 0",
        color:"black",
        backgroundColor:"rgba(110, 165, 99, 0.438)",
        marginBottom:"0" ,
        marginTop:"40px",
        }}>
          <h1 style={{marginTop:"30px", 
                      marginBottom:"10px"}}>
             PASSER COMMANDE ?</h1>
             POUR PASSER UNE COMMANDE, VEUILLEZ </p></center>
             <Container className="content" style={{
                                            backgroundColor:"rgba(110, 165, 99, 0.438)",
                                          height:"auto", 
                                        
                                          paddingBottom:"40px",
                                          paddingTop:"30px",
                                        
                                          boxShadow:" 0 4px 8px 0 rgba(52, 109, 19, 0.555), 0 6px 20px 0 rgba(40, 87, 8, 0.219)",
                                          marginBottom:"50px"
                                          
                                          }} >
<div className="d1">
  <div className="cercle" style={{height:"120px",
   width:"120px" ,
   backgroundColor:"rgb(144, 184, 144)",
   borderRadius:" 80px",
  
   marginLeft: "70px",
   marginBottom:"30px",
   }}><a href="/Panier" className="com" ><MdMapsHomeWork size={60} style={{marginTop:"34px",marginLeft:"28px"}}/></a></div>
<h4 style={{marginLeft:"67px"}}>Vister Nous </h4>

</div>
<div className="d1">
<div className="cercle" style={{
  height:"120px",
   width:"120px" ,
   backgroundColor:"rgb(144, 184, 144)",
   borderRadius:" 80px",
  
   marginLeft: "105px",
   marginBottom:"30px",
   }}><MdPhoneForwarded size={60} onClick={()=> setOpenM(true)} className="com" style={{marginTop:"34px",marginLeft:"28px"}}/></div>
<h4 style={{marginLeft:"95px"}}>Appeler Nous </h4>
</div>
<div className="d1">
<div  className="cercle"style={{
  height:"120px",
   width:"120px" ,
   backgroundColor:"rgb(144, 184, 144)",
   borderRadius:" 80px",

   marginLeft: "130px",
   marginBottom:"30px",
   }}><a href="#commande" className="com" ><MdOutlineAddShoppingCart size={60} style={{marginTop:"34px",marginLeft:"28px"}}/></a></div>
<h4 style={{marginLeft:"85px" }}>Commander En Ligne</h4>
</div>
</Container>
</Container>
<div>
  
<div id='panier'>
   <center>   <h1>Panier d'achat</h1></center>
      
        

          <div className="tableau">
           
            <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Produit</th>
                <th>Quantité (en thonne)</th>
                <th>Moyens de transport</th>
              </tr>
            </thead>
            <tbody>
             
              {commande.map((c, index) => (
                 <tr >
                <td>{index}</td>
                <td><img src={c.image} alt="" style={{width:"120px",height:"100px"}}/></td>
                <td>{c.quantite}</td>
                <td>{c.adresse} <button style={{backgroundColor:"red",marginLeft:"350px"}} onClick={() => removeFromCart(index)}>Supprimer</button></td>
                 </tr>
                ))}
                
              </tbody>
              </Table></div>
        
      
    </div>


</div>
<Modal open={openModal} onClose={()=>setOpenModal(false)} addToCart={addToCart} />
<ModAppel open={open} onClose={()=>setOpenM(false)}/>
<Modal1 open={openModal1} onClose={()=>setOpenModal1(false)}/>
<Modal2 open={openModal2} onClose={()=>setOpenModal2(false)}/>
<Modal3 open={openModal3} onClose={()=>setOpenModal3(false)}/>
</>
  );
}