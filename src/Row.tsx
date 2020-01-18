import React from 'react';
import classNames from 'classnames';

import useTheme from './useTheme';
import { Theme } from './theme';

export interface Props {
  children: React.ReactNode;
  className?: string;
  gutter?: number;
}

const Row = ({ children, className, gutter, ...rest }: Props) => {
  const theme: Theme = useTheme();
  const spacing =
    typeof gutter !== 'undefined' ? gutter : theme.baseSpacingUnit / 2;

  return (
    <div className={classNames('row', className)} {...rest}>
      {React.Children.map(children as React.ReactElement[], child =>
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

export default Row;
