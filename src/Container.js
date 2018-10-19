import React from 'react';

import withTheme from './withTheme';

const Container = ({ children, theme, ...rest }) => (
  <div className="container" {...rest}>
    {children}
    <style jsx>{`
      .container {
        max-width: ${theme.maxWidth}px;
        margin-right: auto;
        margin-left: auto;
        padding-right: ${(theme.baseSpacingUnit * 2) / 3}px;
        padding-left: ${(theme.baseSpacingUnit * 2) / 3}px;
      }
    `}</style>
  </div>
);

export default withTheme(Container);
