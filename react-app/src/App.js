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
import OneDish from './components/OneDish';
import Home from './components/Home';
import CreateDish from './components/CreateDish';
import TopReviewsPage from './components/TopReviews/index2';
import TopRestaurantsPage from './components/Restaurants/index2';

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
        <Route path='/dish/reviews/:restaurantId' exact={true}>
          <TopReviewsPage/>
        </Route>
        <Route path='/primarydish/create' exact={true} >
          <CreateDish/>
        </Route>
        <Route path='/dish/:dishId' exact={true} >
          <OneDish/>
        </Route>
        <Route path='/restaurants' exact={true} >
          <TopRestaurantsPage/>
        </Route>
        <Route path='/' exact={true} >
          <Home/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
