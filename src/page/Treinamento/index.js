import {PageTreinamento,ContainerTreinamento,TreinamentosBtn,DescricaoTreinamento, Titulo, ContainerTitulo, TreinamentoDescricao, BtnTreinamento, LinhaHorizontal,SubTituloTreinamento, TituloTreinamento,ContainerTreinamentos } from './style'
function Treinamento() {
    return (
 
        <PageTreinamento id="curriculo">
            <ContainerTreinamento className="curriculo" >
                <ContainerTitulo>
                    <Titulo>Onde Trabalhei</Titulo>
                    <LinhaHorizontal></LinhaHorizontal>
                </ContainerTitulo>
                <ContainerTreinamentos>
                    <TreinamentosBtn>
                    <BtnTreinamento className="btnTrteinamento active" id="avanade" >Avanade</BtnTreinamento>
                    <BtnTreinamento className="btnTrteinamento" id="osas">Osas</BtnTreinamento>
                    </TreinamentosBtn>
                    <TreinamentoDescricao className="avanade activeTreinamento">
                        <TituloTreinamento>Engenheiro de Software</TituloTreinamento>
                        <SubTituloTreinamento>Fevereiro de 2020 - presente</SubTituloTreinamento> 
                        <DescricaoTreinamento>
                            <ul>
                                <li>Escreva um código moderno, de alto desempenho e sustentável 
                                    para uma ampla variedade de clientes e projetos internos</li>
                                    <li>Trabalhe com uma variedade de diferentes linguagens, 
plataformas, estruturas e sistemas de gerenciamento de 
conteúdo, como JavaScript, TypeScript, Gatsby, React, Craft, 
                                    WordPress, Prismic e Netlify</li>
                                    <li>Trabalhe com uma variedade de diferentes linguagens, 
                                    Escreva um código moderno, de alto desempenho e sustentável 
                                para uma ampla variedade de clientes e projetos internos</li>
                                <li>AVANADE: <a href="avanade.com.br">https://www.avanade.com/pt-br</a></li>
                            </ul>
                        </DescricaoTreinamento>
                </TreinamentoDescricao>
                <TreinamentoDescricao className="osas disableTreinamento" >
                        <TituloTreinamento>Engenheiro de Software</TituloTreinamento>
                        <SubTituloTreinamento>Fevereiro de 2020 - presente</SubTituloTreinamento> 
                        <DescricaoTreinamento>
                            <ul>
                                <li>Escreva um código moderno, de alto desempenho e sustentável 
                                    para uma ampla variedade de clientes e projetos internos</li>
                                    <li>Trabalhe com uma variedade de diferentes linguagens, 
plataformas, estruturas e sistemas de gerenciamento de 
conteúdo, como JavaScript, TypeScript, Gatsby, React, Craft, 
                                    WordPress, Prismic e Netlify</li>
                                    <li>Trabalhe com uma variedade de diferentes linguagens, 
                                    Escreva um código moderno, de alto desempenho e sustentável 
                                para uma ampla variedade de clientes e projetos internos</li>
                                <li>OSAS: <a href="avanade.com.br">https://www.avanade.com/pt-br</a></li>
                            </ul>
                        </DescricaoTreinamento>
                    </TreinamentoDescricao>
                </ContainerTreinamentos>
            </ContainerTreinamento>
    </PageTreinamento> 
    );
  }
  
  export default Treinamento;
  