
import React  from 'react'

import './ModAppel.css';


const ModAppel = ({open, onClose}) => {


   if(!open) return null;

  return (
    <>
          <div className='overlay'>
            <div  className='m'>
          <p className='closeBtn' onClick={onClose}><b>X</b></p>
          <center><h3>Appeler nous sur</h3></center><br></br>
          <p>Telephone: +216 52 191 454 <br></br> Fax:+216 73 455 500</p>
          
          </div>

         </div>
      
    </>
  )
}

export default ModAppel
