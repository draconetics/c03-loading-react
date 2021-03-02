import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductListComponent from './components/ProductList';
import Header from './components/Header';
import Item from './components/Item';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <ProductListComponent />
          </Route>
          <Route path="/item" component={Item} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
