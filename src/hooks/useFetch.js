import { useEffect, useState } from "react"

const useFetch = () =>{
    const [services,setServices] = useState([]);

    const useService = () =>{
        useEffect(() =>{
            fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => setServices(data))
        },[]);
        return services
    }

    return {
        useService,
    }
};



export default useFetch;