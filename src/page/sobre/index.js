import {BorderImage, Image, SobreDescricao,LinhaHorizontal ,ContainerSobre, PageSobre, BtnContato, ContainerTitulo, Titulo } from "./styles";
function Sobre() {

    return (
        <PageSobre id="sobre">
        <ContainerSobre className="sobre" >
            <ContainerTitulo>
                <Titulo>Sobre min</Titulo>
                <LinhaHorizontal></LinhaHorizontal>
            </ContainerTitulo>
            <ContainerTitulo>
                <SobreDescricao>
                    <p> Olá meu nome e Edvanderson B. Lisboa gosto de trabalhar com tecnologias
                        sou formado em Sistemas de Informação, tenho 33 anos, e gosto de trabalhar na ideia de criar novos produtos tecnologicos
                        que impactam e transforma a vida de muitas pessoas
                        .</p>
                    <p>Atualmente, tenho o privílegio de trabalhar na AVANADE como consultor, pois ela me possibilitou expandir meus conhecimentos e possibilitou que trabalhase com diversas tecnologias para diversos clientes hoje me considero fullStack, pronto para assumir novos desafios. </p>
                    <p> Se você tem uma ideia ou quer ajuda para alguma projeto vem conversar comigo, que será um  prazer falar com você</p>
                </SobreDescricao>
                <Image >
                    <BorderImage ></BorderImage>
                </Image>
                
            </ContainerTitulo>
            <BtnContato>Entre em Contato</BtnContato>
        </ContainerSobre>
        </PageSobre>
    )
}
 
export default Sobre;