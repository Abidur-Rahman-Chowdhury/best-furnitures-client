import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useLoadFurnitures from '../../hooks/useLoadFurnitures';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';


const ManageInventories = () => {
    const [furnitures,setFurnitures] = useLoadFurnitures();
    const navigate = useNavigate();
  const [, loading] = useAuthState(auth);
  
  const handelDelete =  (id) => {
    const proceed = window.confirm('Are you sure you want to delete?');
    if (proceed) {
      const url = `http://localhost:5000/furnitures/${id}`;
      console.log(url);
      fetch(url, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert('Successfully deleted furniture');
              const restFurniture = furnitures.filter(furniture => furniture._id !== id);
              console.log(restFurniture);
              setFurnitures(restFurniture);
          }
        });
    }
  };

    return !furnitures ? <LoadingSpinner></LoadingSpinner> : <div >
        <div className='container mt-10 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-[150px]'>
        
        {
          furnitures.map(furniture =><div key={furniture._id} className="mb-4">
          <div className="img-container border p-4 rounded-lg">
            <img className="w-full" src={furniture.img} alt="" />
            <h4 className="text-center  mt-2 text-xl font-bold">{furniture.name}</h4>
            <h4 className="text-center ">{furniture.des}</h4>
            <h4 className="text-center font-bold">Price: $ {furniture.price}</h4>
            <h4 className="text-center font-bold">Quantity: {furniture.quantity}</h4>
            <h4 className="text-center font-bold">Supplier: {furniture.supplier}</h4>
            <div className="flex justify-center">
              <button
                onClick={() => handelDelete(furniture._id)}
                className="bg-[red] px-2 py-1 mt-4 mr-2 text-white font-bold"
              >
                Delete
              </button>
            </div>
          </div>
        </div> )
        }

        </div>
        <div className='text-center mb-2'>
             <button onClick={()=> navigate('/add-items')}  className='px-4 py-2 rounded-lg bg-[#338A71]'>Add New Item</button>
        </div>
    </div>;
};

export default ManageInventories;