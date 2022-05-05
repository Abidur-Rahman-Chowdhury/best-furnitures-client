import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [myItems,setMyItems] = useState([]) 
    useEffect(() => {
        const url = `http://localhost:5000/myItems/${user?.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMyItems(data));
    }, [myItems]);
    const CancelMyItems = (id) => {
        const proceed = window.confirm('Are you sure you want to cancel?');
    if (proceed) {
      const url = `http://localhost:5000/myItems/${id}`;
      console.log(url);
      fetch(url, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert('Successfully cancel my items');
            const restMyItems = myItems.filter(
              (myItem) => myItem._id !== id
            );
            console.log(restMyItems);
            setMyItems(restMyItems);
          }
        });
    }
        
    }
    if (!myItems) {
        return <LoadingSpinner></LoadingSpinner>
    }
    return (
        <div className="container place-items-center mt-10 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-[225px]">
        {myItems.map((myItem) => (
          <div key={myItem._id} className="mb-4">
            <div className="img-container border p-4 rounded-lg">
              <img className="w-full" src={myItem?.img} alt="" />
              <h4 className="text-center  mt-2 text-xl font-bold">
                {myItem?.name}
              </h4>
              <h4 className="text-center ">{myItem?.des}</h4>
              <h4 className="text-center font-bold">
                Price: $ {myItem?.price}
              </h4>
              <h4 className="text-center font-bold">
                Quantity: {myItem?.quantity}
              </h4>
              <h4 className="text-center font-bold">
                Supplier: {myItem?.supplier}
              </h4>
              <div className="flex justify-center">
                <button
                  onClick={() => CancelMyItems(myItem?._id)}
                  className="bg-[red] px-2 py-1 mt-4 mr-2 text-white font-bold"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
};

export default MyItems;