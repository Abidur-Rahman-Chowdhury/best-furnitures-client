import React, { useEffect } from 'react';
import useLoadFurnitures from '../../hooks/useLoadFurnitures';

const ManageInventory = ({ furniture }) => {
  const { _id, name, img, des, price, quantity, supplier } = furniture;
  const [furnitures, setFurnitures] = useLoadFurnitures();

  const handelDelete = (id) => {
    const proceed = window.confirm('Are you sure you want to delete?');
    if (proceed) {
      const url = `https://vast-wave-24751.herokuapp.com/furnitures/${id}`;
      
      fetch(url, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          
          if (data.deletedCount > 0) {
            alert('Successfully deleted furniture');
            const restFurniture = furnitures.filter(
              (furniture) => furniture._id !== id
            );
            
            setFurnitures(restFurniture);
          }
        });
    }
  };

  return (
    <div className="mb-4">
      <div className="img-container border p-4 rounded-lg">
        <img className="w-full" src={img} alt="" />
        <h4 className="text-center  mt-2 text-xl font-bold">{name}</h4>
        <h4 className="text-center ">{des}</h4>
        <h4 className="text-center font-bold">Price: $ {price}</h4>
        <h4 className="text-center font-bold">Quantity: {quantity}</h4>
        <h4 className="text-center font-bold">Supplier: {supplier}</h4>
        <div className="flex justify-center">
          <button
            onClick={() => handelDelete(_id)}
            className="bg-[red] px-2 py-1 mt-4 mr-2 text-white font-bold"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageInventory;
