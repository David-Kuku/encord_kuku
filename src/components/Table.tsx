import React, { useState } from 'react';
import PredictModal from './PredictModal';
import { TColumn, TImage, TImgPrediction, TPrediction } from '../types';
import Button from './Button';
import ScannedImgModal from './ScannedImgModal';

interface IProps {
    columns: { header: string, key: string }[]
    images?: TImage[]
    predictions?: TImgPrediction[]

}
const Table = React.memo(({ columns, images, predictions }: IProps) => {
    const [showModal, setShowModal] = useState(false)
    const [imgIndex, setImgIndex] = useState(Infinity)
    const [showScannedImageModal, setShowScannedImageModal] = useState(false)
    const array = images ?? predictions
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
                        {
                            !array?.length &&
                            <div className='text-xs my-2 text-[red] !bg-[white]'>No item yet</div>
                        }
                        {array?.map((row, rowIndex) => (
                            <tr key={rowIndex} className="p-2 bg-[white] h-[60px] drop-shadow-lg">
                                {columns.map((column: TColumn, colIndex) => (
                                    column?.key !== 'button' ?
                                        <td className='p-2 min-w-[100px] max-w-[200px] truncate md:min-w-[150px]' key={colIndex}>{row[column.key as keyof (TImage | TPrediction)]}</td> :
                                        <td
                                            className=''
                                            key={'button'}>
                                            <Button
                                                handleClick={() => {
                                                    images ? setShowModal(true) : setShowScannedImageModal(true);
                                                    setImgIndex(rowIndex)
                                                }}
                                                text={images ? `PREDICT` : `VIEW`}

                                            />
                                        </td>
                                ))}

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <PredictModal
                setShowModal={setShowModal}
                showModal={showModal}
                image={images?.[imgIndex]}
            />
            <ScannedImgModal
                setShowModal={setShowScannedImageModal}
                showModal={showScannedImageModal}
                prediction={predictions?.[imgIndex] ?? {} as TImgPrediction}
            />
        </div>
    );
});

export default Table;
