import React, { useRef } from 'react'
import { TImage, TImgPrediction } from '../types'

interface IProps {
    prediction: TImgPrediction
}
const ScannedImg = ({ prediction }: IProps) => {

    return (
        <div className='flex justify-center'>
            <div className='relative inline-block'>
                <img
                    src={URL.createObjectURL(prediction?.image?.imageObject)}
                    alt='checkedImg'
                    className='h-[220px] w-[250px]'
                />
                {
                    prediction?.predictions?.map((prediction) => (
                        <div
                            className={`absolute flex items-end justify-end border-[2px] border-solid border-[red] bg-opacity-30 bg-[purple] pointer-events-none
                                top-[${prediction?.bbox?.y1}px] left-[${prediction?.bbox?.x1}px]
                                w-[${prediction?.bbox?.x2 - prediction?.bbox?.x1}px]
                                h-[${prediction?.bbox?.y2 - prediction?.bbox?.y1}px]`}
                        >
                            <div className='text-xs font-[500]'>{`${prediction?.label}(${prediction?.score})`}</div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default ScannedImg

