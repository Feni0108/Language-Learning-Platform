import { useState, useEffect } from "react";

function useFetch(url){
    const [newUrl, setNewUrl] = useState(null);
    const [loading ,setLoading] = useState(false);
    const [pics,setPics]  = useState([]);

    if (newUrl !== url){
        setNewUrl(url);
    }

    const getPics = async()=>{
        setLoading(true)
        const response = await fetch(
            newUrl
        );
        const result = await response.json();
        setPics(result.result);
        setLoading(false);
    }


    useEffect(()=>{
        getPics();
    },[newUrl]);
    return {pics};

}

export default useFetch;