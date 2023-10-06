// src/Routes.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ItemList from './components/ItemList';
// Import other CRUD components

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route  path="/" component={ItemList} />
        {/* Add routes for create, update, and delete components */}
      </Switch>
    </Router>
  );
};

export default Routes;
