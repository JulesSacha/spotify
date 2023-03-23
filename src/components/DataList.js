import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataList = ({data}) => {
  return (
    <div>
      <h1>Liste des données</h1>
      <ul>
        {data.map(item => (
          <li key={item._id}>
            <strong>{item.title}</strong> - {item.description} - {new Date(item.date).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataList;
