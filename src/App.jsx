import React, { useState } from "react";
import { Mp3 } from "./components/Mp3";
import { fetchTracks } from "./assets/scripts/main.js";
import { useRef } from "react";
import image from "./assets/img/music-img.jpg";

const tracks = await fetchTracks("./data/tracks.json");

function App() {
    // Reference to audio tag
    const audio = useRef(null);

    // ** States **
    const [trackIndex, setTrackIndex] = useState(0);
    // Toggle between pause/play state

    const [isPlaying, setIsPlaying] = useState(false);


    // ** Handlers **
    // ****************** TODO ********************************
    // Fix the Previous/Next buttons
    // When music is playing
    // And user select a new one
    // Keep playing state
    // And change music (stop previous one, start the new one)
    const handlePrevious = (e) => {
        if (trackIndex === 0) {
            setTrackIndex(tracks.length - 1);
            return;
        }
        setTrackIndex((trackIndex) => trackIndex - 1);
        audio.current.play();
    }
    const handleNext = (e) => {
        if (trackIndex === tracks.length - 1) {
            setTrackIndex(0);
            return;
        }
        setTrackIndex((trackIndex) => trackIndex + 1);
        audio.current.play();
    }

    const playingButton = e => {
        if(isPlaying) {
            audio.current.pause();
        } else {
            audio.current.play();
        }
        setIsPlaying(!isPlaying);
    }
    return (
        <>
            {/* Laptops */}
            <div className="app w-full h-screen hidden md:flex">
                <section className="left w-6/12 h-full bg-mpDarkGreen flex justify-center items-center">
                    <div className="player w-[213px] h-96 bg-mpLightBlack rounded-2xl flex flex-col items-center justify-evenly">

                        <header className="w-28 h-28 rounded-lg">
                            <img src={image} alt="Simple Illustration for Music Player"
                                className="w-full h-full rounded-lg" />
                        </header>
                        {/* *** Beginning: To Add in Mobile Part *** */}
                        {/* Song Infos */}
                        {/* <div className="text-center flex flex-col items-center justify-center">

                    Toggle the className .messagedefilant
                    to turn on/off title scrolling
                    <div className="messagedefilant">
                        <div className="font-bold text-white text-md"><span>Tambour Voilé</span>
                        </div>
                      </div>
                    <p className="text-mpLightGray text-xs">Médérice</p>
                </div> */}

                        {/* Temporary hidden */}
                        <Mp3
                            title={tracks[trackIndex].title}
                            author={tracks[0].author}
                        />




                        {/* Progress bar */}
                        <div className="w-full flex flex-col items-center">
                            <div className="progressbar-container w-48 h-1 bg-white rounded-full cursor-pointer relative">
                            </div>
                            <div className="times text-xs text-mpLightGray flex w-48 justify-between">
                                <p>00.00</p>
                                <p>59.59</p>
                            </div>
                        </div>
                        <audio src={tracks[trackIndex].src} ref={audio}/>
                            <div className="buttons w-36 flex justify-evenly">
                                {/* Previous btn */}
                                <button onClick={handlePrevious}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                        className="text-mpLightGreen w-6 h-6">
                                        <path fillRule="evenodd"
                                            d="M13.28 3.97a.75.75 0 010 1.06L6.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0zm6 0a.75.75 0 010 1.06L12.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z"
                                            clipRule="evenodd" />
                                    </svg>
                                </button>
                                {/* Play/Pause btn */}
                                <button className="p-1 rounded-full bg-mpLightGreen" onClick={playingButton}>
                                    {isPlaying ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                        className="text-black w-6 h-6">
                                        <path fillRule="evenodd"
                                            d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z"
                                            clip-rule="evenodd" />
                                    </svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-black w-6 h-6">
                                        <path fillRule="evenodd"
                                            d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                                            clipRule="evenodd" />
                                    </svg>}

                                </button>
                                {/* Next btn */}
                                <button onClick={handleNext}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                        className="text-mpLightGreen w-6 h-6">
                                        <path fillRule="evenodd"
                                            d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z"
                                            clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                            {/* End : To Add in Mobile Part */}
                    </div>
                </section >
                <section className="right w-6/12 h-full bg-mpLightBlack flex justify-center items-center">
                    <h1 className="logo text-mpLightGreen text-8xl">
                        <p>Just</p>
                        <p className="mt-10">Music</p>
                    </h1>
                </section>
            </div >

            {/* Mobile */}
            < div className="app flex flex-col items-center justify-around w-full h-screen bg-mpLightBlack md:hidden" >
                {/* Logo */}
                < h1
                    className="w-40 h-40 text-black bg-mpLightGreen rounded-2xl text-start text-3xl font-semibold flex flex-col justify-center" >
                    <p className="ms-8">Just</p>
                    <p className="ms-8">Music</p>
                </h1 >
                {/* Song Infos */}
                < div className="text-center flex flex-col items-center justify-center" >
                    {/* Toggle the className .messagedefilant
                    to turn on/off title scrolling */}
                    < div className="messagedefilant" >
                        <div className="font-bold text-white text-md"><span>Tambour Voilé</span>
                        </div>
                    </div >
                    <p className="text-mpLightGray text-xs">Médérice</p>
                </div >



                {/* Progress bar */}
                < div className="w-full flex flex-col items-center" >
                    <div className="progressbar-container w-48 h-1 bg-white rounded-full cursor-pointer relative">
                    </div>
                    <div className="times text-xs text-mpLightGray flex w-48 justify-between">
                        <p>00.00</p>
                        <p>59.59</p>
                    </div>
                </div >
                <div className="buttons w-36 flex justify-evenly">
                    {/* Previous btn */}
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            className="text-mpLightGreen w-6 h-6">
                            <path fillRule="evenodd"
                                d="M13.28 3.97a.75.75 0 010 1.06L6.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0zm6 0a.75.75 0 010 1.06L12.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z"
                                clipRule="evenodd" />
                        </svg>
                    </button>
                    {/* Play/Pause btn */}
                    <button className="p-1 rounded-full bg-mpLightGreen">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-black w-6 h-6">
                    <path fill-rule="evenodd"
                        d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                        clip-rule="evenodd" />
                </svg> */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            className="text-black w-6 h-6">
                            <path fillRule="evenodd"
                                d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z"
                                clipRule="evenodd" />
                        </svg>

                    </button>
                    {/* Next btn */}
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            className="text-mpLightGreen w-6 h-6">
                            <path fillRule="evenodd"
                                d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z"
                                clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div >
        </>
    )
}

export default App;
