import React, { useCallback, useEffect, useState } from 'react'
import Tabs from './Tabs'
import Upload from './Upload'
import Table from './Table'
import { columns } from '../data'
import { TImage } from '../types'
import { axiosInstance } from '../config/axiosInstance'
import { toast } from 'react-toastify'
import { AxiosError } from 'axios'
import { ClipLoader } from 'react-spinners'
import moment from 'moment'

const Images = () => {
    const [images, setImages] = useState<TImage[]>([])
    const [loading, setLoading] = useState(false)
    const getImages = async () => {
        setLoading(true)
        try {
            const res: { data: TImage[] } = await axiosInstance.get('/images')
            setImages(res?.data)
            setLoading(false)
        } catch (err: any) {
            toast.error(err.message)
            setLoading(false)
        }
    }

    const uploadImg = (img:File) => {
        const imgObj: TImage = {
            id: images.length,
            name: img.name,
            size: img.size,
            timeOfUpload: moment(new Date()).format("DD/MM/YYYY")
        }

        setImages((prev)=> (
            [...prev, imgObj]
        ))
        toast.success('Image uploaded successfully, check table for details')
    }

    useEffect(() => {
        getImages()
    }, [])
    return (
        <div className='w-[100%] h-[100%]'>
            {
                loading ?
                    <div className='flex w-[100%] h-[100%] justify-center items-center'>
                        <ClipLoader size={50} color='green' loading={loading} />
                    </div> :
                    <>
                        <Tabs />
                        <Upload uploadImg = {uploadImg}/>
                        <Table columns={columns} data={images} />
                    </>
            }
        </div>
    )
}

export default Images