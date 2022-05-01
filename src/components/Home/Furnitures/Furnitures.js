import React from 'react';
import { Link } from 'react-router-dom';
import useLoadFurnitures from '../../../hooks/useLoadFurnitures';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';
import Furniture from '../Furniture/Furniture';

const Furnitures = () => {
    const [furnitures, setFurnitures] = useLoadFurnitures();

    const sixFurnitures = furnitures.slice(0, 6);
    if (!sixFurnitures) {
        return <LoadingSpinner></LoadingSpinner>
    }
    return (
        <div className='container mt-10'>
          <div className="text-center quality-title mb-2">
          <h1 className="text-center text-5xl font-bold inline-block pb-4">
            Our <span className="text-[#9E877D]">Furnitures</span> 
          </h1>
            </div>
            
            <div className='mt-20 gap-4 place-items-center grid grid-cols-1 md:gird-cols-2 lg:grid-cols-3'>
                {
                    sixFurnitures.map(furniture => <Furniture key={furniture._id} furniture={furniture}></Furniture>)
                }
            </div>
            <div className='text-center'>
                <Link to='/manage-inventory'>
                <button className='bg-[#6C63FF] px-2 py-1 mt-4 mr-2 text-white font-bold' >Manage Inventory</button>
                </Link>
            </div>
        </div>
    );
};

export default Furnitures;