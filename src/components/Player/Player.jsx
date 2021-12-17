import React, { useEffect, useRef, useState } from 'react'
import {BsPlay, BsPause, BsSkipEnd, BsSkipStart, BsSkipForward, BsSkipBackward, CgSpinnerTwoAlt} from 'react-icons/all'
import {toast} from 'react-toastify'
import Slider from '@mui/material/Slider';

import './Player.scss'
import moment from 'moment';
const Player = ({track}) => {
    const [isPlaying, setIsPlaying] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const audioRef = useRef()
    
    const [trackDuration, setTrackDuration] = useState(0) 
    const [trackCurrVal, setTrackCurrVal] = useState(0)

    const [defaultCurrTimeStyle, setDefaultCurrTimeStyle] = useState(true)

    useEffect(() => {
        let audioFile = new Audio()
        audioRef.current = audioFile
        setIsPlaying(false)
    }, [])

    useEffect(() => {
        let audio = audioRef.current
        audio.src = track.url
        setIsPlaying(false)
        
        // audio.onloadstart = () => {
        //     setIsLoading(true)

        //     audio.onloadeddata = () => {
        //         setIsLoading(false)
        //     }
        // }

        audio.onloadedmetadata = () => {
            setTrackDuration(audio.duration)
            setTrackCurrVal(audio.currentTime)

            audio.addEventListener('timeupdate', e => {
                setTrackCurrVal(audio.currentTime)
            })
        }
    }, [track])

    const changeCurrVal = e => {
        setTrackCurrVal(e.target.value)
        audioRef.current.currentTime = e.target.value
    }

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
                    toast.error('Please choose a track to listen', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'dark'
                    });
                })
            }
        }
    }

    const skipForward = () => {
        let audio = audioRef.current
        let playPromise = audio.play()

        if (playPromise !== undefined) {
            playPromise.then(() => {
                setTrackCurrVal(trackCurrVal + 10)
                audio.currentTime = audio.currentTime + 10
                setIsPlaying(true)
            })
        }
    }

    const skipBackward = () => {
        let audio = audioRef.current
        let playPromise = audio.play()

        if (playPromise !== undefined) {
            playPromise.then(() => {
                setTrackCurrVal(trackCurrVal - 10)
                audio.currentTime = audio.currentTime - 10
                setIsPlaying(true)
            })
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', e => {
            if(e.keyCode === 32){
                togglePlay()
            }
        })
    }, [])

    return (
        <div className='player'>
            <div className="player__controls">
        
                <div 
                    className='controler'
                    onClick={skipBackward}
                    title='Skip 10s backward'
                >
                    <span className="icon">
                        <BsSkipBackward />
                    </span>
                </div>

                <div className={`controler ${track.prev ? '' : 'disabled'}`}>
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
                

                <div className={`controler ${track.next ? '' : 'disabled'}`}>
                    <span className="icon">
                        <BsSkipEnd />
                    </span>
                </div>

                <div 
                    className='controler'
                    onClick={skipForward}
                    title='Skip 10s forward'
                >
                    <span className="icon">
                        <BsSkipForward />
                    </span>
                </div>
            </div>

            <div className='player__slider'>
                <div 
                    className="currtime"
                    onClick={() => setDefaultCurrTimeStyle(!defaultCurrTimeStyle)}
                >
                    {!defaultCurrTimeStyle && '-'}
                    {
                        trackCurrVal > 0 ?
                        moment.utc(
                                (defaultCurrTimeStyle ? trackCurrVal : trackDuration - trackCurrVal) * 1000
                            ).format('HH:mm:ss') :
                        '00:00'
                    }
                </div>

                <div className="slider">
                    <Slider
                        size="small"
                        defaultValue={0}
                        min={0} 
                        max={trackDuration}
                        value={trackCurrVal}
                        onChange={changeCurrVal}
                        disabled={trackDuration == 0}
                    />
                </div>

                <div className="durationtime">
                    {
                        trackDuration > 0 ?
                        moment.utc(trackDuration *1000).format('HH:mm:ss') :
                        '00:00'
                    }
                </div>
            </div>
        </div>
    )
}

export default Player
