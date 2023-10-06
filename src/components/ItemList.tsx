// src/components/ItemList.tsx
import React, { useEffect, useState } from 'react';
import { fetchItems } from '../services/api';


const ItemList: React.FC = () => {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    const loadItems = async () => {
      try {
        const data = await fetchItems();
        console.log("DATA FROM API", data)
        setItems(data);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    loadItems();
  }, []);

  return (
    <div>
      <h1 className='text-3xl font-bold'>List of OItems - API CALL</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
