interface Props {
    count: number
    line1: string
    line2: string
}

const Stats = ({ count, line1, line2 }:Props) => {
    return (
        <div className="flex items-end gap-4">
            <span className="text-6xl text-primary">{count}</span>
            <span className="w-16 text-lg">
                {line1}{' '}{line2}
            </span>
        </div>
    );
}

export default Stats;