import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import EpisodeCard from '../../components/EpisodeCard/EpisodeCard'
import podcasts from '../../db/podcasts.json'

import './Podcast.scss'
const Podcast = ({onChooseTrack}) => {
    const {id} = useParams()

    return (
        <div className='podcast-page'>
            {
                podcasts.find(podcast => podcast.id == id) == undefined 
                ? ''
                : 
                <div className="podcast-info">
                    <div className="podcast__artwork">
                        <img src={podcasts.find(podcast => podcast.id == id).artwork} alt="" />
                    </div>
                    <div className="info">
                        <div className="podcast__title" dir='auto'>
                            {podcasts.find(podcast => podcast.id == id).name}
                        </div>
                        <div className="podcast__description" dir='auto'>
                            {podcasts.find(podcast => podcast.id == id).description}
                        </div>
                    </div>
                </div>
            }
            <div className="episodes__container">
                {
                    podcasts.find(podcast => podcast.id == id) == undefined 
                    ? ''
                    : podcasts.find(podcast => podcast.id == id).episodes.map(episode => {
                        return (
                            <EpisodeCard 
                                episode={episode} 
                                onClick={() => onChooseTrack(episode)}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Podcast
