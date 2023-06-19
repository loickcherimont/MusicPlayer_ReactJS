import React from "react";

export function Mp3({title, author, src}) {
    return <div class="text-center flex flex-col items-center justify-center">

        {/* <audio src={src} autoPlay loop>
    <source src={src}/>
</audio> */}
    {/* Toggle the class .messagedefilant
    to turn on/off title scrolling */}
    <div class="messagedefilant">
        <div class="font-bold text-white text-md"><span>{title}</span>
        </div>
      </div>
    <p class="text-mpLightGray text-xs">{author}</p>
</div>
}