import React, { Component } from 'react';
import SnackItem from '../SnackItem/SnackItem';
import { connect } from 'react-redux';
const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
  })

class SnackList extends Component {

  
      render() {
        return (
            <div> 
                  {this.props.reduxStore.snackReducer.map( snack =>
                    <SnackItem key={snack} snack={snack} />
                  )}
            </div>
        );
    }
}


export default connect(mapReduxStateToProps)(SnackList);