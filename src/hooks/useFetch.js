import { useEffect, useState } from "react"

const useFetch = () =>{
    const [services,setServices] = useState([]);
    const [service,setService] = useState([]);

    const useService = () =>{
        useEffect(() =>{
            fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setService(data)
            })
        },[]);
        return [services,service]
    }

    return {
        useService,
    }
};



export default useFetch;