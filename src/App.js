import React, { Component } from 'react';
import './App.css';
import {withStyles} from '@material-ui/core/styles';
import {MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import SnackList from './components/SnackList/SnackList';
import InputSnack from './components/InputSnack/InputSnack';

const styles = {
  root: {
    backgroundColor: 'gray'
  }
}

const theme = createMuiTheme({
  palette: {
    primary: green
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
      <div>
        <InputSnack/>
        <div>
          <h3>Snack Table</h3>
          <ul>
            <SnackList />
          </ul>
        </div>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);

