import React, { useCallback, useEffect, useState } from "react";
import { Mp3 } from "./components/Mp3";
import { fetchTracks, getTrackTime } from "./assets/scripts/main.js";
import { useRef } from "react";
import image from "./assets/img/music-img.jpg";
import { Times } from "./components/Times";
import "./assets/styles/general.css";

const tracks = await fetchTracks("./data/tracks.json");



function App() {
    const LAST_TRACK_INDEX = tracks.length - 1;
    // Reference to audio tag
    const audioRef = useRef();
    const progressBarRef = useRef();
    const playAnimationRef = useRef();

    // ** States **
    const [trackIndex, setTrackIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);
    const [currentTime, setCurrentTime] = useState("00.00");


    const [duration, setDuration] = useState(0);

    // Update the progress bar value when music is playing
    // Key functions: requestAnimationFrame
    const repeat = useCallback(() => {
        const currentTime2 = audioRef.current.currentTime;
        setCurrentTime(currentTime2);
        progressBarRef.current.value = currentTime2;
        progressBarRef.current.style.setProperty('--range-progress', `${(progressBarRef.current.value / duration) * 100}%`);

        playAnimationRef.current = requestAnimationFrame(repeat);

    }, [])

    // Control play/pause effect of tracks
    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
            playAnimationRef.current = requestAnimationFrame(repeat);

        } else {
            audioRef.current.pause();
            cancelAnimationFrame(playAnimationRef.current);

        }
    }, [isPlaying, audioRef, repeat]);

    // To keep play/pause mode when user change track
    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
        }
    }, [currentTrack.src])


    // ** Handlers **

    // Read previous track
    const handlePrevious = (e) => {
        e.preventDefault();
        if (trackIndex === 0) {
            setTrackIndex(LAST_TRACK_INDEX);
            setCurrentTrack(tracks[LAST_TRACK_INDEX]);
        } else {
            setTrackIndex((trackIndex) => trackIndex - 1);
            setCurrentTrack(tracks[trackIndex - 1])
        }
    }

    // Read next track
    const handleNext = (e) => {
        e.preventDefault();
        if (trackIndex === LAST_TRACK_INDEX) {
            setTrackIndex(0);
            setCurrentTrack(tracks[0])
        } else {
            setTrackIndex((trackIndex) => trackIndex + 1);
            setCurrentTrack(tracks[trackIndex + 1])
        }
    }

    // Display music duration
    const handleDuration = () => setDuration(audioRef.current.duration);

    // Update the current time
    const handleCurrentTime = () => setCurrentTime(audioRef.current.currentTime);

    const playingButton = (e) => {
        e.preventDefault();
        setIsPlaying(!isPlaying);
    }

    const handleProgressChange = () => {
        // Update current time
        // When progress bar change position
        audioRef.current.currentTime = progressBarRef.current.value;
    }

    // If music is ended
    // Return to the beginning
    // And set a pause mode
    const handleEnded = () => {
        audioRef.current.currentTime = 0;
        audioRef.current.pause();
        setIsPlaying(false);
        progressBarRef.current.value = 0;
    }
    return (
        <>
            {/* Laptops */}
            <div className="app w-full h-screen md:flex">
                <section className="left w-full md:w-6/12 h-full bg-mpLightBlack md:bg-mpDarkGreen  flex justify-center items-center">
                    <div className="player w-full md:w-[213px] h-full md:h-96 bg-mpLightBlack rounded-2xl flex flex-col items-center justify-evenly">

                        <header className="w-28 h-28 rounded-lg">
                            <img src={image} alt="Simple Illustration for Music Player"
                                className="w-full h-full rounded-lg" />
                        </header>

                        <Mp3
                            title={currentTrack.title}
                            isPlaying={isPlaying}
                            author={currentTrack.author}
                        />




                        <div className="w-full flex flex-col items-center">

                            {/* Seekbar and time */}
                            <input
                                type="range"
                                ref={progressBarRef}
                                defaultValue="0"
                                onChange={handleProgressChange}
                                max={duration} // Max is equivalent the total duration required to accomplish the reading
                            />
                            <Times current={getTrackTime(currentTime)} total={getTrackTime(duration)} />
                        </div>
                        <audio
                            src={currentTrack.src}
                            ref={audioRef}
                            onLoadedMetadata={handleDuration}
                            onTimeUpdate={handleCurrentTime}
                            onEnded={handleEnded}
                        />
                        <div className="buttons w-full md:w-36 flex justify-evenly">
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
                                        clipRule="evenodd" />
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
                <section className="hidden right w-6/12 h-full bg-mpLightBlack md:flex justify-center items-center">
                    <h1 className="logo text-mpLightGreen text-8xl">
                        <p>Just</p>
                        <p className="mt-10">Music</p>
                    </h1>
                </section>
            </div >
        </>
    )
}

export default App;
