import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductListComponent from './components/ProductList';
import Header from './components/Header';
import Item from './components/Item/index';
import Checklist from './components/Checklist/Checklist';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#F2F2F2' }}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <ProductListComponent />
          </Route>
          <Route path="/item" component={Item} />
          <Route path="/checklist" component={Checklist} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
