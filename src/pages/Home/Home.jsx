import React from 'react'
import PodcastCard from '../../components/PodcastCard/PodcastCard'
import podcasts from '../../db/podcasts.json'

import './Home.scss'
const Home = () => {
    return (
        <div className='home-page'>
            <div className="podcasts__container">
                {
                    podcasts.map(podcast => <PodcastCard podcast={podcast} />)
                }
            </div>
        </div>
    )
}

export default Home
