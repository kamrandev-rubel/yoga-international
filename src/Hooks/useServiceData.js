import { useEffect, useState } from "react";


const useServiceData = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return [services, setServices];
};

export default useServiceData;