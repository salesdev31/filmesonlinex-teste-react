type Props = {
    linkImg: string;
    tituloFilme: string;
    linkVideo: string
}



export const CardsFilmes = ({linkImg, tituloFilme, linkVideo}: Props) => {
    return (
        
            <div className=" flex flex-col items-center p-2 shadow-2xl bg-slate-500 rounded-md" >
                <img className="max-w-52 max-h-64" src={linkImg}></img>
                <h2 className="bg-slate-600 w-full text-center py-2 my-2 font-bold text-white">{tituloFilme}</h2>
                <a className="bg-sky-700 w-full text-center font-bold py-2 mt-1 text-white" href={linkVideo} target="_blank"><div>ASSISTIR</div> </a>
            </div>
       
    );
}