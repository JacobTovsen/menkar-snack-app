import React, { Component } from 'react';

class SnackItem extends Component {

  
      render() {
        return (
            <div>
                <li>{this.props.snack}</li>
            </div>
        );
    }
}


export default SnackItem;