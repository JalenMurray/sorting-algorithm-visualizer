import styled from 'styled-components';

export const BarContainer = styled.div`
  flex: 1;
  max-width: calc(100% / ${({ n }) => n});
  height: ${({ number }) => `${number}px`};
  top: 100%;
  border-radius: 5px;
  box-sizing: border-box;
`;
