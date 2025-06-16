const isoTimeFormat =(dateTIme) =>{
    const date = new Date(dateTIme);
    const localTime = date.toLocaleTimeString('en-US',{
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    });
    return localTime;
}

export default isoTimeFormat;