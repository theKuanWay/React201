import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import AboutView from './Components/About/About';
import { Switch,Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={AboutView} />
      </Switch>
    </div>
  );
}

export default App;
