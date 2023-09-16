import { useContext } from 'react'
import Tabs from './Tabs'
import Table from './Table'
import { predictionColumns } from '../data'

import AppContext from '../context/AppContext'

const Predictions = () => {
    const { predictions } = useContext(AppContext)
    return (
        <div>
            <Tabs />

            <>
                <Table columns={predictionColumns} predictions={predictions} />
            </>


        </div>
    )
}

export default Predictions