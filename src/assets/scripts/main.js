export async function fetchTracks(path, options={}) {
    const headers = {
        'Content-Type': "application/json",
        'Accept': "application/json", 
        ...options.headers};
    const r = await fetch(path, {...options, headers});
    console.log(r.ok);
    if(r.ok) {
        return await r.json();
    }
}

// Fetch a duration in seconds
// Returns an object representing minutes/seconds for a track
export function getTrackTime(duration) {
    const roundedDuration = Math.round(duration);
    const seconds = roundedDuration % 60;

    const minutes = (roundedDuration - seconds) / 60;
    return `0${minutes}.${seconds < 10 ? `0${seconds}`:seconds}`;
}