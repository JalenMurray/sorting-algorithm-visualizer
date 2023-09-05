import { BarContainer } from './bar.styles';
import { GraphInfoContext } from '../../contexts/graph-info/graph-info';
import { useContext } from 'react';

const Bar = ({ number, ...otherProps }) => {
  const { n } = useContext(GraphInfoContext);
  return <BarContainer n={n} number={number} {...otherProps}></BarContainer>;
};

export default Bar;
