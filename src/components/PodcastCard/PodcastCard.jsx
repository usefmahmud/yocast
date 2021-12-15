import React from 'react'
import { Link } from 'react-router-dom'
// import {BsPlayCircleFill} from 'react-icons/all'

import './PodcastCard.scss'
const PodcastCard = ({podcast}) => {
    return (
        <Link to={`/podcast/${podcast.id}`} className='podcast-card'> 
            <div className="podcast__artwork">
                
                <div className="artwork__overlay"></div>
                <img src={podcast.artwork} alt="" />
                {/* <span className="play__icon">
                    <BsPlayCircleFill />
                </span> */}
            </div>
            <div className="podcast__info">
                <div className="podcast__title" dir='auto'>
                    {podcast.name}
                </div>
                <div className="podcast__description" dir='auto'>
                    {podcast.description}
                </div>
                <span className="episodes__number">
                    Episodes: {podcast.episodes.length}
                </span>
            </div>
        </Link>
    )
}

export default PodcastCard
