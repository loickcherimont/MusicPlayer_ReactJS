import React from "react";

export function Times({ current, total }) {
    return <div className="times text-xs text-mpLightGray flex w-48 justify-between">
        <p>{ current }</p>
        <p>{ total }</p>
    </div>
}