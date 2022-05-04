import React, { useEffect, useState } from 'react';

import { Link, useParams } from 'react-router-dom';
import './UpdateStock.css';

const UpdateStock = () => {
  const { id } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const url = `https://vast-wave-24751.herokuapp.com/furnitures/${id}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, [items]);
  const handelDelivered = () => {
    const newQuantity = items.quantity - 1;
    items.quantity = newQuantity;
    const url = `https://vast-wave-24751.herokuapp.com/furnitures/${id}`;

    fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(items),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert('delivered successful');
      });
  };
  const updateStock = (e) => {
    e.preventDefault();
    const newQuantity = parseInt(e.target.quantity.value);
    items.quantity = items.quantity + newQuantity;
    const url = `https://vast-wave-24751.herokuapp.com/furnitures/${id}`;
    fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(items),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert('re-stock successful');
        e.target.reset();
      });
  };
  return (
    <div className="mt-10 container  ">
      <div className="mb-4 flex justify-center">
        <div className="img-container border p-4 rounded-lg">
          <img className="w-full" src={items?.img} alt="" />
          <h4 className="text-center  mt-2 text-xl font-bold">
            ID:{items?._id}
          </h4>
          <h4 className="text-center  mt-2 text-xl font-bold">
            Name:{items?.name}
          </h4>
          <h4 className="text-center ">
            <span className="font-bold ">Description:</span> <br /> {items?.des}
          </h4>
          <h4 className="text-center font-bold">Price: $ {items?.price}</h4>
          <h4 className="text-center font-bold">Quantity: {items?.quantity}</h4>
          <h4 className="text-center font-bold">Sold: {items?.sold}</h4>
          <h4 className="text-center font-bold">Supplier: {items?.supplier}</h4>
          <div className="flex justify-center">
            <button onClick={handelDelivered} className="delivered-btn mt-4">
              Delivered
            </button>
          </div>
        </div>
      </div>
      <div className="mt-10 mb-4">
        <h2 className="text-center text-2xl font-bold">
          {' '}
          Re-Stock Furniture Quantity
        </h2>
        <form className="mt-5" onSubmit={updateStock}>
          <input
            className="w-[80%] border px-3 h-[40px] rounded-lg text-xl"
            type="text"
            name="quantity"
            placeholder="Re-Stock Furniture Quantity"
          />
          <input
            className=" text-xl font-bold bg-[green] px-4 py-1 rounded-lg text-white"
            type="submit"
            value="Re-Stock"
          />
        </form>
      </div>
      <div className="text-center mb-4">
        <Link to="/manage-inventory">
          <button className="bg-[#6C63FF] px-2 py-1 mt-4 mr-2 text-white font-bold">
            Manage Inventory
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UpdateStock;
