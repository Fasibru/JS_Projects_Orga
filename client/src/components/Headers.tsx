import React from 'react';
import styled from 'styled-components';

const Headers: React.SFC = () => (
  <Wrapper>
    <HeaderItem>Created</HeaderItem>
    <HeaderItem>Last modified</HeaderItem>
    <HeaderItem>Title</HeaderItem>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  font-weight: bold;
`;

const HeaderItem = styled.div`
  flex: 1;
`;

export default Headers;
