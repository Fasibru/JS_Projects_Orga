import React from 'react';
import styled from 'styled-components';

const Headers: React.SFC = () => (
  <HeaderWrapper>
    <HeaderItem>Name</HeaderItem>
    <HeaderItem>Created</HeaderItem>
    <HeaderItem>Last modified</HeaderItem>
  </HeaderWrapper>
);

const HeaderWrapper = styled.div`
  display: flex;
  font-weight: bold;
`;

const HeaderItem = styled.div`
  flex: 1;
`;

export default Headers;
