import React from 'react'
import Modal from './Modal';
import { TImage, TImgPrediction } from '../types';
import Button from './Button';
import ScannedImg from './ScannedImg';

interface IProps {
    showModal: boolean
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
    prediction: TImgPrediction
}
const ScannedImgModal = ({setShowModal, showModal, prediction}: IProps) => {
    return (
        <Modal onClose={() => setShowModal(false)} show={showModal} className='!p-1 !pt-1 !w-[300px] !text-left'>
            <>
                <div className='flex flex-col gap-3'>
                    <div className='flex flex-row justify-end'>
                        <div
                            className='text-[white] text-[10px] font-[600] bg-[red] rounded-sm py-1 px-2 cursor-pointer'
                            onClick={() => {
                                setShowModal(false);
                            }}
                        >
                            X
                        </div>
                    </div>

                    <ScannedImg prediction = {prediction}/>
                </div>
            </>
        </Modal>
    )
}

export default ScannedImgModal