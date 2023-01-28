
import styled from 'styled-components';


export const PageTreinamento = styled.section`
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
 margin-top: 30px;
.disableTreinamento{
 display: none;
}
.activeTrainamento{
  display: block;
}


`;


export const TreinamentosBtn = styled.section`
 margin-right: 10px;
 .active{
  border-left: 3px solid #43AA8B;
    position: relative;
    left: -2px;
    color: #fff;;
}


`;
export const BtnTreinamento = styled.section`
  padding: 20px;
  background: #0C1F3A;
  color: #AFAFAF;
  margin-bottom: 5px;


`;

export const TreinamentoDescricao = styled.section`
 margin-right: 20px;

`;

export const TituloTreinamento = styled.section`
 font-size: 24px;
 margin-left: 20px;
 color:#fff;
`;

export const SubTituloTreinamento = styled.section`
 font-size: 18px;
 margin-left: 20px;
 color:#BABBBC;
`;
export const DescricaoTreinamento = styled.section`
 font-size: 18px;
 font-family: Bree_Serif;
 color: #8D8C8C;
 ul{
 list-style-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 10 10"><circle fill="green" cx="7" cy="7" r="2"/></svg>');
}
ul li{
  padding: 5px;
}
 `;