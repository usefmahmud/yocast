import React from 'react'
import { Link } from 'react-router-dom'
// import {BsPlayCircleFill} from 'react-icons/all'

import './EpisodeCard.scss'
const EpisodeCard = ({episode, onClick}) => {
    return (
        <div 
            className='episode-card'
            onClick={onClick}
        > 
            <div className="episode__artwork">
                
                <div className="artwork__overlay"></div>
                <img src={episode.artwork} alt="" />
            </div>
            <div className="episode__info">
                <div className="episode__title" dir='auto'>
                    {episode.title}
                </div>
                <div className="episode__description" dir='auto'>
                    {episode.description}
                </div>
            </div>
            <div className='episode__status'>
                1
            </div>
        </div>
    )
}

export default EpisodeCard
