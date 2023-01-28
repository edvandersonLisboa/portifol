import {PageHome, Section, SubTitulo, Titulo, Descricao,Apresentacao, Informacoes,BtnContato,    } from "./styles";
import Sobre from '../sobre/index'
import Treinamento from '../Treinamento/index'
import RedeSocial from "../../components/redeSocial";
import Email from "../../components/Email";
import Projeto from "../projeto";
import mellisboa from '../../asserts/video/mellisboa.mp4';
function Home() {
    return (
        <section>
            <section className="video">
                    <video autoPlay muted loop>
                        <source src={mellisboa} type="video/mp4"></source>
                    </video>
                </section>
            <Section className="background">            
                <RedeSocial></RedeSocial>
                <PageHome>
                    <Informacoes className="home" id="home">
                        <Apresentacao>Olá, meu nome é</Apresentacao> 
                        <Titulo>Edvanderson B. Lisboa</Titulo>
                        <SubTitulo>Tranformando ideias em projetos web e mobile</SubTitulo>
                        <Descricao> Sou engenheiro de software formado em Analise de Sistemas
                        especializado em construir experiências dígitais excepcionais, Atualmente, trabalho no desenvolvimento de Ideias
                            para criar produtosque tranforme todo o eco sistema sócial e economico de uma região.</Descricao>
                            <BtnContato>Entre em Contato</BtnContato>
                    </Informacoes>
                    
                </PageHome>
                <Sobre></Sobre>
            <Treinamento></Treinamento>
                <Projeto></Projeto>   
                    <Email></Email>
             </Section>
        </section>
    );
  }
  
  export default Home;