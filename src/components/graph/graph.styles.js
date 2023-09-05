import styled from 'styled-components';

export const GraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const XAxis = styled.div`
  width: 100%;
  border-bottom: 2px solid #333;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  margin-top: 0px;
`;

export const Bars = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-end;
  position: relative;
  width: 100%;
  margin-top: 100px;
`;
