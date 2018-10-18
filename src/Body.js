import React from 'react';

import WithTheme from './WithTheme';

const Body = ({ children }) => (
  <WithTheme>
    {theme => (
      <body>
        {children}
        <style jsx>{`
          body {
            margin: 0;
            font-size: 1rem;
            font-family: ${theme.fonts.primary};
            line-height: ${theme.baseSpacingUnit / theme.baseFontSize};
          }
        `}</style>
      </body>
    )}
  </WithTheme>
);

export default Body;
