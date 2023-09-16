import React from 'react'
import { ClipLoader } from 'react-spinners'

interface IProps {
    text: string
    handleClick: () => void
}
const Button = ({ handleClick, text }: IProps) => {
    return (
        <button
            onClick={handleClick}
            className={`flex items-center font-poppins justify-center gap-1 transition-all hover:brightness-90 disabled:brightness-[60%] ease-in text-center disabled:cursor-not-allowed bg-green text-white border-2 px-4 py-[5px] border-transparent outline-none rounded`}
        >
            {text}
        </button>
    )
}

export default Button