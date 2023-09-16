import React, { useState } from 'react';
import PredictModal from './PredictModal';

interface IProps {
    columns: { header: string, key: string }[]
    data: any[]
}
const Table = React.memo(({ columns, data }: IProps) => {
    const [showModal, setShowModal] = useState(false)
    const [imgIndex, setImgIndex] = useState(Infinity)
    return (
        <div className='flex justify-center mt-3'>
            <div className='overflow-x-auto whitespace-nowrap overflow-y-visible'>
                <table className='text-xs border-separate border-spacing-x-0 border-spacing-y-2'>
                    <thead className='bg-[#D4F1FC] p-3'>
                        {columns.map((column, index) => (
                            <th className='p-2' key={index}>{column.header}</th>
                        ))}
                    </thead>
                    <tbody className='bg-[whitesmoke] font-[500]'>
                        {data.map((row, rowIndex) => (
                            <tr key={rowIndex} className="p-2 bg-[white] h-[30px] drop-shadow-lg">
                                {columns.map((column, colIndex) => (
                                    column?.key !== 'button' ?
                                        <td className='p-2 min-w-[100px] md:min-w-[150px]' key={colIndex}>{row[column.key]}</td> :
                                        <td
                                            className='cursor-pointer min-w-[100px] bg-[black] rounded-md text-white'
                                            key={'button'}
                                            onClick={() => { setShowModal(true); setImgIndex(rowIndex) }}>
                                            PREDICT
                                        </td>
                                ))}

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <PredictModal setShowModal={setShowModal} showModal={showModal} image={imgIndex} />
        </div>
    );
});

export default Table;
