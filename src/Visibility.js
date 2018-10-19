import React from 'react';
import classNames from 'classnames';
import { resolve } from 'styled-jsx/css';

import withTheme from './withTheme';

const getResponsiveStyles = theme => {
  const bps = Object.keys(theme.breakpoints);
  return bps.map(
    bp => resolve`
      @media (min-width: ${theme.breakpoints[bp]}px) {
        .visibility-visible-${bp} {
          position: static !important;
          clip: initial;
        }

        .visibility-hidden-${bp} {
          position: absolute !important;
          clip: rect(1px, 1px, 1px, 1px);
        }
      }`,
  );
};

const Visibility = ({ children, hidden, visible, theme, ...rest }) => {
  const hiddenClass = Array.isArray(hidden)
    ? hidden
        .filter(h => theme.breakpoints.hasOwnProperty(h))
        .map(bp => `visibility-hidden-${bp}`)
        .join(' ')
    : 'visibility-hidden';
  const visibleClass = Array.isArray(visible)
    ? visible
        .filter(v => theme.breakpoints.hasOwnProperty(v))
        .map(bp => `visibility-visible-${bp}`)
        .join(' ')
    : 'visibility-visible';
  const resolved = getResponsiveStyles(theme);
  const rStyles = resolved.map(r => r.styles);
  const rClasses = resolved.map(r => r.className).join(' ');

  return (
    <span
      className={classNames('visibility', hiddenClass, visibleClass, rClasses)}
    >
      {children}
      <style jsx>{`
        .visibility-hidden {
          position: absolute !important;
          clip: rect(1px, 1px, 1px, 1px);
        }
      `}</style>
      {rStyles.map(style => style)}
    </span>
  );
};

Visibility.defaultProps = {
  hidden: true,
  visible: [],
};

export default withTheme(Visibility);
