import { CardsFilmes } from "./CardsFilmes";
import { FilmesList } from "./FilmesList";

export const Main = () => {
    return (
        <div className="bg-gray-300 ">
            <div className="pt-8 flex justify-center gap-8 flex-wrap">
                {FilmesList.map(function(filmeAtual){
                    return <CardsFilmes key={filmeAtual.id} linkImg={filmeAtual.linkImg} tituloFilme={filmeAtual.tituloFilme} linkVideo={filmeAtual.linkVideo}/>
                })}                
            </div>
                
        </div>
    );
}