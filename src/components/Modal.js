
import React ,{useState} from 'react'

import './Modal.css';


const Modal = ({open, onClose, addToCart}) => {
const [nom,setNom]=useState('')
const [prenom,setPrenom]=useState('')
const [telephone,setTelephone]=useState('')
const [adresse,setAdresse]=useState('')
const [quantite,setQuantite]=useState('')
const [transport,setTransport]=useState('')
const [paiement,setPaiement]=useState('')

const handleSubmit1 = (event) => {
  event.preventDefault();
 
  const nouvelleCommande = {
    nom,
    prenom,
    telephone,
    adresse,
    quantite,
    transport,
    paiement,
    image: 'https://www.icrc.org/sites/default/files/styles/amp_thumbnail_image_1-1/public/document/image/lebanon-health-olives.jpg',
  };
 addToCart(nouvelleCommande);
};
const handleSubmit = (event) => {
  event.preventDefault();
  const formData = {
    nom,
    prenom,
    telephone,
    adresse,
    quantite,
    transport,
    paiement

  
  }
   // Afficher les données du formulaire dans la console
   console.log(formData);
  // envoyer les données à votre backend via une requête AJAX ou fetch
  fetch("http://localhost:8000/commande",{
    method:"POST",
    crossDomain:true,
    headers:{
      "Content-Type":"application/json",
      Accept:"application/json",
      "Access-Control-Allow-Origin":"*",
    },
    body:JSON.stringify(formData),
  })
  .then((res)=>res.json())
  .then((data)=>{
    console.log('Réponse du serveur :', data)
  });
}
   if(!open) return null;

  return (
    <>
          <div className='overlay'>
          
            <div className='modalContainer'> 
            <div>
             
                        <img style={{marginTop:"15px",width:"270px",height:"270px"}}
                         src="https://www.icrc.org/sites/default/files/styles/amp_thumbnail_image_1-1/public/document/image/lebanon-health-olives.jpg" 
                         alt=''
                         />
                      
                        <div><center> <h2 style ={{color:'rgb(36, 80, 29)',marginTop:"15px"}} >Grignon Epouse 1</h2></center></div>  </div>    
                        <div className='modalRight'>
                        <h3 style={{marginLeft:"70px"}}><b>vous voudrez passe une commande !</b></h3> 
                        <p className='closeBtn' onClick={onClose}><b>X</b></p>
                        <form onSubmit={handleSubmit}>
                              <div className='content' style={{marginLeft:"70px"}}>   
                                <div>
                                
                               <label><b>Nom *</b><br></br> 
                               <input 
                               type="text"
                                style={{ marginBottom:"10px",width:"130px" ,marginRight:"10px",height:"30px"}}
                                value={nom}
                                onChange={(event)=>setNom(event.target.value)}
                                /></label> 
                                <label><b>Prénom *</b> <br></br>
                                <input
                                 type="text" 
                                 style={{ marginBottom:"10px",width:"130px",height:"30px"}}
                                 value={prenom}
                      onChange={(event) => setPrenom(event.target.value)}
                                 /></label> 
                               <br></br>  <label><b>Téléphone * </b><br></br> 
                                <input 
                                type="text" 
                                style={{ marginBottom:"10px",height:"30px",width:"130px",marginRight:"10px"}}
                                value={telephone}
                      onChange={(event) => setTelephone(event.target.value)}
                                /></label>
                               <label><b>Adresse *</b> <br></br> 
                                <input type="text" 
                                 style={{ marginBottom:"10px",width:"130px",height:"30px"}}
                                 value={adresse}
                      onChange={(event) => setAdresse(event.target.value)}
                                 /></label>
                               <br></br>  <label><b>Quantité * </b><br></br>  <input
                                type="Text"
                                 placeholder="en ton"
                                  style={{ marginBottom:"10px",height:"30px",width:"130px",marginRight:"10px"}}
                                  value={quantite}
                                  onChange={(event) => setQuantite(event.target.value)}
                                 /></label>
                               <label><b> Moyens de transport</b> <br/>
                               <select
                                style={{width:"130px",height:"30px"}}
                                value={transport}
                         onChange={(event) => setTransport(event.target.value)}
                               >
                                  <option value="someOption">Camion-ceterne</option>
                                  <option value="Flexitank">Flexitank</option>
                                  <option value="IBC container">IBC container</option>
                                  <option value="Fut metalique ">Fut metalique</option>
                                </select></label>
                                <br></br>  <p><b>Paiement *</b> <br></br> <label>carte bancaire <input
                                 type="radio"  name="myRadio" style={{marginRight:"15px"}}
                                 value={paiement}
                          onChange={(event) => setPaiement(event.target.checked)}  /></label>
                                <label>Lors de livraison <input type="radio"  name="myRadio" defaultChecked={true}/></label> </p>
                              </div>
                            </div>
                            <div className='btnContainer'>
                               <input className='btnPrimary' type='submit' value='Passer commande' onClick={handleSubmit1}/>
                            </div></form>
                            
                        </div>
          </div></div>
      
    </>
  )
}

export default Modal;
