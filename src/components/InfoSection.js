import React from 'react'
import styled from 'styled-components'
import { Button } from './Button';
import {IoMdArrowRoundForward}from 'react-icons/io';

const Section=styled.section`
width:100%;
height:100%;
padding:0rem 0rem;

`;
const Container=styled.div`
padding:3rem calc((10
  0vw-1300px)/2);
display:grid;
grid-template-columns:1fr 1fr;
grid-template-rows:800px;

@media screen and (max-width:768px){
  grid-template-columns:1fr;
}
`;



const ColumnLeft=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:flex-start;
line-height:1.4;
padding:0rem 7rem;
order:${({reverse}) =>(reverse ? '2':'1')};
h1{
  margin-bottom:1rem;
  font-size:clamp(1.5rem,6vw,2rem);
}
p{
  margin-bottom:2rem;
}
`;
const ColumnRight=styled.div`
padding :0rem 2rem;
order:${({reverse})=>(reverse ? '1':'2')};
display:flex;
justify-content:center;
align-items:center;

@media screen and (max-width:768px){
  order:${({reverse}) =>(reverse ? '2':'1')};
}
img{
  width:75%;
  height:75%;
  object-fit:cover;

  @media screen and (max-width:768px){
  width:90%;
  height:90%;
  }
}
`;
const Arrow =styled(IoMdArrowRoundForward)`
margin-left:0.5rem;
`;
const InfoSection = ({heading,paragrapheOne,paragrapheTwo,buttonLabel,reverse,image}) => {
  return (
    <Section>
        <Container>
        <ColumnLeft>
        <h1>{heading}</h1>
        <p>{paragrapheOne}</p>
        <p>{paragrapheTwo}</p>
        <Button to="/Panier" primary='true'>{buttonLabel} <Arrow/></Button>
        </ColumnLeft>
        <ColumnRight reverse={reverse}>
        <img src={image} alt="home"/>
        </ColumnRight>
        </Container>
    </Section>
    
  )
}

export default InfoSection
