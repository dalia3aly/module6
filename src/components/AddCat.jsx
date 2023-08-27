import React, { useState } from 'react';

function AddCat({ onAdd }) {
  const [name, setName] = useState('');
  const [latinName, setLatinName] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {                      // Updated for Exercise 5.1 & 5.2           
    e.preventDefault();
    onAdd({ name, latinName, image });
    setName('');
    setLatinName('');
    setImage('');
  };

  return (
    <form className="add-cat-form"onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Latin Name"
        value={latinName}
        onChange={(e) => setLatinName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button type="submit">Add Cat</button>
    </form>
  );
}

export default AddCat;
