import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router'

import './Podcast.scss'
const Podcast = () => {
    // const {id} = useParams()
    const [audio, setAudio] = useState()



    useEffect(() => {
        let a = new Audio()
        a.src = 'https://res.cloudinary.com/usefmahmud/video/upload/v1639497817/yocast/audio/%D9%83%D9%84%D9%83_%D8%B9%D9%84%D9%89_%D8%A8%D8%B9%D8%B6%D9%83_%D8%AC%D9%85%D9%8A%D9%84_-_%D8%A8%D9%88%D8%AF%D9%83%D8%A7%D8%B3%D8%AA_%D8%B9%D9%84%D9%85%D9%8A_%D8%AC%D8%AF%D8%A7_jkxp4p.mp3'
        setAudio(a)
    }, [])

    return (
        <div>
            <button
                onClick={() => {
                    audio.play()
                }}
            >
                Play
            </button>
        </div>
    )
}

export default Podcast
