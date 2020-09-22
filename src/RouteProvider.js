import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

function RouteProvider({ children }) {
  return <Router>{children}</Router>;
}

export default RouteProvider;
