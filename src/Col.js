import React from 'react';
import classNames from 'classnames';
import { resolve } from 'styled-jsx/css';
import PropTypes from 'prop-types';

import useTheme from './useTheme';

const getWidths = size => `
  flex-basis: ${(size / 12) * 100}%;
  max-width: ${(size / 12) * 100}%;
`;

const getResponsiveStyles = theme => {
  const bps = Object.keys(theme.breakpoints);
  return bps.map(
    bp => resolve`
    @media (min-width: ${theme.breakpoints[bp]}px) {
      .col--${bp}-1 {
        ${getWidths(1)}
      }
      .col--${bp}-2 {
        ${getWidths(2)}
      }
      .col--${bp}-3 {
        ${getWidths(3)}
      }
      .col--${bp}-4 {
        ${getWidths(4)}
      }
      .col--${bp}-5 {
        ${getWidths(5)}
      }
      .col--${bp}-6 {
        ${getWidths(6)}
      }
      .col--${bp}-7 {
        ${getWidths(7)}
      }
      .col--${bp}-8 {
        ${getWidths(8)}
      }
      .col--${bp}-9 {
        ${getWidths(9)}
      }
      .col--${bp}-10 {
        ${getWidths(10)}
      }
      .col--${bp}-11 {
        ${getWidths(11)}
      }
      .col--${bp}-12 {
        ${getWidths(12)}
      }
    }
  `,
  );
};

const Col = ({ children, className, gutter, sizes, ...rest }) => {
  const theme = useTheme();
  const bps = Object.keys(sizes).filter(bp =>
    theme.breakpoints.hasOwnProperty(bp),
  );
  const cNames = bps.map(bp => `col--${bp}-${sizes[bp]}`).join(' ');
  const resolved = getResponsiveStyles(theme);
  const rNames = resolved.map(r => r.className).join(' ');
  const rStyles = resolved.map(r => r.styles);
  return (
    <div className={classNames('col', className, cNames, rNames)} {...rest}>
      {children}
      <style jsx>{`
        .col {
          flex-basis: 100%;
          width: 100%;
          padding: 0 ${gutter}px;
          box-sizing: border-box;
        }
      `}</style>
      {rStyles.map((style, key) => React.cloneElement(style, { key }))}
    </div>
  );
};

Col.defaultProps = {
  sizes: {},
};

Col.propTypes = {
  sizes: PropTypes.object,
};

export default Col;
