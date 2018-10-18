import React, { Component } from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
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

  hoistNonReactStatics(HOC, WrappedComponent);

  return HOC;
};

export default withTheme;
