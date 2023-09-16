import React from 'react'
import Modal from './Modal'
import Button from './Button'

interface IProps {
    showModal: boolean
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}
const PredictModal = ({ setShowModal, showModal }: IProps) => {
    return (
        <Modal onClose={() => setShowModal(false)} show={showModal} className='p-4 !pt-1 !w-[300px] !text-left'>
            <>
                <div className='flex flex-col gap-3'>
                    <div className='flex flex-row justify-between'>
                        <h2 className='font-bold'>PREDICT</h2>
                        <div
                            className='text-[white] font-[600] bg-[#028789] rounded-sm py-1 px-3 text-[14px] cursor-pointer'
                            onClick={() => {
                                setShowModal(false);
                            }}
                        >
                            X
                        </div>
                    </div>
                    <div>
                        <span className='text-xs font-bold mb-1'>{`Image name: `}</span>
                    </div>
                    <div>
                        <span className='text-xs font-bold mb-1'>Enter Title</span>
                        <input className='border-solid border-[1px] border-black rounded-sm outline-none w-full' />
                    </div>
                    <div>
                        <span className='text-xs font-bold mb-1'>Enter Description</span>
                        <input className='border-solid border-[1px] border-black rounded-sm outline-none w-full' />
                    </div>

                    <Button handleClick={() => console.log('yoo')} text='Submit' />
                </div>
            </>
        </Modal>
    )
}

export default PredictModal