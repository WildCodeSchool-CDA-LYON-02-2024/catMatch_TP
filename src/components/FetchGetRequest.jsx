import {useEffect, useState} from "react";

export default function FetchGetRequest() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://api.thecatapi.com/v1/images/search?limit=10`
                );
                if (!response.ok) {
                    throw new Error(`HTTP error: Status ${response.status}`);
                }
                let data = await response.json();
                setData(data);
                setError(null);
            } catch (err) {
                setError(err.message);
                setData(null);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    return (
        <>
            {/* TRYING FETCH METHOD */}
            {/* https://blog.logrocket.com/modern-api-data-fetching-methods-react/ */}
            {/*{loading && (<p>Loading...</p>)}*/}
            {/*{error && (<p>{error}</p>)}*/}

            {/*<div className="picture-left" onClick={handleLeftClick}>*/}
            {/*    {data && data?.map(({id, url}) => {*/}
            {/*        <img*/}
            {/*            key={id}*/}
            {/*            src={url}*/}
            {/*            alt={id}*/}
            {/*            className="img-left"*/}
            {/*        />*/}
            {/*    })}*/}
            {/*    <p className="score-left">*/}
            {/*        {countLeft}*/}
            {/*    </p>*/}
            {/*</div>*/}
        </>
    )}