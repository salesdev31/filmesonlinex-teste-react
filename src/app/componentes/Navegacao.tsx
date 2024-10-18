type Props = {
    link: string;
}


export const Navegacao = ({link}:Props) => {
    return (
        <nav className="flex gap-5">
        <a className="font-bold text-white" href={link}>Terror</a>
        <a className="font-bold text-white" href={link}>Ação</a>
        <a className="font-bold text-white" href={link}>Drama</a>
    </nav>
    );
}