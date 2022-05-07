import { useEffect, useState } from "react"
import { baseUrl } from "../api/constant";

const useLoadFurnitures = () => {
    const [furnitures, setFurnitures] = useState([]);

    useEffect(() => {
        fetch(`${baseUrl}/furnitures`)
            .then(res => res.json())
            .then(data => setFurnitures(data));
        
    }, []);

    return [furnitures, setFurnitures];
}

export default useLoadFurnitures; 