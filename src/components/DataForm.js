import React, { useState } from 'react';
import axios from 'axios';

const DataForm = ({fetchData}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/data', {
        title: title,
        description: description,
      });

      setTitle('');
      setDescription('');
      fetchData();

    } catch (error) {
      console.error('Error adding data:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <button type="submit">Add Data</button>
    </form>
  );
};

export default DataForm;
