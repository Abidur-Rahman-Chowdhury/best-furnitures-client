import { useEffect, useState } from "react"

const useLoadFurnitures = () => {
    const [furnitures, setFurnitures] = useState([]);

    useEffect(() => {
        fetch('https://vast-wave-24751.herokuapp.com/furnitures')
            .then(res => res.json())
            .then(data => setFurnitures(data));
        
    }, []);

    return [furnitures, setFurnitures];
}

export default useLoadFurnitures;