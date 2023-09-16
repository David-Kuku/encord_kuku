import React, { useContext } from 'react'
import AppContext from '../context/AppContext'

interface IProps {
    name: string
    index: number
}
const Tab = ({ name, index }: IProps) => {
    const { activeTab, updateActiveTab } = useContext(AppContext)
    console.log(activeTab)
    return (
        <div
            className={`px-5 py-2 ${activeTab === index ?
                'bg-[green] text-white' :
                'bg-[yellow] transition-all hover:brightness-90'} 
                rounded-md font-bold cursor-pointer`}
            onClick={() => updateActiveTab(index)}
        >
            {name}
        </div>
    )
}

export default Tab