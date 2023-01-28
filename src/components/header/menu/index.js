import { Li, Ul } from "../styles";
import "../../../asserts/js/scriptscroll";
function Menu() {
 
    return (
      <Ul className="menu" >
            <Li><a href="#home" >Home</a></Li>
            <Li><a href="#sobre" >Sobre</a></Li>
            <Li><a href="#curriculo" >Curriculo</a></Li>
            <Li><a href="#projeto" >Projetos</a></Li>
            <Li>Contatos</Li>
      </Ul>
    );
  }
  
  export default Menu;
  