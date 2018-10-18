import React from 'react';
import styled from 'styled-components';

const Col = styled.div`
  flex-basis: 100%;
  width: 100%;

  ${props =>
    props.sm &&
    `@media (min-width: ${props.theme.breakpoints.sm}px) {
      flex-basis: ${(props.sm / 12) * 100}%;
      width: ${(props.sm / 12) * 100}%;
      }`};

  ${props =>
    props.m &&
    `@media (min-width: ${props.theme.breakpoints.m}px) {
      flex-basis: ${(props.m / 12) * 100}%;
      width: ${(props.m / 12) * 100}%;
    }`};

  ${props =>
    props.l &&
    `@media (min-width: ${props.theme.breakpoints.l}px {
      flex-basis: ${(props.l / 12) * 100}%;
      width: ${(props.l / 12) * 100}%;
    }`};
`;

export default Col;
