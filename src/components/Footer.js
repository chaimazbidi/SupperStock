import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='text-center' color='white' style={{ backgroundColor: '#000d1a' }}>
      <MDBContainer className='p-4'>
         

        <section className=''>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-2'>
                  <strong>Inscrivez-vous à notre newsletter</strong>
                </p>
              </MDBCol>

              <MDBCol md='5' start>
                <MDBInput contrast type='email' value='Email address' className='mb-4' />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color='light' type='submit' className='mb-4'>
                S'abonner
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        <section className='mb-4'>
          <p>
          STTGO est une société à responsabilité limitée crée en 2008 spécialisée dans 
          le traitement des grignons d'olives.
           La société emploie est située à Ksour-Essef dans le gouvernorat de Mahdia.
          </p>
        </section>

        <section className=''>
          <MDBRow>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>RAPPORTS</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Rapport 2017
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                  Rapport 2018
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                  Rapport 2019
                  </a>
                </li>
                
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>CONTACT</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Demande de financement
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Contactez-nous
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Carrières
                  </a>
                </li>
                
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Equipe</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Administrateur
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Equipe
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Chair's Council
                  </a>
                </li>
                
              
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>ACTUALITES ET MEDIA</h5>

              <ul className='list-unstyled mb-0'>
              
                <li>
                  <a href='#!' className='text-white'>
                    News & events
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    impulse for investment insider 
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Adresse
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright:
        <a className='text-white' href='https://SuperStock.net/'>
          ZBIDIchaima
        </a>
      </div>
    </MDBFooter>
  );
}