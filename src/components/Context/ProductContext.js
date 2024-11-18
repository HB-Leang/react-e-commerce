import React, { createContext, useState, useEffect } from 'react';

// Create the context
export const ProductsContext = createContext();

// Create a provider component
export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // const response = await fetch('https://api.escuelajs.co/api/v1/products'); // Replace with your API URL
        const response = await fetch('https://fakestoreapi.com/products'); // Replace with your API URL
        if (!response.ok) throw new Error('Failed to fetch data');
        
        const data = await response.json();
        setProducts(data); // Set the fetched products in state
        console.log(data)
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Return the context provider with products, loading, and error states
  return (
    <ProductsContext.Provider value={{ products, loading, error }}>
      {children}
    </ProductsContext.Provider>
  );
};
