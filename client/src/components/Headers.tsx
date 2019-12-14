import React from 'react';
import styled from 'styled-components';

const Headers: React.SFC = () => (
  <Wrapper>
    <HeaderItem>Date</HeaderItem>
    <HeaderItem>Title</HeaderItem>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
`;

const HeaderItem = styled.div`
  flex: 1;
`;

export default Headers;
