import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import AlbumListScreen from './screens/AlbumListScreen';
import NotFound from './screens/NotFoundScreen';

function App() {
  return (
    <Router>
      <div className='container'>
        <Switch>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/albums' component={AlbumListScreen} exact />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
