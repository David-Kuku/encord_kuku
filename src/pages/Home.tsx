import React, { useContext, useEffect } from 'react'
import Tabs from '../components/Tabs'
import Table from '../components/Table'
import { columns, data } from '../data'
import axios from 'axios'
import AppContext from '../context/AppContext'
import Upload from '../components/Upload'
import Images from '../components/Images'
import Predictions from '../components/Predictions'

const Home = () => {
    const { activeTab } = useContext(AppContext)
    const routeObj = { 0: '/images', 1: '/predictions' }

    return (
        <div>
            {
                activeTab === 0 ?
                <Images /> : 
                <Predictions/>

            }
        </div>
    )
}

export default Home