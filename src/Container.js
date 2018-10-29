import React from 'react';

import useTheme from './useTheme';

const Container = ({ children, ...rest }) => {
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
      `}</style>
    </div>
  );
};

export default Container;
