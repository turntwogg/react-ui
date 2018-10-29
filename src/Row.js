import React from 'react';
import classNames from 'classnames';

import useTheme from './useTheme';

const Row = ({ children, className, gutter, ...rest }) => {
  const theme = useTheme();
  const spacing = gutter || theme.baseSpacingUnit / 2;
  return (
    <div className={classNames('row', className)} {...rest}>
      {React.Children.map(children, child =>
        React.cloneElement(child, { gutter: spacing }),
      )}
      <style jsx>{`
        .row {
          display: flex;
          flex-wrap: wrap;
          margin-right: -${spacing}px;
          margin-bottom: -${theme.baseSpacingUnit}px;
          margin-left: -${spacing}px;
        }
      `}</style>
    </div>
  );
};

Row.defaultProps = {};

export default Row;
