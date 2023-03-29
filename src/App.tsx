import { hot } from 'react-hot-loader/root';
import { Helmet } from 'react-helmet';
import './app.css';
import Home from './components/Home';

function App() {
  return (
    <>
      <Helmet>
        <title>Chuck Norris Jokes</title>
      </Helmet>
      <Home />
    </>
  );
}

export default hot(App);
