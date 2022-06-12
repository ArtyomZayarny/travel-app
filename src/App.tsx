import './App.css';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { LoginScreen } from './pages/LoginScreen';
import { RegistrationScreen } from './pages/RegistrationScreen';
import { BookingsScreen } from './pages/BookingsScreen';
import { TripDetailsScreen } from './pages/TripDetailsScreen';
import { HomeScreen } from './pages/HomeScreen';
import { Header } from './components/Header';
import { Routes } from './constants';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path={Routes.signIn} component={LoginScreen} />
          <Route path={Routes.signUp} component={RegistrationScreen} />
          <Route path={Routes.tripDetails} component={TripDetailsScreen} />
          <Route path={Routes.bookings} component={BookingsScreen} />
          <Route path={Routes.home} component={HomeScreen} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
