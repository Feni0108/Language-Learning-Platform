import { useState, useEffect } from "react";

function useFetch(url){
    console.log(url);

    const [newUrl, setNewUrl] = useState(null);
    const [loading ,setLoading] = useState(false);
    const [pics,setPics]  = useState([]);

    if (newUrl !== url){
        setNewUrl(url);
    }

    const getPics = async()=>{
        setLoading(true);
        const response = await fetch(
            newUrl
        );
        const result = await response.json();
        setPics(result.fourWords);
        setLoading(false);
    }


    useEffect(()=>{
        console.log("Triggered the useEFFECT")
        getPics();
    },[newUrl]);

    console.log(pics);
    return {pics};

}

export default useFetch;



/*function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);


    useEffect(() => {
        async function fetchUrl() {
            const response = await fetch(url);
            const json = await response.json();
            setData(json);
            setLoading(false);
        }
        fetchUrl();
    }, [url]);
    console.log("fetch url stroy")
    console.log(data);
    return {data, loading};
}
export default useFetch;*/

