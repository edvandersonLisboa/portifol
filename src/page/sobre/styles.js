import styled from 'styled-components';
import img from '../../asserts/img/fotos/osas.jpg';

export const Titulo = styled.article`
 display: flex;
 font-size: 48px;
 color: #fff;
`;

export const BtnContato = styled.a`
    padding: 20px;
    border: #43AA8B solid 1px;
    max-width: 140px;
    font-family: 'CALISTOGA';
    text-align: center;
    margin-top: 30px;
    font-size: 14px;
    color: #43AA8B;
`;

export const PageSobre = styled.section`
font-family: Calistoga;
  grid-column: 2;
 
  .sobre{
   font-family: Calistoga;
  }
  
`;


export const ContainerSobre = styled.article`
   max-width: 900px;
   margin: auto;
   height: calc(100Vh - 100px);
   margin-top: 100px;
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
`;

export const ContainerTitulo = styled.section`
 display: flex;
 align-items: center;

`;
export const LinhaHorizontal = styled.div`
flex:1;
background-color: #43AA8B;
height: 1px;
margin-left: 10px;
`;

export const SobreDescricao = styled.section`

 font-size: 18px;
 flex: 1;
 color: #c4c4c49e;
 font-size: 18px;
`;

export const Image = styled.div`
position: relative;
  min-width: 265px;
  height: 320px;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size:cover;
  height: 320px;
  right: -10px;
  border-radius: 10px;
`;

export const BorderImage = styled.section`
position: relative;
  min-width: 265px;
  height: 320px;
  border-radius: 10px;
    border: #43AA8B solid 1px;
    left: 20px;
    z-index: -1;
    top: 20px;
`;
