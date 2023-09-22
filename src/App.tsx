import { lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
import SuspenseWrapper from './shared/Components/SuspenseWrapper';
import 'assets/Css/App.css';

const HomePage = lazy(() => import(/* webpackChunkName: "home-page" */ './pages/Home'));
const ContentsPage = lazy(() => import(/* webpackChunkName: "contents-page" */ './pages/Contents'));
const NotFound = lazy(() => import(/* webpackChunkName: "404" */ './shared/ErrorPages/404'));

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <SuspenseWrapper>

        <Switch>

          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/contents" exact>
            <ContentsPage />
          </Route>

          <Route>
            <NotFound />
          </Route>

        </Switch>
      </SuspenseWrapper>
    </BrowserRouter>
  </Provider>
);

export default App;
