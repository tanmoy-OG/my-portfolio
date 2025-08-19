interface Props {
    ml: number
}

const Cols = ({ ml }: Props) => {
    return (
        <div className={`absolute ml-${ml} w-4 h-full bg-red-950/50`}></div>
    );
}

export default Cols;