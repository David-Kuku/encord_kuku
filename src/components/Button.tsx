import React from 'react'
import { ClipLoader } from 'react-spinners'

interface IProps {
    disabled?: boolean
    loading?: boolean
    icon?: JSX.Element
    text: string
    handleClick: () => void
    className?: string
}
const Button = ({ disabled = false, loading = false, handleClick, text, className }: IProps) => {
    return (
        <button
            onClick={handleClick}
            disabled={disabled || loading}
            className={`${className} flex items-center font-poppins justify-center gap-1 transition-all hover:brightness-90 disabled:brightness-[60%] ease-in text-center disabled:cursor-not-allowed bg-green text-white border-2 px-4 py-[5px] border-transparent outline-none rounded`}
        >
            <ClipLoader color={'#fff'} loading={loading} size={20} />
            {text}
        </button>
    )
}

export default Button