import { GraphContainer, XAxis, Bars } from './graph.styles';
import Bar from '../bar/bar';
import { useContext } from 'react';
import { GraphInfoContext } from '../../contexts/graph-info/graph-info';

const Graph = () => {
  const { list, working } = useContext(GraphInfoContext);
  const { sorting, index } = working;

  return (
    <GraphContainer>
      <Bars>
        {list
          .slice()
          .reverse()
          .map((num, i) => (
            // eslint-disable-next-line
            <Bar key={i} number={`${num}`} className={sorting && index == i ? 'bg-danger' : 'bg-secondary'} />
          ))}
      </Bars>
      <XAxis />
    </GraphContainer>
  );
};

export default Graph;
