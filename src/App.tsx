import { hot } from 'react-hot-loader/root';
import { Helmet } from 'react-helmet';
import './app.css';
import Home from './components/Home';
import { AppProviders } from './shared/contexts';

function App() {
  return (
    <>
      <Helmet>
        <title>Chuck Norris Jokes</title>
      </Helmet>
      <AppProviders>
        <Home />
      </AppProviders>
    </>
  );
}

export default hot(App);
