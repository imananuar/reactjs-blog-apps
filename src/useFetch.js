import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [data, setdata] = useState (null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        setTimeout(() => {
            fetch(url)
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
                setError(err.message)
                setIsPending(false)
                // Only able to display when there is network error
            })
        }, 1000);
    }, [url]);

    return { data, isPending, error}
}

export default useFetch