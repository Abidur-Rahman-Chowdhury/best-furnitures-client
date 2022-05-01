import React from 'react';
import './AddItem.css';

const AddItems = () => {
  const handelAddFurniture = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const img = e.target.img.value;
    const des = e.target.des.value;
    const price = parseInt(e.target.price.value);
    const quantity = parseInt(e.target.quantity.value);
    const sold = parseInt(e.target.sold.value);
      const supplier = e.target.supplier.value;
      const furnitures = {
          name,
          img,
          des,
          price,
          quantity,
          sold,
          supplier
      }
      console.log(name, img, des, price, quantity, sold, supplier);
      fetch('http://localhost:5000/furnitures', {
          method: 'POST',
          headers: {
              "content-type": "application/json",
          },
          body:JSON.stringify(furnitures)
      })
          .then(res => res.json())
          .then(data => {
              if (data.insertedId) {
                  alert('Furniture successfully added');
                  e.target.reset();
          }
      })
  };
  return (
    <div className="mt-20 mb-[200px]">
      <div className="container">
        <h2 className="text-center mb-4 text-4xl font-bold">Add Furniture</h2>
        <form
          onSubmit={handelAddFurniture}
          className="w-[80%] mx-auto addItem-form"
        >
          <input type="text" name="name" placeholder="Name" />

          <input type="text" name="img" placeholder="Image URL" />

          <input type="text" name="des" placeholder="Description" />

          <input type="number" name="price" placeholder="Price" />

          <input type="number" name="quantity" placeholder="Quantity" />

          <input type="number" name="sold" placeholder="Sold" />

          <input type="text" name="supplier" placeholder="Supplier Name" />
          <div className="text-center">
            <input
              className="mb-4
                        mt-2 btn bg-[green] text-white font-bold"
              type="submit"
              value="Add Furniture"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
