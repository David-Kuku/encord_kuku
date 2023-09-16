import { useContext } from 'react'
import AppContext from '../context/AppContext'
import Images from '../components/Images'
import Predictions from '../components/Predictions'

const Home = () => {
    const { activeTab } = useContext(AppContext)

    return (
        <div>
            {/* <div className='text-[20px] font-bold underline'>WELCOME</div> */}
            {
                activeTab === 0 ?
                <Images /> : 
                <Predictions/>

            }
        </div>
    )
}

export default Home