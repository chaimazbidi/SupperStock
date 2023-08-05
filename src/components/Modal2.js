
import React  from 'react'

import './Modal.css';


const Modal = ({open, onClose}) => {


   if(!open) return null;

  return (
    <>
          <div className='overlay'>
          
            <div className='modalContainer'> 
            
                        <img style={{marginTop:"65px",width:"270px",height:"270px"}} src="https://www.zinagroup.com/wp-content/uploads/2016/05/huile.jpg" alt=''/>
                       
                        <div className='modalRight'>
                        <h3 style={{marginLeft:"70px"}}><b>vous voudrez passe une commande !</b></h3> 
                        <p className='closeBtn' onClick={onClose}><b>X</b></p>
                        
                              <div className='content' style={{marginLeft:"70px"}}>   
                                <div>
                                
                               <label><b>Nom *</b><br></br> <input type={Text} style={{ marginBottom:"10px",width:"130px" ,marginRight:"10px",height:"30px"}}/></label> 
                                <label><b>Prénom *</b> <br></br><input type={Text} style={{ marginBottom:"10px",width:"130px",height:"30px"}}/></label> 
                               <br></br>  <label><b>Téléphone * </b><br></br>  <input type={Text} style={{ marginBottom:"10px",height:"30px",width:"130px",marginRight:"10px"}}/></label>
                               <label><b>Adresse *</b> <br></br>  <input type={Text} style={{ marginBottom:"10px",width:"130px",height:"30px"}}/></label>
                               <br></br>  <label><b>Quantité * </b><br></br>  <input type={Text} placeholder="en ton" style={{ marginBottom:"10px",height:"30px",width:"130px",marginRight:"10px"}}/></label>
                               <label><b> Moyens de transport</b> <br/><select style={{width:"130px",height:"30px"}}>
                                  <option value="someOption">Camion-ceterne</option>
                                  <option value="otherOption">Flexitank</option>
                                  <option value="otherOption">IBC container</option>
                                  <option value="otherOption">Fut metalique</option>
                                </select></label>
                                <br></br>  <p><b>Paiement *</b> <br></br> <label>carte bancaire <input type="radio"  name="myRadio" style={{marginRight:"15px"}}  /></label>
                                <label>Lors de livraison <input type="radio"  name="myRadio" defaultChecked={true}/></label> </p>
                              </div>
                            </div>
                            <div className='btnContainer'>
                
                               <a href='/Login'> <button className='btnPrimary' >Passer commande</button></a>
                            </div>
                        </div>
          </div></div>
      
    </>
  )
}

export default Modal
