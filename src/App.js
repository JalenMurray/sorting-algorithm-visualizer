import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Fragment } from 'react';

import Graph from './components/graph/graph';
import CustomizeBar from './components/customize-bar/customize-bar';

function App() {
  return (
    <Fragment>
      <CustomizeBar />
      <Container fluid>
        <Graph></Graph>
      </Container>
    </Fragment>
  );
}

export default App;
