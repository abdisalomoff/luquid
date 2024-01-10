const { useState, useEffect } = require("react")

const useFetch = (url) =>{
    const [data, setData] = useState([]);

    useEffect(()=>{
        const getData  = async(url)=>{
            try {
                const res = await fetch(url)
                const data = await res.json();
                // console.log(data);
                setData(data)
            } catch (error) {
                console.log(error)
            }
        }
        getData(url)
    }, [url])
    return data
}

export default useFetch;