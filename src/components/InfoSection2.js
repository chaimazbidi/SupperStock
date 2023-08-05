import React from 'react'
import styled from 'styled-components'

const Section=styled.section`
width:100%;
height:100%;
padding:0rem 0rem;

`;
const Container=styled.div`
padding:3rem calc((10
  0vw-1300px)/2);
display:grid;
background-color:#000d1a;
padding-top: 50px;

@media screen and (max-width:768px){
  grid-template-columns:1fr;
}
`;


const ColumnR=styled.div`
display:flex;
flex-direction:column;
text-align:center;
color:#fff;
line-height:1.4;
padding:1rem 7rem;
order:${({reverse}) =>(reverse ? '1':'2')};
img{
    width:20%;
    height:50%;
    object-fit:cover;
    margin-left: 500px;
    margin-top: 50px;
    margin-bottom: 50px;
    @media screen and (max-width:768px){
    width:90%;
    height:90%;
    margin-left: 0px;
    margin-top: 20px;
    margin-bottom: 0px;
    }
`;




const InfoSection2 = ({heading,paragrapheOne,image}) => {
  return (
    <Section>
<Container>
<ColumnR>
    <h1>{heading}</h1><br></br>
    <p>{paragrapheOne}</p>
    <img src={image} alt="home"/>
    </ColumnR>
</Container>
   
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

</Section>
  )
}

export default InfoSection2
