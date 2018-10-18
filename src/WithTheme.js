import React, { Component } from 'react';
import ThemeContext from './ThemeContext';

const withTheme = WrappedComponent => {
  class HOC extends Component {
    render() {
      return (
        <ThemeContext.Consumer>
          {theme => <WrappedComponent {...this.props} theme={theme} />}
        </ThemeContext.Consumer>
      );
    }
  }
  return HOC;
};

export default withTheme;
