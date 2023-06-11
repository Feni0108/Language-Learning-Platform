import { useState, useEffect } from "react";

function useFetch(url){
    const [newUrl, setNewUrl] = useState(null);
    const [loading ,setLoading] = useState(false);
    const [task,setTask]  = useState([]);

    if (newUrl !== url){
        setNewUrl(url);
    }

    const getTask = async()=>{
        setLoading(true)
        const response = await fetch(
            newUrl
        );
        const result = await response.json();
        setTask(result.result);
        setLoading(false);
    }


    useEffect(()=>{
        getTask();
    },[newUrl]);
    return {task};

}

export default useFetch;