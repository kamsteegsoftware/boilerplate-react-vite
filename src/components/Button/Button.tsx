interface IButtonProps {
    label: string;
}

export const Button = ( { label }: IButtonProps ) => {
    return (
        <div>
            { label }
        </div>
    )
}