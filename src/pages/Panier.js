import React from 'react'
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import NavProd from '../components/NavProd';
import './Panier.css'
import Ima from '../images/Logo de café minimaliste crème verte.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import k from '../images/livraison Gratuite.png';

import Footer from '../components/Footer';
function Panier() {
    
  return (
    <div className='pm'>
    <NavProd/>
    <div className='contain'>
    <hr style={{ borderTop: '1px solid #000' }} />
    <MDBRow>
      <MDBCol md='7'>
     <h1 className='h'> Nous sommes votre destination de choix</h1>
      <br></br> <h4 className='p'>pour des grignons d"olive de qualité supérieure,<br></br> 
        provenant de notre propre ferme et transformés <br></br>dans notre usine de pointe.</h4>
      </MDBCol>
      <MDBCol md='5'>
       <img src={Ima} alt=''></img>
      </MDBCol>
    </MDBRow>
    </div>
    <div>
    
    <div className='part2'>
    <hr style={{ borderTop: '1px solid #000d1a' }} />
    <h1 style={{color:"black"}}>Nos Activités</h1>

    <h3 className='hhh'>Achats  |   Vende   |   Traitement </h3>
    <div className='cont1'>
<div>
    <div className='cont'>
      <div className='a'>
        <img className="ims" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1zyvoDxh9fh35AjXuUpVbMxgyjl_WdMu7oA&usqp=CAU" alt=""/>
      </div>
      <div className='a'>
      <img className="ims" src="https://www.bugeycotiere.fr/wp-content/uploads/2019/02/St-Rambert-Conand-Huilerie.jpg" alt=""/>
      </div>
      <div className='a'>
      <img className="ims" src="https://d2v9ipibika81v.cloudfront.net/uploads/sites/59/2016/10/amb.-trip-to-mahdia-750x464.jpg" alt=""/>
      </div></div>
      <div className='cont'>
      <div className='a'>
      <img className="ims" src="https://lh3.googleusercontent.com/p/AF1QipMIGYgiK3sOZSmCEyN5UerBn0cIsRQYv6w91y-w=s1600-w400" alt=""/>
      </div>
      <div className='a'>
      <img className="ims" src="https://www.algomtl.com/upload/el-ici-xQH6xAnD.jpg" alt=""/>
      </div>
      <div className='a'>
      <img className="ims" src="https://www.destockplus.com/upload/big-bag-grignon-voorrad-gWx84sAZ.jpg" alt=""/>
      </div>
    </div></div>
    <div className='par1'>
      <center>
   <h1 style={{ color: "#000d1a",
  fontWeight:"bold"}}>Découvrez Notre Passion</h1> 
   <h4 style={{color:"#000d1a"}}>Découvrez notre passion pour le des grognons d"olive de
     qualité supérieure et comment nous pouvons vous aider à améliorer la qualité de vos produits.</h4>
     </center></div>
     </div>
     <hr style={{ borderTop: '1px solid #000d1a' }} />
    </div>

    
    <div className='cont2'> 
    
      <div style={{paddingTop:"60px"}}>
      <h1>Nous livrons votre confiance à chaque commande.</h1>
      </div>
      <div style={{paddingTop:"10px", marginLeft:"20px"}}>
      <img  src={k}alt=""/>
      </div>
    </div>
    </div>
    
    <div className='part2'>
    <hr style={{ borderTop: '1px solid #000d1a' }} />
       <p>  <h5 className='hhh'>   NOM DE LA SOCIÉTÉ</h5>
        STTGO</p>

        <p><h5 className='hhh'> SECTEUR D’ACTIVITÉ</h5>
        Agro-alimentaire (huile d’olive)</p>

        <p> <h5 className='hhh'>MONTANT INVESTI</h5>
        1 320 000 USD</p>

        <p> <h5 className='hhh'> TAEF TYPE D’INVESTISSEMENT</h5>
        Prise de participation minoritaire dans le capital de la société STTGO et financement en dette mezzanine
        </p>
                    <hr style={{ borderTop: '1px solid #000d1a' }} />
    </div>

    <Footer/>
    </div>
  );
}

export default Panier
