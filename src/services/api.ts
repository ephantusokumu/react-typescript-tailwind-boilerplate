// src/services/api.ts
const API_BASE_URL = 'https://jsonplaceholder.typicode.com'; 

export const fetchItems = async () => {
  const response = await fetch(`${API_BASE_URL}/posts`);
  if (!response.ok) {
    throw new Error('Failed to fetch items.');
  }
  return response.json();
};

export const createItem = async (itemData: any) => {
  const response = await fetch(`${API_BASE_URL}/items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(itemData),
  });
  if (!response.ok) {
    throw new Error('Failed to create item.');
  }
  return response.json();
};
