import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Dish from './components/Dish'
import DishForm from './components/DishForm';

const App = () => (
  <Segment basic>
    <NavBar />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/menu' component={Menu} />
      <Route exact path='/dish/:id' component={Dish} />
      <Route exact path='/dish/:id/edit' component={DishForm} />
    </Switch>
  </Segment>
);

export default App;
