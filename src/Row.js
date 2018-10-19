import React from 'react';
import classNames from 'classnames';

import withTheme from './withTheme';

const Row = ({ children, className, theme, ...rest }) => (
  <div className={classNames('row', className)} {...rest}>
    {children}
    <style jsx>{`
      .row {
        display: flex;
        flex-wrap: wrap;
        margin-right: ${theme.baseSpacingUnit / -2}px;
        margin-bottom: -${theme.baseSpacingUnit}px;
        margin-left: ${theme.baseSpacingUnit / -2}px;
      }
    `}</style>
  </div>
);

export default withTheme(Row);
