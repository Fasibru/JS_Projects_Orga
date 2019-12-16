import React from 'react';
import styled from 'styled-components';

const Headers: React.SFC = () => (
  <HeaderWrapper>
    <HeaderItem>Name</HeaderItem>
    <HeaderItem>Created</HeaderItem>
    <HeaderItem>Last modified</HeaderItem>
  </HeaderWrapper>
);

export const HeaderWrapper = styled.div`
  display: flex;
  font-weight: bold;
`;

export const HeaderItem = styled.div`
  flex: 1;
`;

export default Headers;
