import React, { useContext, useState } from 'react'
import Modal from './Modal'
import Button from './Button'
import { TImage } from '../types'
import { axiosInstance } from '../config/axiosInstance'
import moment from 'moment'
import { toast } from 'react-toastify'
import AppContext from '../context/AppContext'

interface IProps {
    showModal: boolean
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
    image?: TImage

}
const PredictModal = ({ setShowModal, showModal, image }: IProps) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [loading, setLoading] = useState(false)
    const { setPredictions, predictions } = useContext(AppContext)

    const createPrediction = async () => {
        setLoading(true)
        try {
            if (image) {
                const res = await axiosInstance.get('/predict')
                setPredictions((prev) => ([
                    ...prev,
                    {
                        image: image,
                        title,
                        description,
                        timeOfPrediction: moment(new Date()).format("DD/MM/YYYY"),
                        predictions: res?.data?.predictions
                    }
                ]))
                toast.success('Prediction successful')
            }

        } catch (error: any) {
            toast.error(error.message)
        }
        setLoading(false)
        setShowModal(false)
    }

    return (
        <Modal onClose={() => setShowModal(false)} show={showModal} className='p-4 !pt-1 !w-[300px] !text-left'>
            <>
                <div className='flex flex-col gap-3'>
                    <div className='flex flex-row justify-between'>
                        <h2 className='font-bold'>PREDICT</h2>
                        <div
                            className='text-[white] font-[600] bg-[red] rounded-sm py-1 px-2 text-[10px] cursor-pointer'
                            onClick={() => {
                                setShowModal(false);
                            }}
                        >
                            X
                        </div>
                    </div>
                    <div>
                        <span className='text-[14px] font-bold mb-1 text-[green]'>{`Image name: ${image?.name}`}</span>
                    </div>
                    <div>
                        <span className='text-xs font-bold mb-1'>Enter Title</span>
                        <input
                            onChange={(e) => setTitle(e.target.value)}
                            className='border-solid p-1 border-[1px] text-xs border-black rounded-sm outline-none w-full'
                        />
                    </div>
                    <div>
                        <span className='text-xs font-bold mb-1'>Enter Description</span>
                        <textarea
                            onChange={(e) => setDescription(e.target.value)}
                            className='border-solid border-[1px] p-2 text-xs h-[100px] border-black rounded-sm outline-none w-full' />
                    </div>

                    <Button
                        handleClick={() => createPrediction()}
                        text='Submit'
                        disabled={!title || !description}
                        loading={loading}
                    />

                    <Button
                        handleClick={() => setShowModal(false)}
                        text='Cancel'
                        className='!bg-[red]'
                    />
                </div>
            </>
        </Modal>
    )
}

export default PredictModal