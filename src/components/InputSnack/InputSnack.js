import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
  })

class InputSnack extends Component {
    constructor() {
        super();
        this.state = {
          snack: []
        }
    }

    handleSnackChange = (event) => {
        this.setState ({
          snack: event.target.value
        })
      }
      
      sendStackToRedux = () => {
        const action = { type: 'ADD_SNACK', payload: this.state.snack };
        this.props.dispatch(action);
      }
  
      render() {
        return (
            <div className="App">
                <p>Enter Snack</p>
                <TextField label="Snack" label="Snack" onChange={this.handleSnackChange} value={this.state.snack} />
                <Button color="primary" variant="contained" onClick={this.sendStackToRedux}>Add Snack</Button>
            </div>
        );
    }
}


export default connect(mapReduxStateToProps)(InputSnack);