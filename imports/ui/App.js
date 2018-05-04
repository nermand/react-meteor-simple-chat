import React, { Component } from 'react';
import { Grid, Jumbotron } from 'react-bootstrap';
import { Slide, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { Consumer, Provider } from '../context/RootContext';
import Home from './Home';
import LoginScreen from './LoginScreen';

export default class App extends Component {
  render() {
    return (
      <Provider>
        <ToastContainer
          autoClose={2500}
          hideProgressBar
          newestOnTop
          transition={Slide}
        />
        <Jumbotron>
          <Grid bsClass="container">
            <Consumer>
              {context => {
                const { user } = context.state;

                return user ? <Home /> : <LoginScreen />
              }}
            </Consumer>
          </Grid>
        </Jumbotron>
      </Provider>
    )
  }
}
