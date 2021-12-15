import React, { useEffect, useRef, useState } from 'react'
import {BsPlay, BsPause, BsSkipEnd, BsSkipStart} from 'react-icons/all'

import './Player.scss'
const Player = ({url}) => {
    const [isPlaying, setIsPlaying] = useState(false)
    const audioRef = useRef()

    useEffect(() => {
        let audioFile = new Audio()
        audioRef.current = audioFile
        setIsPlaying(false)
    }, [])

    useEffect(() => {
        let audio = audioRef.current
        audio.src = url
        setIsPlaying(false)
    }, [url])

    const togglePlay = () => {
        let audio = audioRef.current
        if(isPlaying){
            audio.pause()
            setIsPlaying(false)
        }else{
            let playPromise = audio.play()

            if (playPromise !== undefined) {
                playPromise.then(() => {
                    audio.play()
                    setIsPlaying(true)
                }).catch(() => {
                    console.log('Failed')
                })
            }
        }
    }
    return (
        <div className='player'>
            <div className="player__controls">

                <div className="controler">
                    <span className="icon">
                        <BsSkipStart />
                    </span>
                </div>

                <div 
                    className="controler"
                    onClick={togglePlay}
                >
                    <span className="icon">
                        {
                            isPlaying ? <BsPause /> : <BsPlay />
                        }
                    </span>
                </div>

                <div className="controler">
                    <span className="icon">
                        <BsSkipEnd />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Player
