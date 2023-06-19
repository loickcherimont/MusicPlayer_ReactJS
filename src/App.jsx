import React from "react";
import { Mp3 } from "./components/Mp3";
import { fetchTracks } from "./assets/scripts/main.js";

const tracks = await fetchTracks("./data/tracks.json");

function App() {
    // const [tracks, setTracks] = useState([]);

    console.log(tracks);

    return (
        <>
            {/* Laptops */}
            <div class="app w-full h-screen hidden md:flex">
                <section class="left w-6/12 h-full bg-mpDarkGreen flex justify-center items-center">
                    <div class="player w-[213px] h-96 bg-mpLightBlack rounded-2xl flex flex-col items-center justify-evenly">

                        <header class="w-28 h-28 rounded-lg">
                            <img src="/img/music-img.jpg" alt="Simple Illustration for Music Player"
                                class="w-full h-full rounded-lg" />
                        </header>
                        {/* *** Beginning: To Add in Mobile Part *** */}
                        {/* Song Infos */}
                        {/* <div class="text-center flex flex-col items-center justify-center">

                    Toggle the class .messagedefilant
                    to turn on/off title scrolling
                    <div class="messagedefilant">
                        <div class="font-bold text-white text-md"><span>Tambour Voilé</span>
                        </div>
                      </div>
                    <p class="text-mpLightGray text-xs">Médérice</p>
                </div> */}
                        <Mp3
                            title={tracks[0].title}
                            author={tracks[0].author}
                            src={tracks[0].src}
                        />



                        {/* Progress bar */}
                        <div class="w-full flex flex-col items-center">
                            <div class="progressbar-container w-48 h-1 bg-white rounded-full cursor-pointer relative">
                            </div>
                            <div class="times text-xs text-mpLightGray flex w-48 justify-between">
                                <p>00.00</p>
                                <p>59.59</p>
                            </div>
                        </div>
                        <div class="buttons w-36 flex justify-evenly">
                            {/* Previous btn */}
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    class="text-mpLightGreen w-6 h-6">
                                    <path fill-rule="evenodd"
                                        d="M13.28 3.97a.75.75 0 010 1.06L6.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0zm6 0a.75.75 0 010 1.06L12.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z"
                                        clip-rule="evenodd" />
                                </svg>
                            </button>
                            {/* Play/Pause btn */}
                            <button class="p-1 rounded-full bg-mpLightGreen">
                                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="text-black w-6 h-6">
                            <path fill-rule="evenodd"
                                d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                                clip-rule="evenodd" />
                        </svg> */}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    class="text-black w-6 h-6">
                                    <path fill-rule="evenodd"
                                        d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z"
                                        clip-rule="evenodd" />
                                </svg>

                            </button>
                            {/* Next btn */}
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    class="text-mpLightGreen w-6 h-6">
                                    <path fill-rule="evenodd"
                                        d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z"
                                        clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>
                        {/* End : To Add in Mobile Part */}
                    </div>
                </section>
                <section class="right w-6/12 h-full bg-mpLightBlack flex justify-center items-center">
                    <h1 class="logo text-mpLightGreen text-8xl">
                        <p>Just</p>
                        <p class="mt-10">Music</p>
                    </h1>
                </section>
            </div>

            {/* Mobile */}
            <div class="app flex flex-col items-center justify-around w-full h-screen bg-mpLightBlack md:hidden">
                {/* Logo */}
                <h1
                    class="w-40 h-40 text-black bg-mpLightGreen rounded-2xl text-start text-3xl font-semibold flex flex-col justify-center">
                    <p class="ms-8">Just</p>
                    <p class="ms-8">Music</p>
                </h1>
                {/* Song Infos */}
                <div class="text-center flex flex-col items-center justify-center">
                    {/* Toggle the class .messagedefilant
                    to turn on/off title scrolling */}
                    <div class="messagedefilant">
                        <div class="font-bold text-white text-md"><span>Tambour Voilé</span>
                        </div>
                    </div>
                    <p class="text-mpLightGray text-xs">Médérice</p>
                </div>



                {/* Progress bar */}
                <div class="w-full flex flex-col items-center">
                    <div class="progressbar-container w-48 h-1 bg-white rounded-full cursor-pointer relative">
                    </div>
                    <div class="times text-xs text-mpLightGray flex w-48 justify-between">
                        <p>00.00</p>
                        <p>59.59</p>
                    </div>
                </div>
                <div class="buttons w-36 flex justify-evenly">
                    {/* Previous btn */}
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            class="text-mpLightGreen w-6 h-6">
                            <path fill-rule="evenodd"
                                d="M13.28 3.97a.75.75 0 010 1.06L6.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0zm6 0a.75.75 0 010 1.06L12.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z"
                                clip-rule="evenodd" />
                        </svg>
                    </button>
                    {/* Play/Pause btn */}
                    <button class="p-1 rounded-full bg-mpLightGreen">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="text-black w-6 h-6">
                    <path fill-rule="evenodd"
                        d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                        clip-rule="evenodd" />
                </svg> */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            class="text-black w-6 h-6">
                            <path fill-rule="evenodd"
                                d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z"
                                clip-rule="evenodd" />
                        </svg>

                    </button>
                    {/* Next btn */}
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            class="text-mpLightGreen w-6 h-6">
                            <path fill-rule="evenodd"
                                d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z"
                                clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        </>
    )
}

export default App;
