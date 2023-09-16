import React from 'react'
import Tab from './Tab'

const Tabs = React.memo(() => {
    return (
        <div className='flex justify-center'>
            <div className='flex gap-2'>
                {
                    ['Image', 'Prediction']?.map((item, index) => (
                        <Tab key={index} name={item} index={index} />
                    ))
                }
            </div>
        </div>

    )
})

export default Tabs