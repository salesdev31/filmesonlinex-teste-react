import { StaticImageData } from "next/image";
import Image from "next/image";
import { Navegacao } from "./Navegacao";

type Props = {
    tituloHeader: StaticImageData;
}

export const Cabecalho = ({tituloHeader}:Props) => {
    return(
        <div>
            <header className="bg-[#313d4d] py-2 flex justify-between items-center px-5">
                <h1>
                    <Image src={tituloHeader} alt="logo do site" className="w-72"/>
                </h1>
                <Navegacao link="http://google.com.br"/>
            </header>
        </div>
    );
}