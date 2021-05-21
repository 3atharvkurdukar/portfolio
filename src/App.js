import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={null} />
        <Route path="/projects" component={null} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
