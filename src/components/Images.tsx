import { useCallback, useContext } from 'react'
import Tabs from './Tabs'
import Upload from './Upload'
import Table from './Table'
import { imgColumns } from '../data'
import { TImage } from '../types'
import moment from 'moment'
import AppContext from '../context/AppContext'

const Images = () => {
    const {images, setImages} = useContext(AppContext)

    const uploadImg = useCallback(async (img: File) => {
        const imgObj: TImage = {
            name: img.name,
            size: img.size,
            timeOfUpload: moment(new Date()).format("DD/MM/YYYY"),
            imageObject: img
        }
        setImages((prev) => (
            [...prev, { ...imgObj, id: prev.length + 1 }]
        ))
    }, [])

    return (
        <div className='w-[100%] h-[100%]'>
            <Tabs />
            <Upload uploadImg={uploadImg}/>
            <Table columns={imgColumns} images={images}/>

        </div>
    )
}

export default Images