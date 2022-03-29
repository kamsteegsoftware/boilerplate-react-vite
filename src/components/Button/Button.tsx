interface IButtonProps {
    label: string;
    onClick: () => void;
}

export const Button = ( { label, onClick }: IButtonProps ) => {

    const handleClick = () => {
        onClick();
    }

    return (
        <div 
            onClick={ handleClick }
            className={`inline-flex bg-emerald-500 rounded-full text-center text-white font-medium p-2 px-5 cursor-pointer select-none hover:bg-emerald-600 transition-all duration-200`}>
            { label }
        </div>
    )
}