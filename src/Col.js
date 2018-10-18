import React from 'react';
import classNames from 'classnames';
import WithTheme from './WithTheme';
import css from 'styled-jsx/css';

const getWidths = size =>
  `
    flex-basis: ${(size / 12) * 100}%;
    width: ${(size / 12) * 100}%;
  `;

const Col = ({ children, sm, m, l }) => {
  return (
    <WithTheme>
      {theme => (
        <div
          className={classNames('col', {
            [`col--sm-${sm}`]: sm,
            [`col--m-${m}`]: m,
            [`col--m-${l}`]: l,
          })}
        >
          {children}
          <style jsx>{`
            .col {
              flex-basis: 100%;
              width: 100%;
              padding: 0 ${theme.baseSpacingUnit / 2}px;
            }

            @media (min-width: ${theme.breakpoints.sm}px) {
              .col--sm-1 {
                ${getWidths(1)};
              }
              .col--sm-2 {
                ${getWidths(2)};
              }
              .col--sm-3 {
                ${getWidths(3)};
              }
              .col--sm-4 {
                ${getWidths(4)};
              }
              .col--sm-5 {
                ${getWidths(5)};
              }
              .col--sm-6 {
                ${getWidths(6)};
              }
              .col--sm-7 {
                ${getWidths(7)};
              }
              .col--sm-8 {
                ${getWidths(8)};
              }
              .col--sm-9 {
                ${getWidths(9)};
              }
              .col--sm-10 {
                ${getWidths(10)};
              }
              .col--sm-11 {
                ${getWidths(11)};
              }
              .col--sm-12 {
                ${getWidths(12)};
              }
            }

            @media (min-width: ${theme.breakpoints.m}px) {
              .col--m-1 {
                ${getWidths(1)};
              }
              .col--m-2 {
                ${getWidths(2)};
              }
              .col--m-3 {
                ${getWidths(3)};
              }
              .col--m-4 {
                ${getWidths(4)};
              }
              .col--m-5 {
                ${getWidths(5)};
              }
              .col--m-6 {
                ${getWidths(6)};
              }
              .col--m-7 {
                ${getWidths(7)};
              }
              .col--m-8 {
                ${getWidths(8)};
              }
              .col--m-9 {
                ${getWidths(9)};
              }
              .col--m-10 {
                ${getWidths(10)};
              }
              .col--m-11 {
                ${getWidths(11)};
              }
              .col--m-12 {
                ${getWidths(12)};
              }

            @media (min-width: ${theme.breakpoints.l}px) {
              .col--l-1 {
                ${getWidths(1)};
              }
              .col--l-2 {
                ${getWidths(2)};
              }
              .col--l-3 {
                ${getWidths(3)};
              }
              .col--l-4 {
                ${getWidths(4)};
              }
              .col--l-5 {
                ${getWidths(5)};
              }
              .col--l-6 {
                ${getWidths(6)};
              }
              .col--l-7 {
                ${getWidths(7)};
              }
              .col--l-8 {
                ${getWidths(8)};
              }
              .col--l-9 {
                ${getWidths(9)};
              }
              .col--l-10 {
                ${getWidths(10)};
              }
              .col--l-11 {
                ${getWidths(11)};
              }
              .col--l-12 {
                ${getWidths(12)};
              }
            }
          `}</style>
        </div>
      )}
    </WithTheme>
  );
};

export default Col;
