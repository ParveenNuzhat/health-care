import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Dentists from './Components/Dentists/Dentists';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Register from './Components/Register/Register';
import NotFound from './Components/NotFound/NotFound';
import ServiceDetail from './Components/ServiceDetail/ServiceDetail';
import Services from './Components/Services/Services';
import Login from './Components/Login/Login';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/services'>
            <Services></Services>
          </Route>
          <Route exact path='/register'>
            <Register></Register>
          </Route>
          <Route exact path='/login'>
            <Login></Login>
          </Route>
          <PrivateRoute path="/serviceDetail/:serviceId">
            <ServiceDetail></ServiceDetail>
          </PrivateRoute>
          <Route path="/dentists">
            <Dentists></Dentists>
          </Route>
          <Route exact path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
