import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        fetch(url)
        .then(res => {
            if(!res.ok)
            {
                throw Error('could not fetch data for that resource');
            }
           return res.json(); /*This will return a promise with the json value from the api, .json() is asynchronous.*/
        })
        .then(data => {
           setData(data);
           setIsPending(false);
       })
        .catch((err) => {
            setError(err.message);
        });


   }, [url]);


   return {
       data,
       isPending,
       error
   };
}

export default useFetch;