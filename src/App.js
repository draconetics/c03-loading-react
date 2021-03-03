import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import ProductListComponent from './components/ProductList';
import Header from './components/Header';
import Item from './components/Item/index';
import Checklist from './components/Checklist/index';
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
    <div className="App" style={{ backgroundColor: '#F2F2F2' }}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <ProductListComponent />
          </Route>
          <ItemRoute path="/item" component={Item} />
          <Route path="/checklist" component={Checklist} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
