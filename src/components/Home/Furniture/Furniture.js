import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Furniture.css';

const Furniture = ({ furniture }) => {
  const { _id, name, img, des, price, quantity, supplier } = furniture;
  const [user] = useAuthState(auth);

  const navigate = useNavigate();
  const navigateToUpdateStock = (id) => {
    navigate(`/update-stock/${id}`);
  };
  const addMyItems = () => {
    furniture.email = user.email;
    delete furniture._id;

    fetch('https://vast-wave-24751.herokuapp.com/myItems', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(furniture),
    })
      .then((res) => res.json())
      .then((data) => {
        
        alert('Successfully added my items');
      });
  };

  return (
    <div>
      <div className="img-container border p-4 rounded-lg">
        <img className="w-full" src={img} alt="" />
        <h4 className="text-center  mt-2 text-xl font-bold">{name}</h4>
        <h4 className="text-center ">{des}</h4>
        <h4 className="text-center font-bold">Price: $ {price}</h4>
        <h4 className="text-center font-bold">Quantity: {quantity}</h4>
        <h4 className="text-center font-bold">Supplier: {supplier}</h4>
        <div className="flex justify-center">
          <button
            className="bg-[#6C63FF] px-2 py-1 mt-4 mr-2 text-white font-bold"
            onClick={() => navigateToUpdateStock(_id)}
          >
            Update Stocks
          </button>
          <button
            className="bg-[#338A71] px-2 py-1 mt-4 mr-2 text-white font-bold"
            onClick={addMyItems}
          >
            Add My Items
          </button>
        </div>
      </div>
    </div>
  );
};

export default Furniture;
