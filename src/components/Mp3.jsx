import React from "react";

export function Mp3({ title, author }) {
    return <div className="text-center flex flex-col items-center justify-center">
        <div className="messagedefilant">
            <div className="font-bold text-white text-md"><span>{title}</span>
            </div>
        </div>
        <p className="text-mpLightGray text-xs">{author}</p>
    </div>
}