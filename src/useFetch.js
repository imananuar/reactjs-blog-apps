import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [data, setdata] = useState (null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
            .then(response => {

                if (!response.ok) {
                    throw Error('could not fetch the data for that resource')
                }
                
                return response.json();
            })
            .then(data => {
                setdata(data)
                setIsPending(false)
                setError(null)
            })
            .catch ((err) => {

                if (err.name === 'AbortError'){
                    console.log('fetch aborted')
                } else {
                    setError(err.message)
                    setIsPending(false)
                }
                // Only able to display when there is network error
            })
        }, 100);

        return () => abortCont.abort();
    }, [url]);

    return { data, isPending, error}
}

export default useFetch