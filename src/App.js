import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './containers/Navbar/Navbar';
import Home from './pages/Home/Home';
import Projects from './pages/Projects';

const navLinks = [
  { title: 'Home', href: '/' },
  { title: 'Projects', href: '/projects' },
  { title: 'Contact', href: '/contact' },
];
const App = () => {
  return (
    <BrowserRouter>
      <Navbar links={navLinks} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
