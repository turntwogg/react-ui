import React from 'react';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: ${props => props.theme.baseSpacingUnit / -2};
  margin-right: ${props => props.theme.baseSpacingUnit / -2};
`;

export default Row;
