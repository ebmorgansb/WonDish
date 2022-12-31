import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/Nav/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import Dishes from './components/Dish';
import OneDish from './components/OneDish';
import Home from './components/Home';
import CreateDish from './components/CreateDish';
import CreateSecondaryDish from './components/CreateSecondaryDish';
import Footer from './components/Footer';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <Route path='/dishes' exact={true} >
          <Dishes/>
        </Route>
        <Route path='/primarydish/create' exact={true} >
          <CreateDish/>
        </Route>
        <Route path='/secondarydish/create' exact={true} >
          <CreateSecondaryDish/>
        </Route>
        <Route path='/dish/:dishId' exact={true} >
          <OneDish/>
        </Route>
        <Route path='/' exact={true} >
          <Home/>
        </Route>
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
