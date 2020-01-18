import React from 'react';
import classNames from 'classnames';

import useTheme from './useTheme';
import { Theme } from './theme';

export interface Props {
  align: 'top' | 'bottom' | 'center';
  children: React.ReactNode;
  className?: string;
  gutter?: number;
}

enum Alignment {
  Top = 'top',
  Bottom = 'bottom',
  Center = 'center',
}

const alignmentMap = {
  top: 'flex-start',
  bottom: 'flex-end',
  center: 'center',
};

const Row = ({
  align = Alignment.Top,
  children,
  className,
  gutter,
  ...rest
}: Props) => {
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
      <style jsx>{`
        .row {
          align-items: ${alignmentMap[align]};
        }
      `}</style>
    </div>
  );
};

export default Row;
