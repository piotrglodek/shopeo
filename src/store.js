import React, { useReducer, createContext, useEffect } from 'react';
import { request, gql } from 'graphql-request';

const query = gql`
  {
    shoes {
      id
      name
      price
      image {
        url
      }
      category {
        name
        slug
      }
    }
    categories {
      name
      slug
    }
  }
`;

export const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
  const initialState = {
    cart: [],
    loading: true,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'FETCH':
        return { ...state, ...action.payload, loading: false };
      case 'ADD_TO_CART':
        return { ...state, cart: [...state.cart, action.payload] };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      const data = await request(process.env.REACT_APP_API, query);
      dispatch({ type: 'FETCH', payload: data });
    };
    fetchData();
  }, []);

  return (
    <ShopContext.Provider value={[state, dispatch]}>
      {children}
    </ShopContext.Provider>
  );
};
