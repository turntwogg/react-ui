import React from 'react';

import withTheme from './withTheme';

const Row = ({ children, theme, ...rest }) => (
  <div className="row" {...rest}>
    {children}
    <style jsx>{`
      .row {
        display: flex;
        flex-wrap: wrap;
        margin-left: ${theme.baseSpacingUnit / -2}px;
        margin-right: ${theme.baseSpacingUnit / -2}px;
      }
    `}</style>
  </div>
);

export default withTheme(Row);
