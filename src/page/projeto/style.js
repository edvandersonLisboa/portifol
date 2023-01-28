
import styled from 'styled-components';

export const Page = styled.section`
font-family: Calistoga;
  grid-column: 2;

  
`;
export const Titulo = styled.article`
 display: flex;
 font-size: 48px;
 color: #fff;
`;

export const ContainerTreinamento = styled.article`
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

export const ContainerTreinamentos = styled.section`
 display: flex;
 margin-top: 150px;
.disableTreinamento{
 display: none;
}
.activeTrainamento{
  display: block;
}
`;
 
export const ImgProjeto = styled.section`
    height: 220px;
    position: relative;
    min-width: 400px;
    background-color: aqua;

`;

export const InfoProjetoRight = styled.article`
    text-align: end;
    margin-bottom: 20px;
`;

export const TituloProjetoRight = styled.article`
   font-size: 18px;
   color: #43aa8b;
`;

export const SubTituloProjetoRight = styled.article`
   font-size: 24px;
    color: white;
`;

export const DescricaoProjetoRight = styled.article`
    position: relative;
    font-size: 14px;
    padding: 20px 20px 20px 50px;
    left: -100px;
    background: #112240;
    color: #FFF;
    width: calc(100% + 30px);
    text-align: end;

    margin-top: 10px;
`;

export const TecnologiasProjetoRight = styled.article`
font-size: 12px;
    color: #A7A7A7;
    margin-bottom: 10px;
    margin-top: 10px;
`;



export const InfoProjetoLeft = styled.article`
    text-align: left;
    margin-bottom: 20px;
`;

export const TituloProjetoLeft = styled.article`
   font-size: 18px;
   color: #43aa8b;
`;

export const SubTituloProjetoLeft = styled.article`
   font-size: 24px;
    color: white;
`;

export const DescricaoProjetoLeft = styled.article`
   position: relative;
    font-size: 14px;
    padding: 20px 20px 20px 50px;
    /* right: 0px; */
    background: #112240;
    color: #FFF;
    width: calc(100% + 30px);
    text-align: left;
    margin-top: 10px;
    z-index: 1;
`;

export const TecnologiasProjetoLeft = styled.article`
font-size: 12px;
    color: #A7A7A7;
    margin-bottom: 10px;
    margin-top: 10px;
`;