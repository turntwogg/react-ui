import React from 'react';

import WithTheme from './WithTheme';

const Container = ({ children }) => (
  <WithTheme>
    {theme => (
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
    )}
  </WithTheme>
);

export default Container;
