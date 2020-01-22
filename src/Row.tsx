import React from 'react';
import classNames from 'classnames';

import useTheme from './useTheme';
import { Theme } from './theme';

enum Alignment {
  Top = 'top',
  Bottom = 'bottom',
  Center = 'center',
}

export interface Props {
  align: Alignment;
  children: React.ReactElement;
  className?: string;
  gutter?: number;
}

export interface ChildProps {
  gutter: number;
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
  gutter: gutterProp,
  ...rest
}: Props) => {
  const theme: Theme = useTheme();
  const gutter: number =
    typeof gutterProp !== 'undefined' ? gutterProp : theme.baseSpacingUnit / 2;
  const validChildren = React.Children.toArray(children).filter(child =>
    React.isValidElement(child),
  );
  const childProps: ChildProps = { gutter };

  return (
    <div className={classNames('row', className)} {...rest}>
      {validChildren.map(child => React.cloneElement(child, childProps))}
      <style jsx>{`
        .row {
          display: flex;
          flex-wrap: wrap;
          margin-right: -${gutter}px;
          margin-left: -${gutter}px;
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
