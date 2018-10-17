import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin-right: auto;
  margin-left: auto;
`;

export default Container;
