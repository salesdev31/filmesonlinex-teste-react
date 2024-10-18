import { Cabecalho } from "./componentes/Cabecalho";
import imagemLogo from "../images/Logo.jpg";
import { Main } from "./componentes/Main";

function page (){
  return(
    <div>
      <Cabecalho tituloHeader={imagemLogo}/>
      <Main/>
    </div>
  );
}


export default page;