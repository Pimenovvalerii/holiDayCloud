import React from 'react';
import ReactDOM from 'react-dom';
import App from './componets/App';
import { store } from './store';
import { Provider, connect } from 'react-redux';
import * as serviceWorker from './serviceWorker';


// ReactDOM.render(<App />, document.getElementById('root'));


const ConnectedApp = connect(
    // 1 Map State To Props
    (state) => ({
      user: state.user,
      objUser : state.objUser,
    }),
    // 2 Map Dispatch To Props
    (dispatch) => ({
        // login:(value) => dispatch({ type: 'SWITCH_STATE', value}),
        login:(value) => dispatch({ type: 'LOGIN', value}),
        exit: () => dispatch({ type: 'SWITCH_USERS',}),
    }),
  )(App);


ReactDOM.render(
    <Provider store={store}>
      <ConnectedApp />
    </Provider>,
    document.getElementById('root'),
  );



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
