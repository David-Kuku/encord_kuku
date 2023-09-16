import React, { useEffect, useState } from 'react'
import Tabs from './Tabs'
import Upload from './Upload'
import Table from './Table'
import { columns } from '../data'
import { TImage } from '../types'
import { axiosInstance } from '../config/axiosInstance'
import { toast } from 'react-toastify'
import { AxiosError } from 'axios'

const Predictions = () => {
    const [images, setImages] = useState<TImage[]>([])
    const getImages =async () => {
        try{
            const res = await axiosInstance.get('/images')
            console.log(res)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(()=>{
        getImages()
    },[])
    return (
        <div>
            <Tabs />
            <Table columns={columns} data={images} />
        </div>
    )
}

export default Predictions