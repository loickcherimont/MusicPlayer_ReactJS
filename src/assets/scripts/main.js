
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