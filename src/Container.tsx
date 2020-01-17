import React from 'react';

import useTheme from './useTheme';

export interface Props {
  children: object;
}

const Container = ({ children, ...rest }: Props) => {
  const theme = useTheme();
  return (
    <div className="container" {...rest}>
      {children}
      <style jsx>{`
        .container {
          max-width: ${theme.maxWidth}px;
          margin-right: auto;
          margin-left: auto;
          padding-right: ${(theme.baseSpacingUnit * 2) / 3}px;
          padding-left: ${(theme.baseSpacingUnit * 2) / 3}px;
        }
        @media (min-width: ${theme.breakpoints.m}px) {
          .container {
            padding-right: ${theme.baseSpacingUnit}px;
            padding-left: ${theme.baseSpacingUnit}px;
          }
        }
      `}</style>
    </div>
  );
};

export default Container;
