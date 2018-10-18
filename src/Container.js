import React from 'react';

import withTheme from './withTheme';

const Container = ({ children, theme }) => (
  <div className="container">
    {children}
    <style jsx>{`
      .container {
        max-width: ${theme.maxWidth}px;
        margin-right: auto;
        margin-left: auto;
      }
    `}</style>
  </div>
);

export default withTheme(Container);
