import React from 'react';
import classNames from 'classnames';

import useTheme from './useTheme';

const Row = ({ children, className, gutter, ...rest }) => {
  const theme = useTheme();
  const defaultGutter = theme.baseSpacingUnit / 2;
  const spacing = gutter !== null ? gutter : defaultGutter;

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
          margin-left: -${spacing}px;
        }
      `}</style>
    </div>
  );
};

Row.defaultProps = {
  gutter: null,
};

export default Row;
