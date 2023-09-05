import Slider from '../slider/slider';
import { Container, Button, Dropdown } from 'react-bootstrap';

import { useContext, useState } from 'react';
import { GraphInfoContext } from '../../contexts/graph-info/graph-info';

const ALGORITHMS = ['Bubble', 'Selection', 'Insertion', 'Shaker', 'Quick'];

const CustomizeBar = () => {
  const { n, setNewN, shuffleList, sortList } = useContext(GraphInfoContext);
  const [algorithm, setAlgorithm] = useState('Bubble');

  const sortHandler = () => {
    sortList(algorithm);
  };

  const selectHandler = (eventKey) => {
    setAlgorithm(eventKey);
  };

  return (
    <Container fluid className="bg-secondary d-flex text-center">
      <div className="d-flex justify-content-center align-items-center">
        <Slider className="mx-2" value={n} onChangeHandler={setNewN} />
        <Container fluid className="d-flex">
          <Button variant="primary" size="lg" onClick={shuffleList} style={{ width: '100px' }} className="mx-2">
            Shuffle
          </Button>
          <Container fluid className="my-2">
            <h5 className="text-light">Current Algorithm: {algorithm}</h5>
            <Dropdown onSelect={selectHandler}>
              <Dropdown.Toggle size="lg" variant="info" id="dropdown-basic">
                Select an Algorithm
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {ALGORITHMS.map((algorithm) => (
                  <Dropdown.Item key={algorithm} eventKey={algorithm}>
                    {algorithm} Sort
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Container>
          <Button variant="success" size="lg" onClick={sortHandler} style={{ width: '100px' }} className="mx-2">
            Sort
          </Button>
        </Container>
      </div>
    </Container>
  );
};

export default CustomizeBar;
