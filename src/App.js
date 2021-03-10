/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import ProductList from './pages/ProductList';
import Header from './components/Header';
import Item from './pages/Item/index';
import Checklist from './pages/Checklist/index';
import Footer from './components/Footer';
import { isEmptyObject } from './components/utils';

const ItemRoute = ({ component, ...rest }) => {
  const ComponentToRender = component;
  return (
    <Route
      {...rest}
      render={(props) => ((isEmptyObject(props.location)
        || !props.location.state
        || isEmptyObject(props.location.state))
        ? <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        : <ComponentToRender {...props} />)}
    />
  );
};

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <ItemRoute path="/item" component={Item} />
          <Route path="/checklist" component={Checklist} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
