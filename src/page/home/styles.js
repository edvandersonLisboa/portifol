import styled from 'styled-components';


export const Section = styled.section`
   display: grid;
    grid-template-columns: 0.5fr 10fr 0.5fr;
   
 `;

export const RedeSociais = styled.article`
  display: flex;
  flex-direction: column;
  justify-items:self-end;
  align-items: center;
  height: 100Vh;
  justify-content: end;
  position: fixed;
  left:10px;
  svg{
   margin-bottom: 20px;
  }
  
`;

export const PageHome = styled.article`
font-family: Calistoga;
  grid-column: 2;
 
  .home{
   font-family: Calistoga;
  }
  
`;

export const Informacoes = styled.article`
   max-width: 900px;
   margin: auto;
   height: calc(100Vh + 100px);
   display: flex;
   flex-direction: column;
   justify-content: center;
`;
export const Apresentacao = styled.article`
 display: flex;
 font-size: 18px;
 color: #43AA8B;
`;
export const Titulo = styled.article`
 display: flex;
 font-size: 48px;
 color: #fff;
`;

export const SubTitulo = styled.article`
 display: flex;
 font-size: 36px;
 color: #c4c4c473;
`;

export const Descricao = styled.article`
 display: flex;
 font-size: 18px;
 color: #F8F9Fa;
`;

export const Email = styled.article`
  display: flex;
  flex-direction: column;
  justify-items:self-end;
  align-items: center;
  height: 100%;
  justify-content: end;
  position: fixed;
  right: 10px;

  svg{
   margin-bottom: 20px;
  }
  
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


