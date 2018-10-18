import React from 'react';

import WithTheme from './WithTheme';

const Row = ({ children }) => (
  <WithTheme>
    {theme => (
      <div className="row">
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
    )}
  </WithTheme>
);

export default Row;
