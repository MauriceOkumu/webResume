import React,{ Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import Portfolio from './Portfolio.jsx';
import About from './About.jsx';
import Connect from './Connect.jsx';
import Navbar from './Navbar.jsx';
import Home from './Home.jsx';
import rootReducers from './reducers/reducers.js';
import LikeCounter from './containers/LikeContainer.jsx';

const store = createStore(rootReducers,compose(
   window.devToolsExtension ? window.devToolsExtension() : f => f));
 
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    	title:'Let us build a web app',
    	url:'http://www.google.com',
    	src:'http://www.codeacademy.com',
    }
  }
 
  render() {
    return (
      <main>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/connect" component={Connect} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/counter" component={LikeCounter} />
          <Redirect to="/" />
      </Switch>
    </main>
    );
  }
};


// export default connect(mapStateToProps)(App)
 
document.addEventListener('DOMContentLoaded', function() {
  render(<Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
    ,
    document.getElementById('myWebsite')
  );
});
