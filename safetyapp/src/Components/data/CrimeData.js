import useFetch from '../hooks/useFetch';


const CrimeData = (stateAbbr, since, until) => {
    var offenseData;
    var apiKey = "upyOiUjTW8fApI6Ajzh3n1J2csGcEP7rHjcIc6S8";
    var arrestEndpoint = `api/arrest/states/offense/${stateAbbr}/all/${since}/${until}?api_key=${apiKey}`;

    const {
        data,
        isPending
    } = useFetch( `https://api.usa.gov/crime/fbi/sapi/${arrestEndpoint}`) || {};
    

    if(!isPending)
    {
        offenseData = data.data;
    }


    console.log(offenseData);
    return offenseData;
}


export default CrimeData;