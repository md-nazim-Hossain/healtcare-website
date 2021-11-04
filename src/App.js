import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header/Header';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home/Home';
import AuthProvider from './Context/AuthProvider';
import Register from './components/Register/Register';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Doctors from './components/Doctors/Doctors';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <AuthProvider>
        <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/register'>
            <Register></Register>
          </Route>
          <PrivateRoute path='/doctors'>
            <Doctors></Doctors>
          </PrivateRoute>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
