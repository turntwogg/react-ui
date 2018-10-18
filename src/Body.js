import React from 'react';

import withTheme from './withTheme';

const Body = ({ children, theme }) => (
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
);

export default withTheme(Body);
